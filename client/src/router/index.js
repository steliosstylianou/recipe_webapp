import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import AddRecipe from '@/components/AddRecipe'
import NewAddRecipe from '@/components/NewAddRecipe'
import Recipe from '@/components/Recipe'
import Home from '@/components/Home'

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
      path: '/addrecipe',
      name: 'AddRecipe',
      component: AddRecipe
    },
    {
      path: '/newaddrecipe',
      name: 'NewAddRecipe',
      component: NewAddRecipe
    },
    {
      path: '/recipe',
      name: 'Recipe',
      component: Recipe
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
