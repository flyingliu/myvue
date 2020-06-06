import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component:  () => import('../views/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue'),
    // beforeEnter: (to, from, next) => {
    //   if(window.isLogin) {
    //     next()
    //   } else {
    //     next('/login?redirect='+to.fullPath)
    //   }
    // },
    meta: {
      auth: true
    }
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/Detail.vue')
    // beforeEnter: async (to, from, next) => {
    //   const detail = await getPost()
    //   console.log('detail',detail.title)
    //   next(vm => {
    //     console.log('detail',vm)
    //     vm.detail = detail
    //     vm.$set(vm.data,'detail',detail)
    //   })
    // }
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to)
  if(to.meta.auth) {
    if(store.state.user.isLogin) {
      next()
    } else {
      next('/login?redirect='+to.fullPath)
    }
  } else {
    next()
  }
})

export default router
