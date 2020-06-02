<template>
  <div>
    <div v-for="item in items" :key="item.id">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      key: value
    }
  },
  methods: {
    name () {

    }
  },
  computed: {
    name () {
      return this.data
    }
  }
}
</script>

<style lang="scss" scoped>
</style>