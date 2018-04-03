#!/bin/sh

if [ ! -d "$1/$2" ]; then
    mkdir $1/$2
fi

echo "$(cat $(dirname $0)'/_component-template.vue')" > $1/$2/index.vue

echo 'created component '$2' at '$1