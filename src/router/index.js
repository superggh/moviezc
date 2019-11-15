import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'
import Project from '@/views/project'
import My from '@/views/My'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/a',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/project',
      name: 'Project',
      component: Project
    },
    {
      path: '/my',
      name: 'My',
      component: My
    }
  ]
})
