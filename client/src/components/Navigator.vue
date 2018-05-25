<template>
  <section class="hero is-small" id="body">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container is-fluid">
          <div class="navbar-brand">
            <img id="logo" src="../assets/logo_chef.svg" @click="navigateTo({name: 'Login'})">
            <span class="navbar-burger burger" data-target="navbarMenuHeroA"></span>
          </div>
          <div id="navbarMenuHeroA" class="navbar-menu">
            <div class="navbar-end">
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
                <a v-else @click="navigateTo({name: 'Login'})" class="button" id="sign">
                  <span>Sign In/Register</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div class="hero-foot">
      <b-dropdown>
        <button class="button" slot="trigger" id="drop">
          <img id="cutlery" src="../assets/cutlery.svg">
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

      <b-dropdown>
        <button class="button" slot="trigger" id="drop">
          <img id="desserts" src="../assets/desserts.svg">
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

      <b-dropdown>
        <button class="button" slot="trigger" id="drop">
          <img id="beverages" src="../assets/beverages.svg">
          <span>Beverages</span>
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
    methods: {
      navigateTo(route) {
        this.$router.push(route)
      },
      logout() {
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
    background: rgba(255, 255, 255, 0.7);
  }

  #sign{
    background: none;
    border: none;
  }

  #drop{
    border: none;
  }

  img#logo {
    height: 70px;
    margin-top: 10px;
  }

  img#cutlery {
    height: 30px;
    padding-right: 5px;
  }

  img#beverages {
    height: 30px;
    padding-right: 5px;
  }

  img#desserts {
    height: 30px;
    padding-right: 5px;
  }


</style>
