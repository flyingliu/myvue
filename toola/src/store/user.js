export default {
  namespaced: true,
  state: {
    isLogin: false,
    username: 'flying'
  },
  mutations: {
    login(state) {
      state.isLogin = true
    },
    logout(state) {
      state.isLogin = false
    }
  },
  actions: {
  }
}
