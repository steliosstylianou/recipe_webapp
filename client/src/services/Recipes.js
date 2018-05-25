import Api from '@/services/Api'

export default {
  getAllRecipes () {
    return Api().get('recipes')
  },

  getRecipe (id) {
    return Api().get(`recipes/${id}`)
  },

  createRecipe (recipe) {
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }

    return Api().post('recipes', recipe, config)
  }
}
