<template>
  <div id='navigator'>
  <section class="hero is-primary is-small ">
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
      <nav class="navbar">
        <div class="container is-fluid">
          <div class="navbar-brand">
            <a class="navbar-item">
              THE BEST RECIPES
              <!--<img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">-->
            </a>
            <span class="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
          </div>
          <div id="navbarMenuHeroA" class="navbar-menu">
            <div class="navbar-end">

              <a class="navbar-item">
                Profile
              </a>
              <a class="navbar-item">
                Favourites
                <img id="heart" src="../assets/heart.svg">
              </a>

              <span class="navbar-item">
              <a v-if="$store.state.isUserLoggedIn" @click="logout" class="button is-primary is-inverted">
                <span>Sign-Out</span>
              </a>
              <a v-else @click="navigateTo({name: 'Login'})"
                 class="button is-primary is-inverted">
                <span>Sign In/Register</span>
              </a>
            </span>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <!-- Hero footer: will stick at the bottom -->
    <div class="hero-foot">
      <b-dropdown>
        <button class="button is-primary" slot="trigger">
          <img src="../assets/cutlery.svg">
          <span>Food Recipes</span>
          <b-icon icon="menu-down"></b-icon>
        </button>

        <b-dropdown-item>Appetizers</b-dropdown-item>
        <b-dropdown-item>Meat & Poultry</b-dropdown-item>
        <b-dropdown-item>Fish</b-dropdown-item>
        <b-dropdown-item>Fish</b-dropdown-item>
        <b-dropdown-item>Salads</b-dropdown-item>
        <b-dropdown-item>Pasta</b-dropdown-item>
        <b-dropdown-item>Soups</b-dropdown-item>
        <b-dropdown-item>Light Meals</b-dropdown-item>
      </b-dropdown>

      <b-dropdown>
        <button class="button is-primary" slot="trigger">
          <img src="../assets/desserts.svg">
          <span>Desserts</span>
          <b-icon icon="menu-down"></b-icon>
        </button>
        <b-dropdown-item>Chocolate</b-dropdown-item>
        <b-dropdown-item>Cakes</b-dropdown-item>
        <b-dropdown-item>Cookies</b-dropdown-item>
        <b-dropdown-item>Creams</b-dropdown-item>
        <b-dropdown-item>Tarts</b-dropdown-item>
        <b-dropdown-item>Cheesecakes</b-dropdown-item>
        <b-dropdown-item>Ice Creams</b-dropdown-item>
      </b-dropdown>

      <b-dropdown>
        <button class="button is-primary" slot="trigger">
          <img src="../assets/beverages.svg">
          <span>Beverages</span>
          <b-icon icon="menu-down"></b-icon>
        </button>
        <b-dropdown-item>Alcoholic</b-dropdown-item>
        <b-dropdown-item>Non-Alcoholic</b-dropdown-item>
        <b-dropdown-item>Milkshakes</b-dropdown-item>
        <b-dropdown-item>Smoothies</b-dropdown-item>
      </b-dropdown>
    </div>
  </section>
  </div>
</template>

<script>
  export default {
    methods: {
      navigateTo (route) {
        this.$router.push(route)
      },
      logout () {
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)
        this.$router.push({
          name: 'Home'
        })
      }
    }
  }
</script>

<style scoped>
  .button.is-primary {
    background-color: darkgrey;
  }
  .button.is-primary:hover {
    background-color: white;
    color: black;
  }

  .hero.is-primary a.navbar-item:hover {
    background-color: white;
    color: black;
    text-align: center;
  }

  .hero.is-primary a.navbar-item {
    background-color: darkgrey;
    color: white;
    text-align: center;
  }

  .hero-head, .hero-body, .hero-foot {
    background-color: darkgrey;
    text-align: center;
    height: 40px;
  }

  .button.is-primary.is-inverted {

    background-color: darkgrey;
    color: white;
    text-align: center;
  }

  .button.is-primary.is-inverted:hover {
    background-color: white;
    color: black;
    text-align: center;
  }
  img#heart{
    height: 20px;
    margin-left: 5px;
  }

</style>
