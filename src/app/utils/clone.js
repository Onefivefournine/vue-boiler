export function clone( obj ) {
    return JSON.parse( JSON.stringify( obj ) )
}

export function cloneWFn( obj ) {
    function stringifyFn( key, val ) {
        if ( typeof val === 'function' ) {
            return '***' + val;
        }
        return val;
    }

    function parserFn( key, val ) {
        if ( typeof val === 'string' && val.startsWith( '***function' ) ) {
            return ( new Function( 'return ' + val.substr( 3 ) ) )();
        }
        return val;
    }
    return JSON.parse( JSON.stringify( obj, stringifyFn ), parserFn )
}

