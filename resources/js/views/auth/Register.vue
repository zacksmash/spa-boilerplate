<template>
  <section class="uk-section">
    <div class="uk-container">
      <div class="uk-flex-center" uk-grid>
        <div class="uk-width-2-5@m">
          <div class="uk-card uk-card-body uk-box-shadow-small">
            <form @submit.prevent="register">
              <div class="uk-margin">
                <input class="uk-input" type="text" v-model="user.name" placeholder="Name">
              </div>
              <div class="uk-margin">
                <input class="uk-input" type="email" v-model="user.email" placeholder="Email">
              </div>
              <div class="uk-margin">
                <input class="uk-input" type="password" v-model="user.password" placeholder="Password">
              </div>
              <div class="uk-margin">
                <input class="uk-input" type="password" v-model="user.password_confirmation" placeholder="Confirm Password">
              </div>

              <button class="uk-button uk-button-primary">Submit</button>
            </form>
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
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    }
  },

  methods: {
    register() {
      this.$auth.register({
        params: this.user,
        success: function () {},
        error: function () {
          UIkit.notification({
            message: 'Oops! Something very bad happened',
            status: 'error',
            pos: 'top-right',
            timeout: 5000
          });
        },
        autoLogin: true,
        rememberMe: true,
        redirect: {name: 'dashboard'},
      });
    }
  }
}
</script>
