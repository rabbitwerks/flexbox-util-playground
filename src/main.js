import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import App from './App.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
