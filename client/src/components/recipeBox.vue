<template>
  <div class="column is-one-third">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <div class="image-hover img-inner-shadow">
            <a @click="navigateTo({
            name: 'Recipe',
            params: {
              recipeId: idkey
            }})">
              <img :src="img" class="image-hover img-inner-shadow" >
              <div class="layer"></div>
            </a>
          </div>
        </figure>
      </div>

      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4 ">{{title}}</p>
            <p class="subtitle is-5">By {{author}}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
      name: 'recipeBox',
      props: [
        'title',
        'author',
        'description',
        'img',
        'idkey'
      ],
      methods: {
        navigateTo (route) {
          this.$router.push(route)
        }
      }
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

  .img-inner-shadow .layer {position:absolute;top:0px;right:0px;bottom:0px;left:0px}

  .img-inner-shadow:hover .layer
  {
    box-shadow:inset 0px 0px 120px rgba(255, 255, 255, 0.9);
    -moz-box-shadow:inset 0px 0px 120px rgba(255, 255, 255, 0.9);
    -webkit-box-shadow:inset 0px 0px 120px rgba(255, 255, 255, 0.9)
  }

  .img-inner-shadow .layer
  {
    transition:all 0.6s ease-in-out;
    -webkit-transition:all 0.6s ease-in-out;
    -moz-transition:all 0.6s ease-in-out;
    -ms-transition:all 0.6s ease-in-out;
    -o-transition:all 0.6s ease-in-out;
  }

  .img-inner-shadow:hover .layer
  {
    transition:all 0.6s ease-in-out;
    -webkit-transition:all 0.6s ease-in-out;
    -moz-transition:all 0.6s ease-in-out;
    -ms-transition:all 0.6s ease-in-out;
    -o-transition:all 0.6s ease-in-out;
  }

</style>
