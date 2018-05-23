<template>
  <div class="container">
    <div class="columns" v-for="i in Math.ceil(recipes.length / itemsPerRow)" :key="i">
      <image-home v-for="item in
      recipes.slice((i - 1) * itemsPerRow, i * itemsPerRow)" :key="item.Id">
      </image-home>
    </div>
  </div>
</template>

<script>
  import imageHome from './ImageHome'
  import Recipes from '@/services/Recipes'

  export default {
    name: 'Home',
    components: {
      imageHome,
      Recipes
    },
    data () {
      return {
        recipes: [],
        itemsPerRow: 3
      }
    },
    async created () {
      // request to backend for all recipes
      this.recipes = (await Recipes.getAllRecipes()).data
    }

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
