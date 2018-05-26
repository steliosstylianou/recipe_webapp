<template>
  <div class="container" id="home-container">
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

  export default {
    name: 'Home',
    components: {
      recipeBox,
      Recipes
    },
    data () {
      return {
        recipes: [],
        itemsPerRow: 3
      }
    },
    async mounted () {
      // request to backend for all recipes
      this.recipes = (await Recipes.getAllRecipes()).data
    }

  }
</script>
