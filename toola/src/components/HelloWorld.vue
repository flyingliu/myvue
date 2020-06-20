<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>this is a p</p>
    <div>
      <dl>
        <dd v-for="item in names" :key="item.name">
          {{ item.name }}
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import { getNames, getPost } from '@/api/index'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      names: '',
      posts: []
    }
  },
  async created () {
    this.names = await getNames()
    this.posts = await getPost()
    console.log('this.posts', this.posts)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
dd {
  font: 24px/1.5 arial;
}
</style>
