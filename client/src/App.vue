<template>
  <div id="app">
    <navigator></navigator>
    <router-view></router-view>
  </div>
</template>

<script>
  import Navigator from '@/components/Navigator.vue'

  export default {
  name: 'app',
    components: {
      Navigator
    }
  }

</script>

<style lang="scss">
  @import "scss/styles.scss";
#app {
  background: url("assets/image2.png");
  background-size: cover;
}

</style>
