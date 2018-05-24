<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <div class="box">
            <h3 class="title has-text-black">LOGIN</h3>
            <figure class="avatar">
              <img src="../assets/welcomeback_chef.svg">
            </figure>
            <p class="subtitle has-text-grey">Please enter your details to log in</p>
            <form>

              <b-notification v-if="error" type="is-danger" @close="error = null">
                <div v-html="error" ></div>
              </b-notification>

              <b-field>
                <b-input type="email" v-model="email" placeholder="Email Address">
                </b-input>
              </b-field>

              <b-field>
                <b-input type="password" v-model="password" placeholder="Password" password-reveal>
                </b-input>
              </b-field>

              <button @click="login" class="button is-medium">Login</button>
              <br/>

              <div class="has-text-centered">
                <router-link to="register">Don't have an account? Register!</router-link>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import particlesJS from './ParticlesJS'
  import Authentication from '@/services/Authentication'

  export default {
    components: {particlesJS},
    data () {
      return {
        email: '',
        password: '',
        error: null
      }
    },

    methods: {
      async login () {
        try {
          const response = await Authentication.login({
            email: this.email,
            password: this.password
          })
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
        } catch (error) {
          this.error = error.response.data.error
          }
      }
    }
  }
</script>

<style scoped>
  .hero.is-success {
    background: #F2F6FA;
  }

  .hero .nav, .hero.is-success .nav {
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .hero{
    background-color: lightgrey;
    /*-webkit-filter: blur(2px);*/
    /*-moz-filter: blur(2px);*/
    /*-o-filter: blur(2px);*/
    /*-ms-filter: blur(2px);*/
    /*filter: blur(2px);*/
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
  .button{
    background-color: grey;
    color: white;
    width: fit-content;

  }

</style>
