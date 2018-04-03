import '../css/main.scss';

import './config';
import router from './routes';
import store from './store';

import '@filters';

export const App = new Vue({
    router,
    store,
    el: '#app',
    computed: {
        showSpinner: {
            get: function () {
                return this.$store.state.loading;
            },
            set: () => {}
        }
    }
});