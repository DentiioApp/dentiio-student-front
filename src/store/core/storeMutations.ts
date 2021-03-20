import { enumStates } from '../../core/global/enums/enumStates'
import { enumToken } from '../../core/global/enums/enumToken'
export default {
  auth: {
    success(state: any, resp: any) {
      state.authStatus = enumStates.SUCCESS
      state.token = resp.data.token
      state.refreshToken = resp.data.refreshToken
      localStorage.setItem(enumToken.USER_TOKEN, resp.data.token)
      localStorage.setItem(enumToken.USER_REFRESH_TOKEN, resp.data.refreshToken)
    },
    disconnect(state: any) {
      state.token = ''
      state.refreshToken = ''
      state.isAuthenticated = false
      state.profile = {}
      localStorage.removeItem(enumToken.USER_TOKEN)
      localStorage.removeItem(enumToken.USER_REFRESH_TOKEN)
      state.authStatus = enumStates.INIT
    },
    error(state: any) {
      state.authStatus = enumStates.ERROR
    },
    refresh(state: any) {
      state.authStatus = enumStates.LOADING
    },
    request(state: any) {
      state.authStatus = enumStates.LOADING
    }
  },
  user: {
    request(state: any) {
      state.userStatus = enumStates.LOADING
    },
    success(state: any) {
      state.userStatus = enumStates.SUCCESS
    },
    error(state: any) {
      state.userStatus = enumStates.INIT
    },
    logout(state: any) {
      state.userStatus = enumStates.LOADING
    }
  },
  account: {
    register: {
      success(state: any) {
        state.registerStatus = enumStates.SUCCESS
      },
      error(state: any) {
        state.registerStatus = enumStates.ERROR
      }
    }
  }
}
