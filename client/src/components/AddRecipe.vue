<template>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
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
                <textarea class="input" rows="100" placeholder="Ingredients list e.g.: 100g plain flour, 5 apples, etc."></textarea>
              </b-field>

              <b-field>
                <textarea class="input" placeholder="Method."></textarea>
              </b-field>

              <b-field>
                <b-select name="category" v-on:input="changeSelect(this.value)" placeholder="Select category">
                  <option value="0">Food</option>
                  <option value="1">Desserts</option>
                  <option value="2">Beverages</option>
                </b-select>

                <div id="subcats">
                  <b-select name="subcategory0" placeholder="select subcat0" style="display:none">
                    <option value="0">Select Sub-Category</option>
                    <option value="1">A</option>
                    <option value="2">B</option>
                    <option value="3">C</option>
                  </b-select>

                  <b-select name="subcategory1" placeholder="select subcat1" style="display:none">
                    <option value="0">Select Sub-Category</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </b-select>

                  <b-select name="subcategory2" placeholder="select subcat2" style="display:none">
                    <option value="0">Select Sub-Category</option>
                    <option value="1">a</option>
                    <option value="2">b</option>
                    <option value="3">c</option>
                  </b-select>
                </div>
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
  </section>
</template>

<script>
  import particlesJS from './ParticlesJS'

  export default {
    components: {particlesJS},
    data () {
      return {
        title: '',
        ingredients: '',
        description: '',
        files: []
      }
    }
  }

  function changeSelect (selectNo) {
    var sels = document.getElementById('subcats').getElementsByTagName('SELECT')
    for (var j = 0; j < sels.length; j++) {
      sels[j].style.display = 'none'
      if (j === (selectNo - 1)) {
        sels[j].style.display = ''
      }
    }
  }

</script>

<style>
  .hero.is-success {
    background: #F2F6FA;
  }

  .box {
    margin-top: 2rem;
  }

  input {
    margin-bottom: 1rem;
    font-weight: 300;

  }

  textarea {
    margin-bottom: 1rem;
  }

  .button {
    margin-top: 1rem;
    background-color: #30cce7;
    color: white;
  }

  select {
    margin-bottom: 1rem;
  }

  p {
    font-weight: 700;
  }

  p.subtitle {
    padding-top: 2rem;
  }

</style>
