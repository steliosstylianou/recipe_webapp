<template>
  <div class="container" id="container-landing">
  <div id="tile-landing">
    <a class="button" @click="go ()" id="show-recipes">Show More</a>
  </div>
  </div>
</template>

<script>
    export default {
      name: 'Landing',
      methods: {
        async go () {
          this.$router.push({name: 'Home'})
          window.location.reload()
        }
      }
    }

</script>

<style>
  html {
    background: url("../assets/landing.png") no-repeat center center fixed;
    /*background-size: 100%;*/
    overflow: auto;
    background-size: cover;
    margin-top:100px;
  }

</style>
