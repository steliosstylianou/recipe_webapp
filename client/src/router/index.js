import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import AddRecipe from '@/components/AddRecipe'
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
      path: '/recipe/add',
      name: 'Add Recipe',
      component: AddRecipe
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
