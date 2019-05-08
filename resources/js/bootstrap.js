// Import libraries
import UIkitIcons from 'uikit/dist/js/uikit-icons';
import _ from 'lodash';
import $ from 'jquery';
import axios from 'axios';
import router from './router';

// Vue Dependencies
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';

/** UIkit Icons Plugin */
UIkit.use(UIkitIcons);

// Setup the Base URL for all API requests
let baseURL = `${location.protocol}//${location.hostname}`;

// If there's a port (Browsersync) add it
if (location.port) {
  baseURL = baseURL + ':' + location.port;
}

// Set the Axios base URL
axios.defaults.baseURL = `${baseURL}/api`;
Vue.router = router;

// Register Vue Plugins
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

// Configure Vue Auth settings
Vue.use(require('@websanova/vue-auth'), {
  auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
  tokenDefaultName: 'auth_token',
  tokenStore: ['cookie', 'localStorage'],
  parseUserData: function (data) {
    return data;
  },
  forbiddenRedirect: {
    path: '/unauthorized'
  },
  notFoundRedirect: {
    path: '/not-found'
  },
});

// Register Global Components
Vue.component('example-component', require('./components/ExampleComponent'));
