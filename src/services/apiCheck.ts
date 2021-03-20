import store from '../store/index'
import storeActions from '../store/actions/storeActions'
import { enumToken } from '@/core/global/enums/enumToken'

const AUTH = storeActions.auth
const USER = storeActions.user

export default {
  verify: {
    all() {
      this.token()
      this.profile()
    },
    token() {
      //Verification tu token dans le store
      if (!store.getters.getToken && store.getters.getToken == '') {
        store.dispatch(AUTH.REFRESH)
      }
      //Verification du token dans le cache
      if (!localStorage.getItem(enumToken.USER_TOKEN)) {
        store.dispatch(AUTH.REFRESH)
      }
      //Verification du refresh token dans le cache
      if (!localStorage.getItem(enumToken.USER_REFRESH_TOKEN)) {
        store.dispatch(AUTH.LOGOUT)
      }
    },
    profile() {
      //Verification du token dans le store
      if (!Object.keys(store.getters.getProfile).length) {
        store.dispatch(USER.REQUEST)
      }
    }
  }
}
