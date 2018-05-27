<template>
  <div class="body">
    <navigator></navigator>
    <div class="container has-text-centered">
      <h1 class="title is-3">Favourites</h1>
      <div class="columns is-mobile" v-for="i in Math.ceil(favorites.length / itemsPerRow)" :key="i">
        <recipe-box v-for="item in
      favorites.slice((i - 1) * itemsPerRow, i * itemsPerRow)"
                    :key="item.Id" :title="item.Title"
                    :author="item.Author_Id" :description="item.Method"
                    :img="item.File" :idkey="item.Id">
        </recipe-box>
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
        itemsPerRow: 3
      }
    },
    async created () {
      try {
        const response = await FavoriteAPI.getAllFavorites()
        this.favorites = response.data
      } catch (e) {
        this.error = 'error while fetching recipe'
      }
    }
  }

</script>

<style lang="scss" scoped>
  .container {
    opacity: 0.95;
  }
</style>
