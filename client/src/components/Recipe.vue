<template>
  <div class="container is-mobile">
    <section class="articles" id="rec-article">
      <div class="column is-10 is-offset-1">

        <div class="card article">
          <div class="card-content" id="rec-card-content">
            <p class="title article-title" id="rec-article-title">{{recipe.Title}}</p>
            <p class="subtitle article-subtitle" id="rec-article-subtitle">{{recipe.Author_Id}}</p>

            <div class="columns is-multiline">

              <div class="column">
                <strong>Difficulty</strong>
                <br/>
                {{recipe.Difficulty}}
              </div>
              <div class="column">
                <strong>Total Time</strong>
                <br/>
                {{recipe.Time}} Minutes
              </div>

              <div class="column">
                <strong>Category</strong>
                <br/>
                {{recipe.Category}}, {{recipe.SubCategory}}
              </div>

              <div class="column">
                <button class="button is-medium">
                  Favourite
                  <figure class="avatar">
                    <img id="rec-heart" src="../assets/heart.svg">
                  </figure>
                </button>
              </div>
            </div>

            <figure class="media-left" id="rec-media-left">
              <div class="media-content has-text-centered" id="rec-card_image">
                <img :src="recipe.File">
              </div>
            </figure>

            <div class="columns">

              <div class="column is-three-fifths">
                <div class="content article-body" id="rec-method">
                  <h3>Method</h3>
                  <ol>
                    <li v-for="(methodline,index) in recipe.Method.split('\n')" :key="index" >
                      {{methodline}}
                    </li>
                  </ol>
                </div>
              </div>

              <div class="column">
                <div class="content" id="rec-ingredients">
                  <h3>Ingredients</h3>
                  <section>
                    <div class="field" v-for="(ingredient,index) in recipe.Ingredients.split(',')"
                         :key="index" >
                      <b-checkbox>{{ingredient}}</b-checkbox>
                    </div>
                  </section>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import RecipeAPI from '@/services/Recipes'

  export default {
    name: 'Recipe',
    data () {
      return {
        recipe: {
          Ingredients: '',
          Method: ''
        }
      }
    },
    async created () {
      try {
        const recipeId = this.$store.state.route.params.recipeId
        const response = await RecipeAPI.getRecipe(recipeId)
        this.recipe = response.data
      } catch (e) {
        console.log('ERROR WHILE FETCHING' + e)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container{
    opacity: 0.95;
  }

  div.column.is-10:first-child {
    padding-top: 0;
    margin-top: 0;
  }
</style>
