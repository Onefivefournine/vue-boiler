export default {
    get: ( label ) => JSON.parse( window.localStorage.getItem( label ) || false ),
    set: ( label, data ) => window.localStorage.setItem( label, JSON.stringify( data ) ),
    rm: ( label ) => window.localStorage.removeItem( label ),
    clear: () => window.localStorage.clear()
}

