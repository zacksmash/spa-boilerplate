import './bootstrap';
import router from './router';
import store from './store';
import Vue from 'vue';

// Boot up app
let app = new Vue({
  el: '#app',
  router,
  store,
  mounted() {
    this.$router.afterEach((to, from) => {
      if (this.$auth.check()) {
        if (!to.meta.verify) {
          if (!this.$auth.user().email_verified_at) {
            this.$router.push({ name: 'verifyReminder' });
          }
        }
      }
    })
  }
})
