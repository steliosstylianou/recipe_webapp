<template>
  <div class="body">
    <navigator></navigator>
    <div class="container has-text-centered" id="favorites-container">
      <h1 class="title is-3">Favourites</h1>
      <div v-if="error">
        <b-notification has-icon v-if="error" type="is-danger" :closable="false" >
          <div v-html="error" ></div>
        </b-notification>
      </div>
      <div v-else>
        <div class="columns" v-for="i in Math.ceil(favorites.length / itemsPerRow)" :key="i">
          <recipe-box v-for="item in
      favorites.slice((i - 1) * itemsPerRow, i * itemsPerRow)"
                      :key="item.Id" :title="item.Title"
                      :author="item.Author_Id" :description="item.Method"
                      :img="item.File" :idkey="item.Id">
          </recipe-box>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import recipeBox from './recipeBox'
  import FavoriteAPI from '@/services/Favorites'
  import Navigator from './Navigator.vue'

  export default {
    name: 'Favorites',
    components: {
      recipeBox,
      Navigator
    },
    data () {
      return {
        favorites: [],
        itemsPerRow: 3,
        error: null
      }
    },
    async created () {
      try {
        const response = await FavoriteAPI.getAllFavorites()
        this.favorites = response.data
      } catch (e) {
        this.error = e.response.data.error
      }
    }
  }

</script>

<style lang="scss" scoped>
  .container {
    opacity: 0.95;
  }
</style>
