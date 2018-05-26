import Api from '@/services/Api'

export default {
  getAllFavorites (user) {
    return Api().get(`bookmarks/${user}`)
  },
  getFavorite (user, recipe) {
    return Api().get(`bookmarks/${user}/${recipe}`)
  },
  deleteFavorite (user, recipe) {
    return Api().delete(`bookmarks/${user}/${recipe}`)
  },
  postFavorite (user, recipe) {
    return Api().post(`bookmarks/${user}/${recipe}`)
  }
}
