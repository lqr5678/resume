import {
  createRouter,
  createWebHashHistory
} from 'vue-router';
import {
  childrenRoute
} from './childrenRoute.js';


const routes = [{
  path: '/',
  name: 'Home',
  component: () => import("../views/Home.vue"),
  children: childrenRoute
}]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router