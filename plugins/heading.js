const MyPlugin = {
  install(Vue, options) {

    // headding 
    Vue.component('heading', {
      functional: true,
      render: function (h, context) {
        console.log(context)
        let {level, title, icon, myclick} = context.props
        let children = []

        if (icon) {
          children.push(h(
            'svg', {
              'class': 'icon'
            },
            [
              h(
                'use', {
                  'attrs': {
                    'xlink:href': '#icon-' + icon
                  }
                }
              )
            ]
          ))
        }

        children = children.concat(context.children)
        const vnode = h(
          'h' + level, // 标签名称
          {
            attrs: {
            title},
            on: {
              click: myclick
            }
          },
          // 由子节点构成的数组
          children
        )
        return vnode
      },

      props: {
        level: {
          type: Number,
          default: 2
        },
        title: {
          type: String,
          default: ''
        },
        icon: {
          type: String
        },
        myclick: {
          type: Function
        }
      }
    })

    // focus

    Vue.directive('focus', {
      inserted(el) {
        el.focus()
      }
    })

    
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(MyPlugin)
}
