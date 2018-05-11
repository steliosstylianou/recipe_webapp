import Api from '@/services/Api'

export default {
  getAllRecipes () {
    return Api().get('recipes')
  }
}
