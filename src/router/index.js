import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import MyHome from '@/pages/my-home'
import Friends from '@/pages/friends'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/my-home'
    },
    {
      path: '/my-home',
      name: 'my-home',
      component: MyHome
    },
    {
      path: '/friends',
      name: 'friends',
      component: Friends
    }
  ]
})
