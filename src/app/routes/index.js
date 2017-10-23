// import Auth from './auth';

// import MainLayout from '@modules/cabinet';

const routes = [
// Auth,
    {
        path: '/cabinet',
        name: 'cabinet',
        component: { template: '<div></div>' },
        redirect: '/',
        children: [
        // {
        //         path: '/profile',
        //         name: 'profile',
        //         component: Profile
        // },
    ],
}, {
        path: '*',
        redirect: '/',
        name: '404'
}];

import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'active'
});

export default router;