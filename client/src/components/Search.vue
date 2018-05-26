<template>
  <div class="container has-text-centered">
    <div>
      <input class="input" type="search"
             placeholder="Looking for a recipe?" v-model="search"
             @keydown.enter="submit"
             @compositionstart="composing=true"
             @compositionend="composing=false" id="search-field">
      <a class="button" @click = "submit" id="search-in-field"  >Search</a>
    </div>

    <h1 class="title is-3" v-if="this.searched">Search Results </h1>
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
    name: 'Search',
    components: {
      recipeBox,
      Recipes
    },
    data  () {
      return {
        searched: false,
        search: '',
        composing: false,
        recipes: [],
        itemsPerRow: 3
      }
    },
    methods: {
      async submit () {
        this.searched = true
        try {
          const response = await Recipes.searchRecipe(this.search)
          this.recipes = response.data
        } catch (e) {
          console.log('ERROR WHILE FETCHING' + e)
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
