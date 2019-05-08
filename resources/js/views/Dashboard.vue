<template>
  <section class="uk-section">
    <div class="uk-container">
      <div class="uk-flex-center" uk-grid>
        <div class="uk-width-2-5@m">
          <div class="uk-card uk-box-shadow-small">
            <div class="uk-card-header">
                <h3 class="uk-card-title">
                  Welcome!
                </h3>
            </div>
            <div class="uk-card-body">
              <div class="uk-text-center">
                <a uk-icon="icon: user; ratio: 5"></a>
                <p>
                  Dashboard for {{ $auth.user().name }}
                </p>
              </div>

            </div>
            <div class="uk-card-footer">
              <button class="uk-button uk-button-primary uk-width-1-1" @click="logout">
                <span uk-icon="sign-out"></span>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
