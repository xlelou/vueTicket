import Vue from 'vue'
import Router from 'vue-router'
import navHeader from '@/components/navHeader'

Vue.use(Router)


export default new Router({
  routes: [
    {
	    path: '/',
	    name: 'navHeader',
	    component: navHeader
    }
  ]
})
