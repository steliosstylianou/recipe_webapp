<template>
  <section class="section">
    <h1 class="title">Uploading a new recipe? How exciting!</h1>
    <div class="columns is-mobile is-multiline">
      <div class="column">

        <b-field>
          <b-input placeholder="Recipe Title"
                   v-model="recipe.title">
          </b-input>
        </b-field>

        <b-field>
          <b-input placeholder="How long will you recipe need? (in minutes)"
                   v-model="recipe.time"
          ></b-input>
        </b-field>

        <b-field>
          <b-select name="difficulty" placeholder="Select difficulty" v-model="recipe.difficulty">
            <option value="0">Beginner</option>
            <option value="1">Intermediate</option>
            <option value="2">Expert</option>
          </b-select>
        </b-field>

        <b-field>
          <b-select name="category" placeholder="Select category"
                    v-model="recipe.category">
            <option v-for="(category_obj, category) in categories" :key="category">{{category}}</option>
          </b-select>

          <b-select name="subcategory" placeholder="select sub-category" v-model="recipe.subcategory">
            <option v-for="(sub_cat, subcat) in subcats" :key="subcat">{{sub_cat}}</option>
          </b-select>

        </b-field>

        <b-field>
          <b-upload v-model="dropFiles" multiple drag-drop>
            <section class="section">
              <div class="content has-text-centered">
                <p>
                  <b-icon
                    icon="upload"
                    size="is-large">
                  </b-icon>
                </p>
                <p>Drop your files here or click to upload</p>
              </div>
            </section>
          </b-upload>
        </b-field>

        <div class="tags">
            <span v-for="(file, index) in dropFiles" :key="index" class="tag is-primary" >
                {{file.name}}
                <button class="delete is-small"
                        type="button"
                        @click="deleteDropFile(index)">
                </button>
            </span>
        </div>

      </div>
      <div class="column">
        <b-field>
          <textarea class="input"
                    id="ingredients"
                    placeholder="Ingredients list e.g.: 100g plain flour, 5 apples, etc."
                    v-model="recipe.ingredients">

          </textarea>
        </b-field>

        <b-field>
          <textarea class="input"
                    id="method"
                    placeholder="Please describe the method in steps e.g.: 1: Preheat the oven.
                    2: Mix the ingredients together. etc."
                    v-model="recipe.method">

          </textarea>
        </b-field>

      </div>
    </div>
    <button class="button is-medium" id="upload">Upload your lovely recipe!</button>
  </section>
</template>

<script>
  import BField from 'buefy/src/components/field/Field'

  export default {
    components: {BField},

    data () {
      return {
        recipe: {
          title: '',
          author: '',
          category: '',
          subcategory: '',
          difficulty: '',
          ingredients: '',
          time: '',
          method: ''
        },

        dropFiles: [],

        categories: {
          'Food': [
            'thisF',
            'andthisF',
            'andthisF'
          ],
          'Desserts': [
            'thisD',
            'andthisD',
            'andthisD'
          ],
          'Beverages': [
            'thisB',
            'andthisB',
            'andthisB'
          ]
        },
        subcats: []
      }
    },
    watch: {
    'recipe.category': function () {
        // Clear previously selected values
        this.subcats = []
        // Populate list of countries in the second dropdown
        if (this.recipe.category.length > 0) {
          this.subcats = this.categories[this.recipe.category]
        }
      }
    }

  }
</script>

<style>
  .column{
    margin-top: 20px;
    margin-right: 100px;
    margin-left: 100px;
  }
  textarea#ingredients {
    height: 100px;
    width: 500px;
  }
  textarea#method{
    height: 300px;
    width: 500px;
  }
  button#upload{
    background-color: #30cce7;
    color: white;
  }

</style>
