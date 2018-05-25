<template>
  <div class="column is-one-third">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="img" alt="Placeholder image">
        </figure>
      </div>

      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{title}}</p>
            <p class="subtitle is-5">By {{author}}</p>
          </div>
        </div>

        <div class="content">
          {{description | truncate 50}}
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
        'img'
      ]
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
