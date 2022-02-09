import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Toasted from 'vue-toasted'

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Toasted);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/main',
      component: () => import('./components/MainPage.vue')
    },
    {
      path: '/study/binding',
      component: () => import('./components/study/BindingPage.vue')
    },
    {
      path: '/study/directive',
      component: () => import('./components/study/DirectivePage.vue')
    },
    {
      path: '/study/event',
      component: () => import('./components/study/EventPage.vue')
    },
    {
      path: '/*',
      redirect: '/main',
    }
  ]
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
