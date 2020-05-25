function getKey () {
  return new Promise(res => {
    setTimeout(() => {
      res(['的方式道访','dfsdf'])
    }, 2000);
  })
}

Vue.prototype.$bus = new Vue()

Vue.component('course-add',{
  props: ['value'],
  template: `
    <div>
      <input :value="value" @input="onInput" @keydown.enter="addcourse" ref="input" />
      <button @click="addcourse">增加课程</button>
    </div>
  `,
  methods: {
    addcourse() {
      this.$emit('add-course')
    },
    onInput (e) {
      this.$emit('input', e.target.value)
    }
  },
  mounted() {
    this.$refs.input.focus()
  },
})

Vue.component('message',{
  props: ['show'],
  template: `
    <div v-if="show" class="mdiv">
      <div class="mbody">
        <slot name="title" title="来自孩子标题"></slot>
        <slot></slot>
        <a @click="$emit('update:show', false)" >X</a>
      </div>
    </div>
  `,
  mounted() {
    this.$bus.$on('message-close',() => {
      this.$emit('update:show', false)
    })
  },
})


const app = new Vue({
  el: '#app',
  data() {
    return {
      title: 'hello world',
      type: 2,
      keys: [],
      course: '',
      message: 'this is a food',
      show: true,
      showWarn: true
    }
  },
  methods: {
    closeMsg() {
      this.$bus.$emit('message-close')
    },
    addCourse() {
      this.keys.push(this.course)
      this.course = ''
    }
  },
  async created() {
    this.keys = await getKey()
  },
})

setTimeout(() => {
  app.title = 'hello vue'
}, 1000)
