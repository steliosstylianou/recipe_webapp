<!--<template>-->
  <!--<div class="tile has-text-centered " id="tile-landing">-->
    <!--<figure class="image" >-->
      <!--<img src="../assets/landing2.png" id="landing-image">-->
      <!--<a class="button" @click = "go" id="show-recipes">Show More</a>-->

    <!--</figure>-->
  <!--</div>-->
<!--</template>-->
<template>
  <div class="container" id="container-landing">
  <div id="tile-landing">
    <a class="button" id="show-recipes">Show More</a>
  </div>
  </div>
</template>

<script>
    export default {
        name: 'Landing'
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
    /*margin-bottom:10px;*/
  }



</style>
