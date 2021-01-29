import Vue from 'vue'
import App from './App.vue'
import store from './store'

import axios from 'axios';
import Promise from 'es6-promise';
import _ from 'lodash';
import moment from 'moment'

Vue.prototype.$http = axios;
Vue.prototype.$promise = Promise;
Vue.prototype.$lodash = _;
Vue.prototype.$moment = moment;

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
