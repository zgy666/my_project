import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo from '@/components/Demo'
import Demo2 from '@/components/Demo2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta:{
        title:"首页"
      }
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo,
      meta:{
        title:"demo页"
      },
      /*children:[{
        path:"",
        component:""
      }]*/
    },
    {
      path: '/demo2/:id,:cou',
      name: 'Demo2',
      component: Demo2,
      meta:{
        title:"demo2页"
      }
    }

  ]
})
