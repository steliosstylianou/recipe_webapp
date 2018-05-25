<template>
  <div class="container">
    <section class="articles">
      <div class="column is-10 is-offset-1">

        <div class="card article" id="card">
          <div class="card-content">
            <p class="title article-title">{{recipe.Title}}</p>
            <p class="subtitle article-subtitle">{{recipe.Author_Id}}</p>

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
                    <img id="heart" src="../assets/heart.svg">
                  </figure>
                </button>
              </div>
            </div>

            <figure class="media-left">
              <div class="media-content has-text-centered" id="card_image">
                <img :src="recipe.File">
              </div>
            </figure>

            <div class="columns">

              <div class="column is-three-fifths">
                <div class="content article-body" id="method">
                  <h3>Method</h3>
                  <ol>
                    <li v-for="(methodline,index) in recipe.Method.split('\n')" :key="index" >
                      {{methodline}}
                    </li>
                  </ol>
                </div>
              </div>

              <div class="column">
                <div class="content" id="ingredients">
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

<style scoped>

  #card {
    opacity: .93;
  }

  .articles {
    margin-top: 4rem;
    padding-bottom: 3rem;
  }

  .articles .content p {
    line-height: 1.9;
  }

  .media-left {
    margin-bottom: 1rem;
  }

  div.column.is-10:first-child {
    padding-top: 0;
    margin-top: 0;
  }

  #ingredients{
    margin-right: 40px;
    text-align: left;
    text-justify: inter-word;
  }

  #method{
    margin-left: 40px;
    text-align: justify;
    text-justify: inter-word;
  }

  .article-title {
    font-size: 2rem;
    font-weight: lighter;
    line-height: 2;
  }

  .article-subtitle {
    color: #909AA0;
    margin-bottom: 3rem;
  }

  .article-body {
    line-height: 1.4;
    text-align: left;
  }
  .button{
    border: none;
  }

  img#heart {
    padding-left: 10px;
    height: 25px;
  }

  #card_image{
    max-width: 100%;
    height: auto;
  }

</style>
