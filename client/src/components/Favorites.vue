<template>
  <div class="container has-text-centered">
    <h1 class="title is-3">Favourites</h1>
    <div class="columns is-mobile" v-for="i in Math.ceil(recipes.length / itemsPerRow)" :key="i">
      <recipe-box v-for="item in
      recipes.slice((i - 1) * itemsPerRow, i * itemsPerRow)"
                  :key="item.Id" :title="item.Title"
                  :author="item.Author_Id" :description="item.Method"
                  :img="item.File" :idkey="item.Id">
      </recipe-box>
    </div>
  </div>
</template>

<script>
  import recipeBox from './recipeBox'
  import Recipes from '@/services/Recipes'
  import FavoriteAPI from '@/services/Favorites'

  export default {
    name: 'Favorites',
    components: {
      recipeBox
    },
    data () {
      return {
        recipes: [],
        favorites: [],
        itemsPerRow: 3
      }
    },
    async created () {
        try {
          const userId = this.$store.state.user.Id
          const response = await FavoriteAPI.getAllFavorites(userId)
          this.favorites = response.data
        } catch (e) {
          this.error = 'error while fetching recipe'
        }
      },
    methods: {
      favRecipe(id) {
        try {
          const fav = await Recipes.getRecipe(rec.Id)
          this.favorites.append(fav)
          }
        } catch (e) {
          this.error = e.response.data.error
        }
      }
    }
  }

</script>

<style lang="scss" scoped>
  .container {
    opacity: 0.95;
  }
</style>
