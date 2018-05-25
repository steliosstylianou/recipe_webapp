<template>
  <div class="container">
    <div class="columns" v-for="i in Math.ceil(recipes.length / itemsPerRow)" :key="i">
      <recipe-box v-for="item in
      recipes.slice((i - 1) * itemsPerRow, i * itemsPerRow)"
                  :key="item.Id" :title="item.Title"
                  :author="item.Author_Id" :description="item.Method" :img="item.File">
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

<style scoped>
  .container {
    margin-top: 50px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 20px;
  }

</style>
