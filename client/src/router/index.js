import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import AddRecipe from '@/components/AddRecipe'
import Recipe from '@/components/Recipe'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
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
      path: '/recipe',
      name: 'Recipe',
      component: Recipe
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
