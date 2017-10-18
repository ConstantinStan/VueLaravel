<template>
  <div class="row min-h-fullscreen center-vh p-20 m-0">
    <router-view></router-view>
    <auth-footer></auth-footer>
  </div>

</template>

<script>
import Form from '../../helpers/Form.js';
import AuthFooter from '../../partials/auth/AuthFooter.vue';

export default {
  components: {
    AuthFooter
  },
}
</script>

<style lang="css">
</style>
