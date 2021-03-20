import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import auth from './modules/auth'
import global from './modules/global'
import selected from './modules/selected'
import projects from './modules/projects'
import createPersistedState from 'vuex-persistedstate'
import VuexORM from '@vuex-orm/core'
import database from '../core/database'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  plugins: [
    VuexORM.install(database),
    createPersistedState({
      paths: ['entities', 'selected']
    })
  ],
  modules: {
    user,
    auth,
    global,
    selected,
    projects
  },
  strict: debug
})
