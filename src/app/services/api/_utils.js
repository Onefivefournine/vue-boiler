export function genRes(commonUrl, methodArr) {
    if (!(methodArr instanceof Array)) throw new TypeError('Methods must be in Array');
    let mObj = {};
    methodArr.forEach((method) => {
        mObj[method.toLowerCase()] = { method }
    })

    return (addUrl, check) => {
        let url;
        if (!addUrl) {
            url = commonUrl;
        } else if (addUrl && typeof addUrl === 'string') {
            url = commonUrl + (check ? '' : '/') + addUrl;
        } else {
            url = commonUrl + addUrl.reduce((el) => '/' + el);
        }
        return Vue.resource(url, null, mObj)
    }
}
export function _r(r) {
    return new Vue.Promise((resolve) => { resolve(r.data) })
}