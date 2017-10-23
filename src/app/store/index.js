import state from './state';
import mutations from './mutations';
import getters from './getters';
import actions from './actions';

import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    strict: process.env.NODE_ENV !== 'production'
})