import axios from 'axios';
// import AuthService from './auth';
Vue.axios = axios;

let API_BASE = '';
let protocol = (document.location && document.location.protocol) || 'http:';
Vue.axios.defaults.baseURL = API_BASE;
// Vue.axios.defaults.headers.common['Authorization'] = 'Bearer '+auth_token


export {
    // AuthService,
};