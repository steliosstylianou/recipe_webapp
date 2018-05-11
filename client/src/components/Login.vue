<template>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Login</h3>
          <p class="subtitle has-text-grey">Please enter your details to log in</p>
          <div class="box">
            <form>
              <b-field>
                <b-input type="email"
                         v-model="email"
                         placeholder="Email Address"
                         rounded>
                </b-input>
              </b-field>

              <b-field>
                <b-input type="password"
                         v-model="password"
                         placeholder="Password"
                         rounded
                         password-reveal>
                </b-input>
              </b-field>

              <button @click="login" class="button is-block is-info is-medium is-fullwidth is-rounded">Login</button>
              <br/>

              <div class="has-text-centered">
                <router-link to="register">Don't have an account? Register!</router-link>
              </div>

            </form>
          </div>
          <p class="has-text-grey">
            <a href=".">Forgot Password</a>
          </p>
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
    data() {
      return {
        email: '',
        password: '',
        error: null
      }
    },

    methods:{

      async login (){
        try {
          const response = await Authentication.login({
            email: this.email,
            password: this.password
          })
          this.$store.dispatch('setToken',response.data.token);
          this.$store.dispatch('setUser',response.data.user);

        } catch (error) {
          this.error = this.response.data.error;
          }
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


