<template>
  <div class="container" id="container-landing">
  <div id="tile-landing">
    <a class="button" @click="navigateTo ({name: 'Home'})" id="show-recipes">Show More</a>
  </div>
  </div>
</template>

<script>
    export default {
      name: 'Landing',

      methods: {
        navigateTo (route) {
          this.$router.push(route)
        }
      }
    }

</script>

<style>
  #container-landing {
    position: relative;
    width: 10px;
  }

  html {
    background: url("../assets/landing2.png") no-repeat center center fixed;
    background-size: 100%;
    overflow: auto;
    background-size: cover;
    margin-top:100px;
  }
</style>
