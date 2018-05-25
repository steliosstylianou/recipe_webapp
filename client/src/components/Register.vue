<template>
  <section class="hero is-fullheight">
    <div class="hero-body" id="register-herobody">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <div class="box" id="register-box">
            <h3 class="title has-text-black">REGISTER</h3>
            <figure class="avatar">
              <img src="../assets/welcome_chef.svg">
            </figure>
            <p class="subtitle has-text-grey">Please enter your details to register</p>

            <form>

              <b-field>
                <b-input required v-model="name" placeholder="Name">
                </b-input>
              </b-field>

              <b-notification v-if="error" type="is-danger" @close="error = null">
                <div v-html="error" ></div>
              </b-notification>

              <b-field>
                <b-input required type="email" v-model="email" placeholder="Email Address">
                </b-input>
              </b-field>

              <b-field>
                <b-input required type="password" v-model="password" placeholder="Password" password-reveal>
                </b-input>
              </b-field>

              <button @click="register" class="button is-block is-medium is-fullwidth ">Register
              </button>
              <br/>
              <div class="has-text-centered">
                <router-link to="login">Already have an account? Sign in!</router-link>
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
        name: '',
        email: '',
        password: '',
        error: null
      }
    },

    methods: {

      async register () {
        try {
          const response = await Authentication.register({
            email: this.email,
            password: this.password,
            name: this.name
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

  .hero , .hero.is-success .nav {
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  #register-box {
    margin-top: 2rem;
    opacity: 0.95;
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
  }

</style>
