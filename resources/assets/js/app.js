
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import VueRouter from 'vue-router';
import router from './routes';

window.Vue = require('vue');
Vue.use(VueRouter);
/**
 * Check if we access a guarded route and redirect to login page
 *
 */
router.beforeEach((to, from, next) => {
  console.log(to.meta)
  let accessToken = localStorage.getItem('access_token');
  if (to.meta.requiredAuth) {
    if (accessToken) {
      return next();
    } else {
      return router.push({ path: 'login' })
    }
  }

  next();
});

/**
 * Redirect to login page if error is 401
 */
window.axios.interceptors.response.use(response => { // intercept the global error
    //  console.log('go ahead ->');
    //  console.log('response', response)
    //  console.log(router.path)
     return response
   }, function (error) {
     if (error.response.status === 401) {
       return router.push({ path: 'login' })
     }

     if (error.response.status === 404) {
        return 'page not found';
     }

     // Do something with response error
     return Promise.reject(error)
   })


const app = new Vue({
    el: '#app',
    router
});
