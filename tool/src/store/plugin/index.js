export default (store) => {
  if (localStorage) {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      store.commit('user/login', user.username)
    }
  }

  // 如果用户状态发生变化，自动存入 localStoreage
  store.subscribe((mutation, state) => {
    if (mutation.type === 'user/login') {
      const user = JSON.stringify(state.user)
      localStorage.setItem('user', user)
    } else if (mutation.type === 'user/logout') {
      localStorage.removeItem('user')
    }
  })
}
