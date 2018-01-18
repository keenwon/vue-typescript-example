import Vue from 'vue';
import router from './router';
import App from './views/App.vue';

// tslint:disable-next-line
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
