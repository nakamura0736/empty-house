import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home'
import Concept from '@/components/concept'
import Contact from '@/components/contact'
import Privacy from '@/components/privacy'
import Questions from '@/components/questions'
import Access from '@/components/access'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/concept',
      name: 'Concept',
      component: Concept
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/privacy',
      name: 'Privacy',
      component: Privacy
    },
    {
      path: '/questions',
      name: 'Questions',
      component: Questions
    },
    {
      path: '/access',
      name: 'Access',
      component: Access
    }
  ]
})
