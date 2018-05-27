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
  #container-landing {
    position: relative;
    width: 10px;
  }

  html {
    background: url("../assets/landing.png") no-repeat center center fixed;
    /*background-size: 100%;*/
    overflow: auto;
    background-size: cover;
    margin-top:100px;
  }

  #container-landing #show-recipes {
    position: absolute;
    top: 350px;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background-color: #555;
    color: white;
    font-size: 16px;
    opacity: 0.75;
    padding: 12px 24px;
    width: 200px;
    height: 50px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.2s;
  }

  #container-landing #show-recipes:hover {
    background-color: gray;
  }

</style>
