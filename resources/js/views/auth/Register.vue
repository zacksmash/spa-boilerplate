<template>
  <div>
    <div class="row">
      <div class="large-5 medium-7 small-12 columns">
        <form @submit.prevent="register">
          <input type="text" v-model="user.name" placeholder="Name">
          <input type="email" v-model="user.email" placeholder="Email">
          <input type="password" v-model="user.password" placeholder="Password">
          <input type="password" v-model="user.password_confirmation" placeholder="Confirm Password">
          <button class="button">Submit</button>
        </form>
      </div>
    </div>
  </div>
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
        error: function () {},
        autoLogin: true,
        rememberMe: true,
        redirect: {name: 'dashboard'},
      });
    }
  }
}
</script>
