<template>
  <section class="hero" id="body">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container is-fluid">
          <div class="navbar-brand">
            <img id="nav-logo" src="../assets/logo_chef.svg" @click="navigateTo({name: 'Login'})">
            <span class="navbar-burger burger" data-target="navbarMenuHeroA"></span>
          </div>
          <div id="navbarMenuHeroA" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item">
                <b-dropdown hoverable>
                  <button class="button" slot="trigger" id="nav-item">
                    <img id="nav-cutlery" src="../assets/cutlery.svg">
                    <span>Food</span>
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
              </a>
              <a class="navbar-item">
                <b-dropdown hoverable>
                  <button class="button" slot="trigger" id="nav-item">
                    <img id="nav-desserts" src="../assets/desserts.svg">
                    <span>Desserts</span>
                  </button>

                  <b-dropdown-item>Chocolate</b-dropdown-item>
                  <b-dropdown-item>Cakes</b-dropdown-item>
                  <b-dropdown-item>Cookies</b-dropdown-item>
                  <b-dropdown-item>Creams</b-dropdown-item>
                  <b-dropdown-item>Tarts</b-dropdown-item>
                  <b-dropdown-item>Cheesecakes</b-dropdown-item>
                  <b-dropdown-item>Ice Creams</b-dropdown-item>
                </b-dropdown>
              </a>
              <a class="navbar-item">
                <b-dropdown hoverable>
                  <button class="button" slot="trigger" id="nav-item">
                    <img id="nav-beverages" src="../assets/beverages.svg">
                    <span>Beverages</span>
                  </button>

                  <b-dropdown-item>Alcoholic</b-dropdown-item>
                  <b-dropdown-item>Non-Alcoholic</b-dropdown-item>
                  <b-dropdown-item>Milkshakes</b-dropdown-item>
                  <b-dropdown-item>Smoothies</b-dropdown-item>
                </b-dropdown>
              </a>
            </div>
            <div class="navbar-end">
                  <div class="field has-addons" id="nav-search">
                    <div class="control" id="nav-box">
                      <input class="input has-text-centered" type="search" placeholder="Looking for a recipe?">
                    </div>
                    <div class="control">
                      <a class="button">Search</a>
                    </div>
                  </div>
              <a class="navbar-item">
                Profile
              </a>
              <a class="navbar-item">
                Favourites
              </a>
              <span class="navbar-item">
                <a v-if="$store.state.isUserLoggedIn" @click="logout" class="button">
                  <span>Sign-Out</span>
                </a>
                <a v-else @click="navigateTo({name: 'Login'})" class="button" id="nav-item">
                  <span>Sign In/Register</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </section>
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

<style lang="scss" scoped>
  @import "../scss/styles.scss";
  #body{
    background: rgba(255, 255, 255, 0.2);
  }
</style>
