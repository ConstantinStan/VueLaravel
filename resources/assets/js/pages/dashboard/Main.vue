<template>
  <div class="wrapper">
    <sidebar></sidebar>

    <div id="content">

      <top-bar></top-bar>
      <!--  Main Content -->
      <router-view></router-view>

    </div>
   </div>


</template>

<script>
import Sidebar from '../../partials/dashboard/Sidebar.vue';
import TopBar from '../../partials/dashboard/TopBar.vue';

export default {
  components: {
    Sidebar,
    TopBar
  }
}
</script>

<style lang="css">
</style>
