<template>
  <div class="column is-one-third">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <div class="image-hover img-inner-shadow">
            <a @click="navigateTo({name: 'Recipe', params: {recipeId: idkey}})">
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
