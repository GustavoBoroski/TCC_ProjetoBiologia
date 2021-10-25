import Vue from 'vue';
import Router from 'vue-router';
import FirstScreen from './pages/FirstScreen';
import PageGame from './pages/PageGame';

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
        }
    ]
});

export default router;