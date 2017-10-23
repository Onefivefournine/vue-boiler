import { cloneWFn } from './clone';

export default function checkModel( entryModel, zeroCheck = false, ...exclude ) { // falsy when entryModel has falsy items
    if ( exclude.includes( entryModel ) ) return true;

    let model = cloneWFn( entryModel );

    return ( ( model ) => {
        if ( !model ) { // falsy model
            return zeroCheck && model === 0;
        } else if (
            model instanceof Array && !model.length ||
            ( Object.prototype.toString.call( model ) === '[object Object]' &&
                !Object.keys( model ).length )
        ) { // model is empty object or emty array
            return false;
        } else if (
            typeof model === 'string' &&
            !model.trim().length
        ) { // model is empty string
            return false;
        } else if (
            typeof model === 'number' &&
            window.isNaN( model )
        ) { // model is NaN
            return false;
        } else if (
            model instanceof Array &&
            model.length
        ) { // if model is not empty array check each element
            return !model.filter( ( elem ) => !checkModel( elem, zeroCheck ) ).length
        } else if (
            Object.prototype.toString.call( model ) === '[object Object]' &&
            Object.keys( model ).length
        ) { // if model is not empty object check each value
            return !Object.values( model ).filter( ( elem ) => !checkModel( elem, zeroCheck ) ).length
        } else { // gratz your model is clean!
            return true
        }
    } )( model )
}

