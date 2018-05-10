<template>
  <body>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Register</h3>
          <p class="subtitle has-text-grey">Please enter your details to register to our website.</p>
          <div class="box">
            <form>

              <b-field>
                <b-input v-model="name"
                         placeholder="Name"
                         rounded>
                </b-input>
              </b-field>

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

              <button @click="register" class="button is-block is-info is-medium is-fullwidth is-rounded">Register</button>
              <br/>
              <div class="has-text-centered">
                <a href="log-in.html"> Already have an account? Sign in!</a>
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
  </body>
</template>

<script>
  import particlesJS from './ParticlesJS'
  import Authentication from '@/services/Authentication'

  export default {
    components: {particlesJS},
    data() {
      return {
        name: '',
        email: '',
        password: ''
      }
    },

    methods:{

      async register (){
        const response = await Authentication.register({
          name: this.name,
          email: this.email,
          password: this.password
        })
        console.log(response.data);
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


