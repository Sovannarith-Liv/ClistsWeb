import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'

// KH
import KhHome from '../views/kh/Home.vue'
import KhServices from '../views/kh/Services.vue'

// JP
import JpHome from '../views/jp/Home.vue'
import JpServices from '../views/jp/Services.vue'


const _next = (to, from, next) => {
  const lang = localStorage.getItem('lang')
  if (lang === 'kh') {
    if (to.path === '/services')
      next('/kh/services')
    else {
      next('/kh');
    }
    return;
  } else if(lang === 'jp'){
    if (to.path === '/services')
      next('/jp/services')
    else {
      next('/jp');
    }
    return;
  }
  next()
};

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: _next
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
    beforeEnter: _next
  },
  {
    path: '/kh',
    name: 'HomeKhmer',
    component: KhHome
  },
  {
    path: '/kh/services',
    name: 'ServicesKhmer',
    component: KhServices
  },
  {
    path: '/jp',
    name: 'HomeJapan',
    component: JpHome
  },
  {
    path: '/jp/services',
    name: 'ServicesJapan',
    component: JpServices
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router