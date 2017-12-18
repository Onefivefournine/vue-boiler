#!/bin/bash

ask (){
QUESTION=$1
DEFAULTS_TO=$2
DEFAULT_ANS=$3

while true; do
    read -e -p "$QUESTION" ans
    # default if no answer
    if [ "$ans" = "" ]; then
    	ans=$DEFAULTS_TO
    	echo $DEFAULT_ANS
    fi

    case $ans in
        [Yy]* ) RET=1; break;;
        [Nn]* ) RET=0; break;;
        * ) echo "Invalid answer. Please answer y or n";;
    esac
done
return $RET
}

makeFiles(){
	WHERE=$1
	TEMPLATE=$2

	if [ -d $WHERE ]; then
		echo '<div></div>' > $WHERE/index.html
		echo "$TEMPLATE" > $WHERE/index.vue
	else
		mkdir $WHERE
		echo '<div></div>' > $WHERE/index.html
		echo "$TEMPLATE" > $WHERE/index.vue
	fi

}

while true; do
	    read -e -p "Specify a path for a module(src/app/modules): " path
	    if [ "$path" = "" ]; then
		    path="src/app/modules"
		    echo 'Defaults to '$path', continuing'
		    break
		elif [ -d  $path ]; then
		    echo 'The directory '$path' exists! continuing'
		    break
		else
			ask "The directory $path does not exist! Create directory?(Y) " "Y" "Created new dir at $path"
			if [ $? ]; then
				mkdir $path
			fi
		fi	   
done

while true; do
	    read -e -p "Module name?: " name
	    if [ "$name" = "" ]; then
		   continue
		elif [ -f  $path/$name ]; then
		    echo 'The module '$name' exists!'
		    continue
		else
			upName="$(echo "${name:0:1}" | tr '[a-z]' '[A-Z]')""${name:1}"
			echo $upName
			break
		fi	   
done

ask "External template?(Y): " "Y" 'Defaults to external template, continuing' 
EXTERNAL_HTML=$?

ask "CRUD?(N): " "N" 'Defaults to single(not CRUD), continuing'
CRUD=$?

ask "Need route?(N): " "N" 'Defaults to no route, continuing'
ROUTE=$?

ask "Need api service?(N): " "N" 'Defaults to no service, continuing'
SERVICE=$?

echo "Building module..."
mkdir $path/$name

if [ $EXTERNAL_HTML = 1 ]; then
	EXT_TMP='<template src="./index.html"></template>
	<script>
'

	if [ $SERVICE = 1 ]; then
		EXT_TMP+="import {"$upName"Api} from '@services/api';"
	fi

	EXT_TMP+="
export default Vue.extend( {
    data() {
        return {
           
        }
    },
    created() {

    },
    methods: {

    }
} );
</script>" 
else
	VUE_TMP="<template>
<div></div>
</template>
<script>
"
	if [ $SERVICE = 1 ]; then
			VUE_TMP+="import {"$upName"Api} from '@services/api';"
	fi
VUE_TMP+="
export default Vue.extend( {
    data() {
        return {
           
        }
    },
    created() {

    },
    methods: {

    }
} );
</script>"
fi

if [ $CRUD = 1 ]; then

	if [ -n "$EXT_TMP" ] && [ "$EXT_TMP" != "" ]; then
		makeFiles $path/$name/create "$EXT_TMP"
		makeFiles $path/$name/update "$EXT_TMP"
		makeFiles $path/$name/list "$EXT_TMP"
	elif [ -n "$VUE_TMP" ] && [ "$VUE_TMP" != "" ]; then
		makeFiles $path/$name/create "$VUE_TMP"
		makeFiles $path/$name/update "$VUE_TMP"
		makeFiles $path/$name/list "$VUE_TMP"
	else
		echo "TEMPLATE ERROR crud"
		exit
	fi
else
	if [ -n "$EXT_TMP" ] && [ "$EXT_TMP" != "" ]; then
		makeFiles $path/$name "$EXT_TMP"
	elif [ -n "$VUE_TMP" ] && [ "$VUE_TMP" != "" ]; then
		makeFiles $path/$name "$VUE_TMP"
	else
		echo "TEMPLATE ERROR not crud"
		exit
	fi
fi

if [ $SERVICE = 1 ]; then
	echo "import { _r, genRes } from './_utils';

const "$name"Res = genRes('"$name"', ['GET','POST','PUT','DELETE']);

export default {
    getList:(params)=>"$name"Res().get(params).then(_r),
};
" > 'src/app/services/api/'$name'.js'
fi

if [ $ROUTE = 1 ]; then
	if [ $CRUD = 1 ]; then
		echo "import List from '@modules/"$name"/list';
import Create from '@modules/"$name"/create';
import Update from '@modules/"$name"/update';

import { abstract, _crud_ } from './_utils';

export default {
    path: '"$name"',
    name: '"$name"',
    component: abstract,
    redirect: '/cabinet/"$name"/list',
    children: _crud_(
        List,
        Create,
        Update, {
            namespace: '"$name":',
            crumbs: [
                null,
                [{ href: { name: '"$name":list' }, title: '' }, 'Создать '],
                [{ href: { name: '"$name":list' }, title: '' }, 'Изменить '],
            ]
        }),
}" > "src/app/routes/"$name".js"
	else
		echo "/*
{
    path: '"$name"',
    name: '"$name"',
    component: "$upName",
}
*/" >> "src/app/routes/index.js"
	fi
fi

echo '***********************************'
echo 'Created module '$name' at '$path
echo 'External template: '$EXTERNAL_HTML
echo 'CRUD: '$CRUD
echo 'Route: '$ROUTE
echo 'ApiService: '$SERVICE

exit
