import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import AddRecipe from '@/components/AddRecipe'
import Recipe from '@/components/Recipe'
import Home from '@/components/Home'
import Search from '@/components/Search'
import Landing from '@/components/Landing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/recipe/add',
      name: 'AddRecipe',
      component: AddRecipe
    },
    {
      path: '/recipe/:recipeId',
      name: 'Recipe',
      component: Recipe
    },
    {
      path: '/index',
      name: 'Home',
      component: Home
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/landing',
      name: 'Landing',
      component: Landing
    },
    { path: '/',
      redirect: '/index'
    }
  ]
})
