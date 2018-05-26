<template>
  <section class="hero body">
    <div class="hero-head">

      <nav class="navbar" id="navigator-navbar">
        <div class="container" id="container-navigator">
          <div class="navbar-brand" >
            <img id="nav-logo" src="../assets/logo_chef.svg" @click="navigateTo({name: 'Home'})">
            <!--<span class="navbar-burger burger" data-target="navbarMenuHeroA"></span>-->
            <a role="button" class="navbar-burger" data-target="navbarMenuHeroA">
              <span ></span>
              <span></span>
              <span></span>
            </a>
          </div>
          <div id="navbarMenuHeroA" class="navbar-menu">
            <div class="navbar-start" >

              <div class="navbar-item has-dropdown is-hoverable" >
                <a class="navbar-link">
                  <img id="nav-cutlery"  src="../assets/cutlery_bw.svg">
                  Food
                </a>
                <div class="navbar-dropdown is-boxed is-display">
                  <a class="navbar-item">
                    Appetizers
                  </a>
                  <a class="navbar-item">
                    Meat & Poultry
                  </a>
                  <a class="navbar-item">
                    Fish
                  </a>
                  <a class="navbar-item">
                    Pasta
                  </a>
                </div>
              </div>

              <a class="navbar-item has-dropdown is-hoverable">

                <a class="navbar-link">

                  <img id="nav-desserts" src="../assets/desserts_bw.svg">
                  Desserts
                </a>
                <div class="navbar-dropdown is-boxed">
                  <a class="navbar-item">
                    Chocolate
                  </a>
                  <a class="navbar-item">
                    Cakes
                  </a>
                  <a class="navbar-item">
                    Cookies
                  </a>
                  <a class="navbar-item">
                    Ice Creams
                  </a>
                </div>
              </a>

              <a class="navbar-item has-dropdown is-hoverable">

                <a class="navbar-link">
                  <img id="nav-beverages" src="../assets/beverages_bw.svg">
                  Beverages
                </a>
                <div class="navbar-dropdown is-boxed">
                  <a class="navbar-item">
                    Alcoholic
                  </a>
                  <a class="navbar-item">
                    Non-Alcoholic
                  </a>
                  <a class="navbar-item">
                    Milkshakes
                  </a>
                  <a class="navbar-item">
                    Smoothies
                  </a>
                </div>
              </a>

            </div>
            <div class="navbar-end">
              <!--<div class="field has-addons" id="nav-search">-->

              <!--</div>-->
              <a class="navbar-item" @click="navigateTo({name: 'Search'})">
                Search
                <img id="search-button" src="../assets/search_bw.svg">
              </a>
              <a class="navbar-item">
                Profile
              </a>
              <a class="navbar-item">
                Favourites
              </a>
              <a class="navbar-item">
                <a v-if="$store.state.isUserLoggedIn" @click="logout" class="navbar-item">
                  <span>Sign-Out</span>
                </a>
                <a v-else @click="navigateTo({name: 'Login'})" class="navbar-item">
                  <span>Sign In/Register</span>
                </a>
              </a>
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
