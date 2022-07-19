import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/login.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/register.vue')
  },
  {
    path: '/student',
    name: 'student',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/student.vue'),
    children:[
      {
        path:'/student/book',
        name:'book',
        component:()=>import(/* webpackChunkName: "about" */ '../views/book')
      },
      {
        path:'/student/getbook',
        name:'getbook',
        component:()=>import(/* webpackChunkName: "about" */ '../views/getbook')
      }
    ]

  },
  {
    path: '/purchaser',
    name: 'purchaser',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/purchaser'),
    children:[
      {
        path:'/purchaser/jslist',
        name:'jslist',
        component:()=>import(/* webpackChunkName: "about" */ '../views/jslist')
      }
    ]

  },
  {
    path: '/fxmessager',
    name: 'fxmessager',

    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/fxmessager'),

    children:[
      {
        path:'/fxmessager/qslist',
        name:'qslist',
        component:()=>import(/* webpackChunkName: "about" */ '../views/qslist')
      },
      {
        path:'/fxmessager/dglist',
        name:'dglist',
        component:()=>import(/* webpackChunkName: "about" */ '../views/dglist')
      },
      {
        path:'/fxmessager/receivebook',
        name:'receivebook',
        component:()=>import(/* webpackChunkName: "about" */ '../views/receivebook')
      },
      {
        path:'/fxmessager/managebook',
        name:'managebook',
        component:()=>import('../views/managebook')
      }
    ]
  },
  {
    path: '/navmenu',
    com: 'navmenu',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NavMenu/navmenu')
  },
  {
    path: '/stnavmenu',
    com: 'stnavmenu',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NavMenu/stnavmenu')
  },
  {
    path: '/purmenu',
    com: 'purmenu',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NavMenu/purmenu')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
