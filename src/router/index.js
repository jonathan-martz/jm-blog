import {createRouter, createWebHashHistory} from 'vue-router';
import HomePage from '@/views/Homepage.vue';
import Impressum from '@/views/Impressum.vue';
import Articel from '@/views/Articel.vue';
import Articels from '@/views/Articels.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/impressum', component: Impressum },
    { path: '/news/:id', component: Articel },
    { path: '/articels', component: Articels },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router;