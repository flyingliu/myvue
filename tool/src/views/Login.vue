<template>
  <div>
    <dl>
      <dd @click="login" v-if="!isLogin">登陆</dd>
      <dd @click="logout" v-else>登出</dd>
    </dl>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Login',
  methods: {
    ...mapMutations('user', ['login', 'logout']),
    login () {
      this.$store.commit('user/login')
      this.$router.push(this.$route.query.redirect)
      // this.$router.addRoutes([

      // ])
    },
    logout () {
      this.$store.commit('user/logout')
      this.$router.push('/')
    }
  },
  computed: {
    ...mapState('user', ['isLogin', 'username'])
  },
}
</script>

<style lang="scss" scoped>
</style>