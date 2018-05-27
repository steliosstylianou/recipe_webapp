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
                <a class="navbar-link" v-on:mouseover="setHover('cutlery')" v-on:mouseleave="setUnhover('cutlery')"
                   @click="navigateTo({name: 'Category', params: {categoryId: 'Food'}})">
                  <img id="nav-cutlery" v-if="!cutleryHover" src="../assets/cutlery_bw.svg">
                  <img id="nav-cutlery" v-if="cutleryHover" src="../assets/cutlery.svg">
                  Food
                </a>
                <div class="navbar-dropdown is-boxed">
                  <a class="navbar-item" @click="navigateTo({name: 'Category', params: {categoryId: 'Appetizers'}})">
                    Appetizers
                  </a>
                  <a class="navbar-item" @click="navigateTo({name: 'Category', params: {categoryId: 'Meat'}})">
                    Meat
                  </a>
                  <a class="navbar-item" @click="navigateTo({name: 'Category', params: {categoryId: 'Fish'}})">
                    Fish
                  </a>
                  <a class="navbar-item" @click="navigateTo({name: 'Category', params: {categoryId: 'Pasta'}})">
                    Pasta
                  </a>
                </div>
              </a>

              <a class="navbar-item has-dropdown is-hoverable">

                <a class="navbar-link" v-on:mouseover="setHover('desserts')" v-on:mouseleave="setUnhover('desserts')"
                   @click="navigateTo({name: 'Category', params: {categoryId: 'Desserts'}})">

                  <img id="nav-desserts" v-if="!dessertsHover" src="../assets/desserts_bw.svg">
                  <img id="nav-desserts" v-if="dessertsHover" src="../assets/desserts.svg">
                  Desserts
                </a>
                <div class="navbar-dropdown is-boxed">
                  <a class="navbar-item" @click="navigateTo({name: 'Category', params: {categoryId: 'Chocolate'}})">
                    Chocolate
                  </a>
                  <a class="navbar-item" @click="navigateTo({name: 'Category', params: {categoryId: 'Cakes'}})">
                    Cakes
                  </a>
                  <a class="navbar-item" @click="navigateTo({name: 'Category', params: {categoryId: 'Cookies'}})">
                    Cookies
                  </a>
                  <a class="navbar-item" @click="navigateTo({name: 'Category', params: {categoryId: 'Waffles'}})">
                    Waffles
                  </a>
                </div>
              </a>

              <a class="navbar-item has-dropdown is-hoverable">

                <a class="navbar-link" v-on:mouseover="setHover('beverages')" v-on:mouseleave="setUnhover('beverages')"
                   @click="navigateTo({name: 'Category', params: {categoryId: 'Beverages'}})">
                  <img id="nav-beverages" v-if="!beveragesHover" src="../assets/beverages_bw.svg">
                  <img id="nav-beverages" v-if="beveragesHover" src="../assets/beverages.svg">
                  Beverages
                </a>
                <div class="navbar-dropdown is-boxed">
                  <a class="navbar-item" @click="navigateTo({name: 'Category', params: {categoryId: 'Alcoholic'}})">
                    Alcoholic
                  </a>
                  <a class="navbar-item" @click="navigateTo({name: 'Category', params: {categoryId: 'Non-Alcoholic'}})">
                    Non-Alcoholic
                  </a>
                  <a class="navbar-item" @click="navigateTo({name: 'Category', params: {categoryId: 'Milkshakes'}})">
                    Milkshakes
                  </a>
                  <a class="navbar-item" @click="navigateTo({name: 'Category', params: {categoryId: 'Smoothies'}})">
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
              <a v-if="$store.state.isUserLoggedIn" @click="go ()" class="navbar-item">
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
      },
      async go () {
        this.$router.push({name: 'Favorites'})
        window.location.reload()
      }
    }
  }
</script>
