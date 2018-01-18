import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import App from './views/App.vue';
import PageA from './views/PageA.vue';
import PageB from './views/PageB.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/page/a',
    component: PageA
  },
  {
    path: '/page/b',
    component: PageB
  }
];

const router: VueRouter = new VueRouter({
  mode: 'history',
  routes
});

export default router;
