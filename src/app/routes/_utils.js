export const abstract = {
    template: `<router-view></router-view>`,
};

export function _crud_(listComp, createComp, updateComp, namespace = '', hasShow) {
    let arr = [];
    if (listComp) arr.push(createRoute(namespace, 'list', listComp, false));
    if (createComp) arr.push(createRoute(namespace, 'create', createComp, false));
    if (updateComp) arr.push(createRoute(namespace, (hasShow ? 'show' : 'update'), updateComp, true));

    return arr;
}
export function createRoute(namespace = '', name, component, hasId) {
    let route = {
        name: namespace + name,
        path: name + (hasId ? '/:id' : ''),
        component,
    };
    return route;
}
