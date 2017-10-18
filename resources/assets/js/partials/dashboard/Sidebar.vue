<template>
  <nav class="sidebar">
      <div class="sidebar-header">
          <h3 class="text-white">CreativeR</h3>
          <strong class="text-white">CR</strong>
      </div>

      <ul class="list-unstyled components" id="exampleAccordion" data-children="li">
          <li class="header dark-bg">Menu</li>
          <li :class="isGroup('dashboards')">
              <a href="#dashboards" data-toggle="collapse" data-parent="#exampleAccordion" :aria-expanded="isGroup('components')">
                <i class="fa fa-cogs"></i>
                <span class="sidebar__item">Components</span>
                <span class="sidebar__arrow">
                  <i class="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul class="collapse list-unstyled" :class="{ 'show': isGroup('components') }" id="dashboards">
                  <li>
                    <router-link to="/forms" active-class="sidebar-active">
                      <span class="sidebar__link-icon"><i class="fa fa-circle-o"></i></span> Forms
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/widgets" active-class="sidebar-active">
                      <span class="sidebar__link-icon"><i class="fa fa-circle-o"></i></span> Widgets
                    </router-link>
                  </li>
                  <li>
                    <a href="#">
                      <span class="sidebar__link-icon"><i class="fa fa-circle-o"></i></span> Sample
                    </a>
                  </li>
              </ul>
          </li>
          <li>
            <a href="#pages" data-toggle="collapse" aria-expanded="false" data-parent="#exampleAccordion">
              <i class="fa fa-files-o"></i>
              <span>Pages</span>
              <span class="sidebar__arrow">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
            </a>
            <ul class="collapse list-unstyled" id="pages">
                <li>
                  <router-link to="/register">
                    <span class="sidebar__link-icon"><i class="fa fa-circle-o"></i></span> Register
                  </router-link>
                </li>
                <li>
                  <router-link to="/login">
                    <span class="sidebar__link-icon"><i class="fa fa-circle-o"></i></span> Login
                  </router-link>
                </li>
            </ul>
          </li>
      </ul>

  </nav>
</template>

<script>
export default {
    methods: {
        isGroup(group) {
          return this.$route.meta.group === group;
        },
    },
}
</script>

<style lang="css">
</style>
