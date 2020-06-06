<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/admin">admin</router-link>
      <span> welcome {{ username }}</span>
      <span> welcome {{ cartname }}</span>
    </div>
    <keep-alive include="Home">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import { mapState } from 'vuex'

//通过使用 createNamespacedHelpers 创建基于某个命名空间辅助函数。
//它返回一个对象，对象里有新的绑定在给定命名空间值上的组件绑定辅助函数
// import { createNamespacedHelpers } from "vuex";
// const { mapState } = createNamespacedHelpers('命名空间名')
// export default {
//   computed: {
//     ...mapState(["permissionList"])
//   }
// ｝

export default {
  name: 'App',
  computed: {
    ...mapState('user', ['username']),
    ...mapState('cart', ['cartname'])

  },
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<style scoped>
/* 深度样式 不支持scss */
#app >>> p {
  border: 3px solid green;
}
</style>

<style lang="scss" scoped>
/* 深度样式 穿透 */
#app::v-deep p {
  font: 24px/2 arial;
}
</style>

