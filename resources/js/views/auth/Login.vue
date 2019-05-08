<template>
  <section class="uk-section">
    <div class="uk-container">
      <div class="uk-flex-center" uk-grid>
        <div class="uk-width-2-5@m">
          <div class="uk-card uk-card-body uk-box-shadow-small">
            <form @submit.prevent="login">
              <div class="uk-margin">
                <input class="uk-input" type="email" v-model="user.email" placeholder="Email">
              </div>
              <div class="uk-margin">
                <input class="uk-input" type="password" v-model="user.password" placeholder="Password">
              </div>

              <button class="uk-button uk-button-primary">Submit</button>
            </form>
            <hr>
            <ul class="uk-list">
              <li>
                <span uk-icon="chevron-right"></span>
                <router-link :to="{ name: 'register' }">Sign Up</router-link>
              </li>

              <li>
                <span uk-icon="chevron-right"></span>
                <router-link :to="{ name: 'passwordReset' }">Reset Password</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      }
    }
  },

  methods: {
    login() {
      this.$auth.login({
        params: this.user,
        success: function (res) {},
        error: function ({response}) {
          UIkit.notification({
            message: 'Oops! Something very bad happened',
            status: 'error',
            pos: 'top-right',
            timeout: 5000
          });
        },
        rememberMe: true,
        redirect: '/',
        fetchUser: true,
      });
    }
  }
}
</script>
