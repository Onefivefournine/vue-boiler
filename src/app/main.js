import '../css/main.scss';

import './config';
import router from './routes';
import store from './store';
// import '@services/interceptor';

// components
// import notifystr from 'notifystr';
// import spinner from '@components/spinner';

// services
// import check from '@services/check_user';
import '@filters';

export const App = new Vue({
    router,
    store,
    components: {
        // notifystr,
        // spinner
    },
    // beforeMount() {
    //     check(this);
    // },
    computed: {
        showSpinner: {
            get: function() {
                return this.$store.state.loading;
            },
            set: () => {}
        }
    }
}).$mount('#app');