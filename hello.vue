<template>
  <div>
    {{ key }}
    <div v-for="item in items" :key="item.id">
      {{ item }}
    </div>
  </div>
</template>

<script>
console.log('vue')
export default {
  data () {
    return {
      items: [],
      key: 'msg this is a cool',
      my: this.my,
      fn: () => {
        console.log('fn:', this.key)
      }
    }
  },
  methods: {
    name () {

    }
  },

  mounted () {
    this.fn()
  },
}
</script>

<style lang="scss" scoped>
</style>