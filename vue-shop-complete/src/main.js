import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap';
import Jquery from 'jquery';



import 'popper.js';
import './assets/app.scss';

Vue.component('Navbar', require('./components/Navbar.vue').default);


Vue.config.productionTip = false;

new Vue({
  Jquery,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
