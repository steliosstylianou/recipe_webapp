<template>
  <section class="hero is-primary is-small">
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
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
                Home
              </a>
              <a class="navbar-item">
                Profile
              </a>
              <a class="navbar-item">
                Favourites
              </a>
              <span class="navbar-item">
              <a class="button is-primary is-inverted">
                <span>Sign-In/Sign-Out</span>
              </a>
            </span>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          Sintagoulles
        </h1>
        <h2 class="subtitle">
          Probably the best recipes in the world...
        </h2>
      </div>
    </div>

    <!-- Hero footer: will stick at the bottom -->
    <div class="hero-foot">
      <b-dropdown>
      <button class="button is-primary" slot="trigger">
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
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        title: 'Welcome Back',
        user: {
          firstName: 'Leni',
          lastName: 'Belly'
        }
      }
    }
  }
</script>

<style scoped>

</style>
