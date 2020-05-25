const app = new Vue({
  el: '#app',
  data() {
    return {
      title: 'hello world',
      type: 2
    }
  },
  render() {
    with(this){return _c('div',{attrs:{"id":"app"}},[_c('h1',[_v(_s(title))]),_v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(type),expression:"type"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); type=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"1"}},[_v("opt 1")]),_v(" "),_c('option',{attrs:{"value":"2"}},[_v("opt 2")]),_v(" "),_c('option',{attrs:{"value":"3"}},[_v("opt 3")])])])}
  },
})
console.log(app.$options.render)

