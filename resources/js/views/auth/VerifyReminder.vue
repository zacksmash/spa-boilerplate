<template>
  <section class="uk-section">
    <div class="uk-container">
      <div class="uk-flex-center" uk-grid>
        <div class="uk-alert-primary uk-width-1-1" uk-alert>
          <p class="uk-flex@s uk-flex-between">
            Your account has not been verified. Check your email for a verification link.

            <a class="uk-link-muted" @click="resendEmail">Resend Verification Email</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {

    }
  },

  methods: {
    resendEmail() {
      this.$http.post('auth/email/resend')
      .then((res) => {
        UIkit.notification({
          message: 'A verification link has been re-sent to you',
          status: 'success',
          pos: 'top-right',
          timeout: 5000
        });

        if (res.status === 202) {
          this.$router.push({name: 'dashboard'});
        }
      });
    }
  },

  mounted() {
    if (this.$auth.user().email_verified_at) {
      this.$router.push({name: 'dashboard'});
    }
  }
}
</script>
