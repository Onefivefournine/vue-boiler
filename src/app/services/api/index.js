import VueResource from 'vue-resource';
Vue.use(VueResource);

// import AuthApi from './auth';

let API_BASE;
let protocol = (document.location && document.location.protocol) || 'http:';

switch (process.env.url) {
  case 'loc':
    API_BASE = `${protocol}//127.0.0.1:4321`;
    break;
  case 'dev':
    API_BASE = `${protocol}//dev.api`;
    break;
  default:
    API_BASE = `${protocol}//prod.api`;
    break;
}

Vue.http.options = {
  root: API_BASE
};

export {
  // AuthApi,
};