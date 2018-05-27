<template>
  <div class="body">
    <navigator></navigator>
    <div class="container has-text-centered">
      <p class="title">{{this.$store.state.route.params.categoryId}}</p>
      <div class="columns is-mobile" v-for="i in Math.ceil(recipes.length / itemsPerRow)" :key="i">
        <recipe-box v-for="item in
      recipes.slice((i - 1) * itemsPerRow, i * itemsPerRow)"
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
  import Recipes from '@/services/Recipes'
  import Navigator from './Navigator'

  export default {
    components: {
      Navigator,
      recipeBox,
      Recipes
    },
    data  () {
      return {
        recipes: [],
        itemsPerRow: 3,
      }
    },
    methods: {
      async updatePage () {
        try {
          const categoryId = this.$store.state.route.params.categoryId
          this.recipes = (await Recipes.searchRecipe(categoryId)).data
          console.log('Got in')
        } catch (e) {
          console.log('ERROR WHILE FETCHING' + e)
        }
      }
    },
    created () {
      this.updatePage()
    },
    beforeRouteUpdate (to, from, next) {
      next()
      this.updatePage()
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    opacity: 0.95;
  }
</style>
