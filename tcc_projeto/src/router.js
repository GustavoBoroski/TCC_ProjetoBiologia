import Vue from 'vue';
import Router from 'vue-router';
import FirstScreen from './pages/FirstScreen';
import PageGame from './pages/PageGame';
import Info from './pages/Info';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
  
        {
            path: '/',
            component: FirstScreen,
        },
        {
            path: '/game',
            component: PageGame,
        },
        {
            path: '/info',
            component: Info,
        }
    ]
});

export default router;