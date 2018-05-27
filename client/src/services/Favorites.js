import Api from '@/services/Api'

export default {
  getAllFavorites () {
    return Api().get(`bookmarks/`)
  },
  getFavorite (recipe) {
    return Api().get(`bookmarks/${recipe}`)
  },
  deleteFavorite (recipe) {
    return Api().delete(`bookmarks/${recipe}`)
  },
  postFavorite (recipe) {
    return Api().post(`bookmarks/${recipe}`)
  }
}
