<template>
  <section class="hero is-fullheight is-mobile body">
    <div class="hero-body">
      <div class="container has-text-centered" id="container-home">
        <div class="column is-4 is-offset-4 is-mobile">
          <div class="box">

            <h3 class="title">LOGIN</h3>
            <img src="../assets/welcomeback_chef.svg">
            <p class="subtitle-login has-text-grey">Please enter your details to log in</p>

            <form>
              <b-notification v-if="error" type="is-danger" @close="error = null">
                <div v-html="error" ></div>
              </b-notification>

              <b-field>
                <b-input type="email" required v-model="email" placeholder="Email Address">
                </b-input>
              </b-field>

              <b-field>
                <b-input type="password" required v-model="password" placeholder="Password" password-reveal>
                </b-input>
              </b-field>

              <button @click="login" class="button is-medium is-fullwidth" id="log-login">Login</button>
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

<style lang="scss" scoped>
  .body {
    opacity: 0.95;
  }
</style>
