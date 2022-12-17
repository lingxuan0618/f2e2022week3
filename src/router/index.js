import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/RoleInfo',
    name: 'RoleInfo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RoleInfo.vue'),
  },
  {
    path: '/POExplain',
    name: 'POExplain',
    component: () => import('../views/POExplain.vue'),
  },
  {
    path: '/SprintPlan',
    name: 'SprintPlan',
    component: () => import('../views/SprintPlan.vue'),
  },
  {
    path: '/EndView',
    name: 'EndView',
    component: () => import('../views/EndView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
