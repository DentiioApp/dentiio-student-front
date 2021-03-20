import Vue from 'vue'
import { mapGetters } from 'vuex'

import storeActions from '../../../store/actions/storeActions'
import common from '@/core/global/common'
import listRoutes from '@/router/listRoutes'
import store from '@/store'
import router from '@/router'
export default Vue.extend({
  methods: {
    register(
      userName: string,
      email: string,
      password: string,
      confirmPassword: string,
      phoneNumber: string
    ) {
      common.loading.go()
      store
        .dispatch(storeActions.account.REGISTER, {
          userName: userName,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
          phoneNumber: phoneNumber
        })
        .then(() => {
          common.loading.stop()
          this.login(email, password)
        })
        .catch((err: any) => {
          common.log.devLog(err)
          common.loading.stop()
        })
    },
    login(email: string, password: string) {
      common.loading.go()
      store
        .dispatch(storeActions.auth.REQUEST, {
          login: email,
          password: password
        })
        .then(() => {
          common.loading.stop()
          router.push({ name: listRoutes.HOME }).catch((error: any) => {
            common.log.devLog(error)
          })
        })
        .catch((err: any) => {
          common.log.devLog(err)
          common.loading.stop()
        })
    },
    loginWithCode(code: any) {
      common.loading.go()
      store
        .dispatch(storeActions.auth.REQUEST, {
          codeTeamwork: code
        })
        .then(() => {
          common.loading.stop()
          router.push({ name: listRoutes.HOME }).catch((error: any) => {
            common.log.devLog(error)
          })
        })
        .catch((err: any) => {
          common.log.devLog(err)
          common.loading.stop()
          window.location.href =
            'https://www.teamwork.com/launchpad/login?redirect_uri=http://localhost:8081/authentification&client_id=9c64033cbdd25c0d39d6ca97b6d493b1c4ac3cce'
        })
    },
    logout() {
      store.dispatch(storeActions.auth.LOGOUT).then(() => {
        router.push({ name: listRoutes.LOGIN })
      })
    },

    resetPassword(password: string, confirmPassword: string, code: string) {
      common.loading.go()
      store
        .dispatch(storeActions.account.RESET_PASSWORD, {
          email: this.getProfile.email,
          password: password,
          confirmPassword: confirmPassword,
          code: code
        })
        .then(() => {
          common.loading.stop()
          router.push({ name: listRoutes.PROFIL }).catch((error: any) => {
            common.log.devLog(error)
          })
        })
        .catch((err: any) => {
          common.log.devLog(err)
          common.loading.stop()
        })
    },
    forgotPassword() {
      common.loading.go()
      store
        .dispatch(storeActions.account.FORGOT_PASSWORD, {
          email: this.getProfile.email
        })
        .then(() => {
          common.loading.stop()
          router.push({ name: listRoutes.PROFIL }).catch((error: any) => {
            common.log.devLog(error)
          })
        })
        .catch((err: any) => {
          common.log.devLog(err)
          common.loading.stop()
        })
    },
    clearCache() {
      localStorage.clear()
      store.dispatch('entities/deleteAll')
      this.upDateCacheSize()
      store.commit(storeActions.selected.RESET_STATE)
      store.commit(storeActions.global.RESET_STATE)
    },
    upDateCacheSize(): string {
      let _lsTotal = 0,
        _xLen,
        _x
      for (_x in localStorage) {
        if (!Object.prototype.hasOwnProperty.call(localStorage, _x)) {
          continue
        }
        _xLen = (localStorage[_x].length + _x.length) * 2
        _lsTotal += _xLen
      }
      return 'Total = ' + (_lsTotal / 1024).toFixed(2) + ' KB'
    }
  },
  computed: {
    ...mapGetters({
      //Global
      getActiveAuth: 'getActiveAuth',

      //Auth
      getProfile: 'getProfile',
      getIsAuthenticated: 'isAuthenticated',
      getAuthStatus: 'getAuthStatus',
      getToken: 'getToken',
      getRefreshToken: 'getRefreshToken',
      getRegisterStatus: 'getRegisterStatus',

      getLanguage: 'getLanguage'
    })
  }
})
