<template>
  <body>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Upload a new recipe</h3>
          <p class="subtitle has-text-grey">Please complete the recipe details.</p>
          <div class="box">
            <form>

              <b-field>
                <b-input type="title"
                         v-model="Title"
                         placeholder="Recipe Title"
                         rounded>
                </b-input>
              </b-field>

              <b-field>
                <b-input type="ingredients"
                         v-model="Ingredients"
                         placeholder="Ingredients list e.g.: 100g plain flour, 5 apples, etc."
                         rounded>
                </b-input>
              </b-field>

              <b-field>
                <b-input type="method"
                         v-model="Method"
                         placeholder="Recipe Method"
                         rounded>
                </b-input>
              </b-field>

              <b-field>
                <b-select placeholder="Select a category">
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                </b-select>
              </b-field>

              <b-field class="file">
                <b-upload v-model="files">
                  <a class="button is-primary">
                    <span>Click to upload image</span>
                  </a>
                </b-upload>
                <span class="file-name"
                  v-if="files && files.length">
                  {{ files[0].name }}
                </span>
              </b-field>

              <button @click="upload" class="button is-block is-info is-medium is-fullwidth is-rounded">Upload</button>
              <br/>

            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  </body>
</template>

<script>
  import particlesJS from './ParticlesJS'
  import Authentication from '@/services/Authentication'

  export default {
    components: {particlesJS},
    data() {
      return {
        title: '',
        ingredients: '',
        description: '',
        files: []
      }
    }
  }
</script>

<style>
  .hero.is-success {
    background: #F2F6FA;
  }

  .hero .nav, .hero.is-success .nav {
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .box {
    margin-top: 2rem;
  }

  input {
    font-weight: 300;
  }

  p {
    font-weight: 700;
  }

  p.subtitle {
    padding-top: 2rem;
  }

</style>


