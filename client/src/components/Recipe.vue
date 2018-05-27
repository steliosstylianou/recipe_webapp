<template>
  <div class="body">
    <navigator></navigator>
  <div class="container has-text-centered">
    <section class="articles" id="rec-article">
      <div class="column is-10 is-offset-1">

        <div class="card article">
          <div class="card-content" id="rec-card-content">
            <p class="title article-title" id="rec-article-title">{{recipe.Title}}</p>
            <p class="subtitle article-subtitle" id="rec-article-subtitle">{{recipe.Author_Id}}</p>

            <div class="columns is-multiline is-mobile">

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

              <div class="column" v-if="$store.state.isUserLoggedIn">
                <button class="button is-medium" v-if="isfavorite" @click="unfavorite">
                  UnFavourite
                  <figure class="avatar">
                    <img id="heart" src="../assets/heart_bw.svg">
                  </figure>
                </button>

                <button class="button is-medium" v-else @click="favorite">
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
              <div class="column">
                <div class="content" id="rec-ingredients">
                  <h3>Ingredients</h3>
                  <section>
                    <div class="field" v-for="(ingredient,index) in recipe.Ingredients.split(',')"
                         :key="index">
                      <b-checkbox>{{ingredient}}</b-checkbox>
                    </div>
                  </section>
                </div>
              </div>

              <div class="column is-three-fifths">
                <div class="content article-body" id="rec-method">
                  <h3>Method</h3>
                  <ol>
                    <li v-for="(methodline,index) in recipe.Method.split('\n')" :key="index">
                      {{methodline}}
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  </div>
</template>

<script>
  import RecipeAPI from '@/services/Recipes'
  import FavoriteAPI from '@/services/Favorites'
  import Navigator from '@/components/Navigator.vue'

  export default {
    name: 'Recipe',
    components: {
      Navigator
    },
    data () {
      return {
        recipe: {
          Ingredients: '',
          Method: ''
        },
        error: '',
        isfavorite: false
      }
    },
    async created () {
      try {
        const recipeId = this.$store.state.route.params.recipeId
        this.recipe = (await RecipeAPI.getRecipe(recipeId)).data
      } catch (e) {
        this.error = 'error while fetching recipe'
      }
    },

    async mounted () {
      if (this.$store.state.isUserLoggedIn) {
        try {
          this.isfavorite = (await FavoriteAPI.getFavorite(
            this.$store.state.route.params.recipeId)).data.Id
        } catch (e) {
          this.error = e.response.data.error
        }
      }
    },
  methods: {
    async favorite () {
        try {
          console.log('fav')
          this.isfavorite = (await FavoriteAPI.postFavorite(
            this.recipe.Id)).data.id
        } catch (error) {
          this.error = error.response.data.error
        }
      },
      async unfavorite () {
        try {
          console.log('unfav')
          await FavoriteAPI.deleteFavorite(this.recipe.Id)
          this.isfavorite = false
        } catch (error) {
          this.error = error.response.data.error
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    opacity: 0.95;
  }

  div.column.is-10:first-child {
    padding-top: 0;
    margin-top: 0;
  }
</style>
