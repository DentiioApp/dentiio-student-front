import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/store'
import storeActions from '../store/actions/storeActions'
import listRoutes from './listRoutes'
import apiCheck from '../services/apiCheck'
const AUTH = storeActions.auth
const GLOBAL = storeActions.global
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
// Alternative au beforeenter
if (store.getters.getActiveAuth) {
  router.beforeEach((to, from, next) => {
    if (to.name == listRoutes.LOGIN) {
      store.dispatch(AUTH.REDIRECT_CONNEXION)
    }
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (store.getters.isAuthenticated) {
        if (store.getters.connexionByForm) {
          //Set de CONNEXION_BY_FORM a false une fois la connexion éffectué
          store.commit(GLOBAL.CONNEXION_BY_FORM, false)
        } else {
          //Mécanique réservé au hot reload de l'application, pas à la connexion classique
          apiCheck.verify.all()
        }
        next()
        return
      } else {
        next({ name: listRoutes.LOGIN })
      }
    } else {
      next()
    }
  })
}

export default router
