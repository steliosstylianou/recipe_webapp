<template>
  <section class="hero body">
    <div class="hero-head">

      <nav class="navbar" id="navigator-navbar">
        <div class="container" id="container-navigator">
          <div class="navbar-brand">
            <img id="nav-logo" src="../assets/logo_chef.svg" @click="navigateTo({name: 'Home'})">
            <div class="navbar-burger burger" @click="toggleMenu" :class="{'is-active': navIsActive}"
                 data-target="navbarMenuHeroA">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div id="navbarMenuHeroA" class="navbar-menu" @click="toggleMenu" :class="{'is-active': navIsActive}">
            <div class="navbar-start">

              <a class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link" v-on:mouseover="setHover('cutlery')" v-on:mouseleave="setUnhover('cutlery')">
                  <img id="nav-cutlery" v-if="!cutleryHover" src="../assets/cutlery_bw.svg">
                  <img id="nav-cutlery" v-if="cutleryHover" src="../assets/cutlery.svg">
                  Food
                </a>
                <div class="navbar-dropdown is-boxed">
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
              </a>

              <a class="navbar-item has-dropdown is-hoverable">

                <a class="navbar-link" v-on:mouseover="setHover('desserts')" v-on:mouseleave="setUnhover('desserts')">

                  <img id="nav-desserts" v-if="!dessertsHover" src="../assets/desserts_bw.svg">
                  <img id="nav-desserts" v-if="dessertsHover" src="../assets/desserts.svg">
                  Desserts
                </a>
                <div class="navbar-dropdown is-boxed">
                  <a class="navbar-item">
                    Chocolate
                  </a>
                  <a class="navbar-item">
                    Cakes
                  </a>
                  <a class="navbar-item" @click="navigateTo({name: 'Category', params: {categoryId: 'Cookies'}})">
                    Cookies
                  </a>
                  <a class="navbar-item">
                    Ice Creams
                  </a>
                </div>
              </a>

              <a class="navbar-item has-dropdown is-hoverable">

                <a class="navbar-link" v-on:mouseover="setHover('beverages')" v-on:mouseleave="setUnhover('beverages')">
                  <img id="nav-beverages" v-if="!beveragesHover" src="../assets/beverages_bw.svg">
                  <img id="nav-beverages" v-if="beveragesHover" src="../assets/beverages.svg">
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
              <a class="navbar-item" @click="navigateTo({name: 'Search'})">
                Search
                <img id="search-button" src="../assets/search.svg">
              </a>
              <a class="navbar-item" v-if="$store.state.isUserLoggedIn" @click="navigateTo({name: 'AddRecipe'})">
                Create New Recipe
              </a>
              <a v-if="$store.state.isUserLoggedIn" @click="navigateTo({name: 'Favorites'})" class="navbar-item">
                Favourites
              </a>
              <a class="navbar-item" id="nav-sign-in">
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
    name: 'navbar',
    data () {
      return {
        navIsActive: false,
        cutleryHover: false,
        dessertsHover: false,
        beveragesHover: false
      }
    },
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
      },
      toggleMenu: function () {
        this.navIsActive = !this.navIsActive
      },
      setHover: function (name) {
        if (name === 'cutlery') {
          this.cutleryHover = true
        } else if (name === 'desserts') {
          this.dessertsHover = true
        } else {
          this.beveragesHover = true
        }
      },
      setUnhover: function (name) {
        if (name === 'cutlery') {
          this.cutleryHover = false
        } else if (name === 'desserts') {
          this.dessertsHover = false
        } else {
          this.beveragesHover = false
        }
      }
    }
  }
</script>
