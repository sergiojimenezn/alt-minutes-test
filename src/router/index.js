import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function loadView (folder, view) {
  return () =>
    import(/* webpackChunkName: "[request]" */ `@/views/${folder}/${view}.vue`)
}

const routes = [
  {
    path: '/group/invite',
    name: 'invite',
    component: loadView('main', 'Group')
  },
  {
    path: '*',
    redirect: '/group/invite'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
