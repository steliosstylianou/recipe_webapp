<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <!--First column-->
        <image_home></image_home>
      </div>
      <div class="column">
        <!--Second column-->
        <image_home></image_home>
      </div>
      <div class="column">
        <!--Third column-->
        <image_home></image_home>
      </div>
    </div>
    <div class="container">
      <div class="columns">
        <div class="column">
          <!--First column-->
          <image_home></image_home>
        </div>
        <div class="column">
          <!--Second column-->
          <image_home></image_home>
        </div>
        <div class="column">
          <!--Third column-->
          <image_home></image_home>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import image_home from './Image_home'

  export default {
        name: "Home",
    components: {image_home}
  }
</script>

<style scoped>
  .container {
    margin-top: 30px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 20px;
  }
</style>
