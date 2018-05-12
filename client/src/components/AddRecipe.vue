<template>
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
                <textarea class="input" placeholder="Ingredients list e.g.: 100g plain flour, 5 apples, etc." rounded></textarea>
              </b-field>

              <b-field>
                <textarea class="input" placeholder="Method." rounded></textarea>
              </b-field>

              <b-field>
                <b-select placeholder="Select a category">
                  <option value="1">Food</option>
                  <option value="2">Desserts</option>
                  <option value="3">Beverages</option>
                  <option value="4">Beverages</option>
                  <option value="5">Beverages</option>
                  <option value="6">Beverages</option>
                  <option value="7">Beverages</option>
                  <option value="8">Beverages</option>
                  <option value="9">Beverages</option>
                  <option value="10">Beverages</option>
                  <option value="11">Beverages</option>
                  <option value="12">Beverages</option>
                  <option value="13">Beverages</option>
                  <option value="14">Beverages</option>
                  <option value="15">Beverages</option>
                  <option value="16">Beverages</option>
                  <option value="17">Beverages</option>
                  <option value="18">Beverages</option>
                  <option value="19">Beverages</option>
                </b-select>
              </b-field>

              <b-field class="file">
                <b-upload v-model="files">
                  <a class="button is-medium is-rounded">
                    <span>Click to upload image</span>
                  </a>
                </b-upload>
                <span class="file-name"
                  v-if="files && files.length">
                  {{ files[0].name }}
                </span>
              </b-field>

              <button @click="upload" class="button is-medium is-rounded">Upload</button>
              <br/>

            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import particlesJS from './ParticlesJS'

  export default {
    components: { particlesJS},
    data () {
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
    margin-left: -500px;
    width: 1425px;
    height: 500px;
  }

  input {
    font-weight: 300;

  }

  .button {
    background-color: #30cce7;
    color: white;
  }

  p {
    font-weight: 700;
  }

  p.subtitle {
    padding-top: 2rem;
  }

</style>
