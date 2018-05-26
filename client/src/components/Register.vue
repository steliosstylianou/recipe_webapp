<template>
  <section class="hero is-fullheight body-register">
    <navigator></navigator>
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <div class="box" id="register-box">

            <h3 class="title has-text-black">REGISTER</h3>
            <img src="../assets/welcome_chef.svg">
            <p class="subtitle has-text-grey">Please enter your details to register</p>

            <form>
              <b-field>
                <b-input required v-model="name" placeholder="Name"></b-input>
              </b-field>

              <b-notification v-if="error" type="is-danger" @close="error = null">
                <div v-html="error" ></div>
              </b-notification>

              <b-field>
                <b-input required type="email" v-model="email" placeholder="Email Address"></b-input>
              </b-field>

              <b-field>
                <b-input required type="password" v-model="password" placeholder="Password" password-reveal></b-input>
              </b-field>

              <button @click="register" class="button is-medium is-fullwidth" id="reg-register">Register</button>
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
  import Navigator from './Navigator'

  export default {
    components: {
      particlesJS,
      Navigator
    },
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

<style lang="scss" scoped>
  .body {
    opacity: 0.95;
  }
</style>
