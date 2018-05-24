<template>
  <div class="column">
  <figure id="Cookies" class="image">
      <img src="../assets/cookies.jpg">
      <div class="text-block">
        <h4>Name of the food</h4>
        <p></p>
      </div>
    </figure>
  </div>
</template>

<script>
    export default {
        name: 'imageHome'
    }
</script>

<style scoped>
  #im {
    color: black;

  }
  .text-block {

    position: absolute;
    bottom: 0px;
    background-color: #B5B6B8;
    /*color: white;*/
    opacity: 0.65;
    padding-left: 70px;
    padding-right: 70px;
  }

</style>
