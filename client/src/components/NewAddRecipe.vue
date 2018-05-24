<template>
  <section class="section">
    <h1 class="title">Uploading a new recipe? How exciting!</h1>
    <div class="columns is-mobile is-multiline">
      <div class="column">
        <b-field>
          <b-input placeholder="Recipe Title"></b-input>
        </b-field>

        <b-field>
          <b-input placeholder="How long will you recipe need? (in minutes)"></b-input>
        </b-field>

        <b-field>
          <b-select name="difficulty" placeholder="Select difficulty">
            <option value="0">Beginner</option>
            <option value="1">Intermediate</option>
            <option value="2">Expert</option>
          </b-select>
        </b-field>

        <b-field>
          <b-select name="category" v-on:input="changeSelect()" placeholder="Select category" v-model="selected">
            <option value="0">Food</option>
            <option value="1">Desserts</option>
            <option value="2">Beverages</option>
          </b-select>

          <div id="subcats">
            <b-select name="subcategory0" placeholder="select subcat0" v-show="selected === 0">
              <option value="0">Select Sub-Category</option>
              <option value="1">A</option>
              <option value="2">B</option>
              <option value="3">C</option>
            </b-select>

            <b-select name="subcategory1" placeholder="select subcat1" v-show="selected === 1">
              <option value="0">Select Sub-Category</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </b-select>

            <b-select name="subcategory2" placeholder="select subcat2" v-show="showSubcats2">
              <option value="0">Select Sub-Category</option>
              <option value="1">a</option>
              <option value="2">b</option>
              <option value="3">c</option>
            </b-select>
          </div>
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
          <textarea class="input" id="ingredients" placeholder="Ingredients list e.g.: 100g plain flour, 5 apples, etc."></textarea>
        </b-field>
        <b-field>
          <textarea class="input" id="method" placeholder="Method."></textarea>
        </b-field>

      </div>
    </div>
    <button @click="upload" class="button is-medium">Upload your lovely recipe!</button>
  </section>
</template>

<script>
  import BField from "buefy/src/components/field/Field";
  export default {
    components: {BField},
    data() {
      return {
        dropFiles: []
      }
    },
    methods: {
      deleteDropFile(index) {
        this.dropFiles.splice(index, 1)
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

</style>
