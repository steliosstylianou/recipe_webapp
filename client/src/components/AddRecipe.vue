<template>
  <div class="body">
    <navigator id="add-nav"></navigator>
    <section class="section">
      <div class="container has-text-centered">
      <h1 class="title add-title">Uploading a new recipe? How exciting!</h1>
      <b-notification v-if="error" type="is-danger" @close="error = null">
        <div v-html="error" ></div>
      </b-notification>

      <div class="columns is-multiline is-mobile">
        <div class="column add-column">

          <b-field>
            <b-input required placeholder="Recipe Title" v-model="recipe.title">
            </b-input>
          </b-field>

          <b-field>
            <b-input required placeholder="Time needed? (in minutes)" v-model="recipe.time"></b-input>
          </b-field>

          <b-field>
            <b-select required name="difficulty" placeholder="Select difficulty" v-model="recipe.difficulty">
              <option >Beginner</option>
              <option >Intermediate</option>
              <option >Expert</option>
            </b-select>
          </b-field>

          <b-field>
            <b-select required name="category" placeholder="Select category" v-model="recipe.category">
              <option v-for="(category_obj, category) in categories" :key="category">{{category}}</option>
            </b-select>

            <b-select required name="subcategory" placeholder="select sub-category" v-model="recipe.subcategory">
              <option v-for="(sub_cat, subcat) in subcats" :key="subcat">{{sub_cat}}</option>
            </b-select>
          </b-field>

          <picture-input
            ref="pictureInput"
            width="500"
            height="500"
            accept="image/jpeg,image/png"
            size="5"
            removeButtonClass="button is-danger"
            buttonClass="button is-link"
            :removable="true"
            :custom-strings="{
              upload: '<h1>Upload!</h1>',
              drag: 'Upload a picture of the recipe!'
            }"
            @change="onChange"
            @remove="onRemoved">
          </picture-input>

        </div>

        <div class="column add-column">
          <b-field>
            <textarea class="input" id="add-ingredients" placeholder="Ingredients list e.g.: 100g plain flour, 5 apples, etc." v-model="recipe.ingredients">
            </textarea>
          </b-field>

          <b-field>
            <textarea class="input" id="add-method"
                      placeholder="Please describe the method in steps (each step separated by a new line) e.g.: Preheat the oven. Mix the ingredients together. etc."
                      v-model="recipe.method">
            </textarea>
          </b-field>

        </div>
      </div>
      <button class="button is-medium add-button" :disabled="!isComplete" id="upload" @click="upload">
        <img src="../assets/upload.svg" id="add-upload-button">
        Upload your lovely recipe!
      </button>
      </div>
    </section>
  </div>
</template>

<script>
  import BField from 'buefy/src/components/field/Field'
  import PictureInput from 'vue-picture-input'
  import Recipes from '@/services/Recipes'
  import Navigator from './Navigator'

  export default {
    components: {
      Navigator,
      BField,
      PictureInput,
      Recipes
    },

    methods: {
      async upload () {
        try {
          const formData = new FormData()
          formData.append('recipe', this.recipe.file)
          formData.append('title', this.recipe.title)
          formData.append('author', this.$store.state.user.name)
          formData.append('category', this.recipe.category)
          formData.append('subcategory', this.recipe.subcategory)
          formData.append('difficulty', this.recipe.difficulty)
          formData.append('time', this.recipe.time)
          formData.append('ingredients', this.recipe.ingredients)
          formData.append('method', this.recipe.method)

          await Recipes.createRecipe(formData)
          this.$router.push({name: 'Home'})
        } catch (error) {
          console.log(error)
          this.error = error.response.data.error
        }
      },
      onChange () {
        console.log('New picture loaded')
        if (this.$refs.pictureInput.file) {
          this.recipe.file = this.$refs.pictureInput.file
        } else {
          console.log('Old browser. No support for Filereader API')
        }
      },
      onRemoved () {
        this.recipe.file = null
      }
    },

    data () {
      return {
        error: null,

        recipe: {
          title: '',
          author: '',
          category: '',
          subcategory: '',
          difficulty: '',
          ingredients: '',
          time: '',
          method: '',
          file: null
        },

        categories: {
          'Food': [
            'Appetizers',
            'Meat',
            'Fish',
            'Pasta'
          ],
          'Desserts': [
            'Chocolate',
            'Cakes',
            'Cookies',
            'Waffles'
          ],
          'Beverages': [
            'Alcoholic',
            'Non-Alcoholic',
            'Milkshakes',
            'Smoothies'
          ]
        },
        subcats: []
      }
    },

    watch: {
    'recipe.category': function () {
        this.subcats = ['']
        if (this.recipe.category.length > 0) {
          this.subcats = this.categories[this.recipe.category]
        }
      }
    },

    computed: {
      isComplete () {
        return (this.recipe.title && this.recipe.category && this.recipe.subcategory &&
          this.recipe.difficulty && this.recipe.ingredients && this.recipe.time &&
          this.recipe.method && this.recipe.file)
      }
    },
    created () {
      if (!this.$store.state.isUserLoggedIn) {
       this.$router.push({name: 'Login'})
      }
    }
  }
</script>
