// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Home from './components/Home'
import HelloWorld from './components/HelloWorld'
import User from './components/User'
import Json from './components/Json'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
/* eslint-disable no-new */
const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/home', component: Home},
    {path: '/helloWorld', component: HelloWorld},
    {path: '/user', component: User},
    {path: '/json', component: Json}
  ]
})


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
