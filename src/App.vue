<template>
  <Header />
  <NavSidebar />
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<!-- ######################################################## -->

<script>
  import Header from './components/Header';
  import NavSidebar from './components/NavSidebar';

  export default {
    name: 'App',
    components: {
      Header,
      NavSidebar
    }
  }
</script>

<!-- ######################################################## -->

<style>
  .content {
    /* Shift content left by amount of navigation width */
    margin-left: 200px;
  }
</style>
