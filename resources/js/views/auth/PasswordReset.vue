<template>
  <section class="uk-section">
    <div class="uk-container">
      <div class="uk-flex-center" uk-grid>
        <div class="uk-width-2-5@m">
          <div class="uk-card uk-card-body uk-box-shadow-small">
            <div v-if="!token">
              <form @submit.prevent="sendResetEmail">
                <div class="uk-margin">
                  <input class="uk-input" type="email" v-model="user.email" placeholder="Email">
                </div>
                <button class="uk-button uk-button-primary">Send Email</button>
              </form>
            </div>

            <div v-else>
              <form @submit.prevent="resetPassword">
                <div class="uk-margin">
                  <input class="uk-input" type="email" v-model="user.email" placeholder="Email">
                </div>
                <div class="uk-margin">
                  <input class="uk-input" type="password" v-model="user.password" placeholder="Password">
                </div>
                <div class="uk-margin">
                  <input class="uk-input" type="password" v-model="user.password_confirmation" placeholder="Confirm Password">
                </div>
                <button class="uk-button uk-button-primary">Reset Password</button>
              </form>
            </div>
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
        password_confirmation: ''
      }
    }
  },

  props: ['token'],

  methods: {
    sendResetEmail() {
      this.$http.post('/auth/password/remind', {
        email: this.user.email
      })
      .then((res) => {
        UIkit.notification({
            message: 'A reset link has been re-sent to you',
            status: 'success',
            pos: 'top-right',
            timeout: 5000
        });
      })
      .catch((error) => {
        UIkit.notification({
            message: 'Oops! Something very bad happened',
            status: 'error',
            pos: 'top-right',
            timeout: 5000
        });
      })
    },

    resetPassword() {
      this.$http.post('/auth/password/reset', {
        email: this.user.email,
        password: this.user.password,
        password_confirmation: this.user.password_confirmation,
        token: this.token
      })
      .then((res) => {
        this.$auth.login({
          params: {
            email: this.user.email,
            password: this.user.password
          },
          success: function() {
            //
          },
          error: function (error) {
            //
          },
          rememberMe: true,
          fetchUser: true,
          redirect: '/',
        });
      })
      .catch((error) => {
        UIkit.notification({
          message: 'Oops! Something very bad happened',
          status: 'error',
          pos: 'top-right',
          timeout: 5000
        });
      });
    },
  }
}
</script>
