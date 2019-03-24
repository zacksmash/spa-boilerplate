<template>
  <div>
    Dashboard {{ $auth.user().name }}

    <button class="button" @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$auth.logout({
        makeRequest: true,
        redirect: '/login'
      });
    }
  }
}
</script>
