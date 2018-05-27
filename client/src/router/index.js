import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import AddRecipe from '@/components/AddRecipe'
import Recipe from '@/components/Recipe'
import Home from '@/components/Home'
import Search from '@/components/Search'
import Favorites from '@/components/Favorites'
import Landing from '@/components/Landing'
import Category from '@/components/Category'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        title: 'Register Page'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: 'Login Page'
      }
    },
    {
      path: '/recipe/add',
      name: 'AddRecipe',
      component: AddRecipe,
      meta: {
        title: 'Add Recipe'
      }
    },
    {
      path: '/recipe/:recipeId',
      name: 'Recipe',
      component: Recipe,
      meta: {
        title: 'Recipe'
      }
    },
    {
      path: '/index',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Home Page'
      }
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      meta: {
          title: 'Search Page'
        }
    },
    {
      path: '/category/:categoryId',
      name: 'Category',
      component: Category,
      meta: {
          title: 'Category Page'
      }
    },
    {
      path: '/',
      name: 'Landing',
      component: Landing,
      meta: {
          title: 'Landing Page'
      }
    },
    {
      path: '/favorites',
      name: 'Favorites',
      component: Favorites,
      meta: {
          title: 'Favorites page'
      }
    },
    // { path: '/',
    //   redirect: '/index'
    // }
  ]
})
