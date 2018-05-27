<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
  name: 'app'
  }
</script>

<style lang="scss">
  @import "scss/styles.scss";
#app {
  background: url("assets/backround6.png");
  background-size: cover;
  /*overflow: auto;*/
}

</style>
