<template>
  <div>
    <hr />
    <h1>{{ post.title }}</h1>
    <hr />
  </div>
</template>

<script>
import { getPost } from '@/api/index'
export default {
  name: 'Detail',
  data () {
    return {
      detail: {},
      post: {},
      error: null
    }
  },
  async beforeRouteEnter (to, from, next) {
    let post = await getPost()
    console.log('post', post)
    next(vm => vm.setData(null, post))
  },
  // 路由改变前，组件就已经渲染完了
  // 逻辑稍稍不同
  methods: {
    setData (err, post) {
      if (err) this.error = err.toString()
      this.post = post
    }
  }
  // async created () {
  //   this.detail = await getPost()
  // },
}
</script>

<style lang="scss" scoped>
</style>