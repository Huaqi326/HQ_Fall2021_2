import { createRouter, createWebHistory } from 'vue-router'
import Intro from '../views/Intro.vue'
import Signin from '../views/Signin.vue'
import Signup from '../views/Signup.vue'
import Main from '../views/Main.vue'
import Exerciselog from '../views/Exerciselog.vue'
import Profile from '../views/Profile.vue'
import Profileinfor from '../views/Profileinfor.vue'
import UserManage from '../views/UserManage.vue'

const routes = [
  {
    path: '/',
    name: 'Intro',
    component: Intro
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/main',
    name: 'Main',
    component: Main
  },
  {
    path: '/log',
    name: 'Exercise',
    component: Exerciselog
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/profileinfor',
    name: 'Profileinfor',
    component: Profileinfor
  },
  {
    path: '/usermanage',
    name: 'UserManage',
    component: UserManage
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
    if(to.meta.requiresLogin && !Session.user){
        next('/signin');
    }else{
        next();
    }
  } )

export default router
