import {createRouter, createWebHashHistory} from 'vue-router';
import HomePage from '@/views/Homepage.vue';
import Impressum from '@/views/Impressum.vue';
import Articel from '@/views/Articel.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/impressum', component: Impressum },
    { path: '/news/:id', component: Articel },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router;