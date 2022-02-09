import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Toasted from 'vue-toasted'

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Toasted);

const router = new VueRouter({
  mode: 'hash',
  base: process.env.NODE_ENV === 'production'
    ? '/vue_notion/'   //任意
    : '/',
  routes: [
    {
      path: '/',
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
      redirect: '/',
    }
  ]
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
