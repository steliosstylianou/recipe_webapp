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
        title: 'Register Page',
        metaTags: [
          {
            name: 'description',
            content: 'The Register page'
          },
          {
            property: 'og:description',
            content: 'The Register page'
          }
        ]
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: 'Login Page',
        metaTags: [
          {
            name: 'description',
            content: 'The Login page'
          },
          {
            property: 'og:description',
            content: 'The Login page'
          }
        ]
      }
    },
    {
      path: '/recipe/add',
      name: 'AddRecipe',
      component: AddRecipe,
      meta: {
        title: 'Add Recipe',
        metaTags: [
          {
            name: 'description',
            content: 'The Add Recipe page'
          },
          {
            property: 'og:description',
            content: 'The Add Recipe page'
          }
        ]
      }
    },
    {
      path: '/recipe/:recipeId',
      name: 'Recipe',
      component: Recipe,
      meta: {
        title: 'Recipe',
        metaTags: [
          {
            name: 'description',
            content: 'The Recipe page'
          },
          {
            property: 'og:description',
            content: 'The Recipe page'
          }
        ]
      }
    },
    {
      path: '/index',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Home Page',
        metaTags: [
          {
            name: 'description',
            content: 'The Home page'
          },
          {
            property: 'og:description',
            content: 'The Home page'
          }
        ]
      }
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      meta: [
        {
          title: 'Search Page',
          metaTags: [
            {
              name: 'description',
              content: 'The Search page'
            },
            {
              property: 'og:description',
              content: 'The Search page'
            }
          ]
        }
      ]
    },
    {
      path: '/category/:categoryId',
      name: 'Category',
      component: Category,
      meta: [
        {
          title: 'Category Page',
          metaTags: [
            {
              name: 'description',
              content: 'The Category page'
            },
            {
              property: 'og:description',
              content: 'The Category page'
            }
          ]
        }
      ]
    },
    {
      path: '/landing',
      name: 'Landing',
      component: Landing,
      meta: [
        {
          title: 'Landing Page',
          metaTags: [
            {
              name: 'description',
              content: 'The Landing page'
            },
            {
              property: 'og:description',
              content: 'The Landing page'
            }
          ]
        }
      ]
    },
    {
      path: '/favorites',
      name: 'Favorites',
      component: Favorites,
      meta: [
        {
          title: 'Favorites page',
          metaTags: [
            {
              name: 'description',
              content: 'The Favorites page'
            },
            {
              property: 'og:description',
              content: 'The Favorites page'
            }
          ]
        }
      ]
    },
    { path: '/',
      redirect: '/index'
    }
  ]
})

// // This callback runs before every route change, including on page load.
// Router.beforeEach((to, from, next) => {
//   // This goes through the matched routes from last to first, finding the closest route with a title.
//   // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
//   const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)
//
//   // Find the nearest route element with meta tags.
//   const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)
//   // const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)
//
//   // If a route with a title was found, set the document (page) title to that value.
//   if (nearestWithTitle) document.title = nearestWithTitle.meta.title
//
//   // Remove any stale meta tags from the document using the key attribute we set below.
//   Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el))
//
//   // Skip rendering meta tags if there are none.
//   if (!nearestWithMeta) return next()
//
//   // Turn the meta tag definitions into actual elements in the head.
//   nearestWithMeta.meta.metaTags.map(tagDef => {
//     const tag = document.createElement('meta')
//
//     Object.keys(tagDef).forEach(key => {
//       tag.setAttribute(key, tagDef[key])
//     })
//
//     // We use this to track which meta tags we create, so we don't interfere with other ones.
//     tag.setAttribute('data-vue-router-controlled', '')
//
//     return tag
//   })
//   // Add the meta tags to the document head.
//     .forEach(tag => document.head.appendChild(tag))
//
//   next()
// })
