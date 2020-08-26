import Vue from "vue";
import Router from 'vue-router';
import PageHome from './pages/home';
import PageShow from './pages/show';
import NotFound from './pages/not-found';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: PageHome,
        },
        {
            path: '/show',
            name: 'show',
            component: PageShow,
        },
        {
            path: '*',
            name: 'notfound',
            component: NotFound,
        },
    ]
})