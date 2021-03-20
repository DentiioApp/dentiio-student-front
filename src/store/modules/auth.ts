import storeActions from '../actions/storeActions'
import storeMutations from '../core/storeMutations'
import { enumStates } from '../../core/global/enums/enumStates'
import storePromises from '../core/storePromises'
import { enumToken } from '../../core/global/enums/enumToken'
import { ActionContext } from 'vuex'
import State from '@vuex-orm/core/lib/model/contracts/State'

const AUTH = storeActions.auth
const ACCOUNT = storeActions.account

interface AuthState {
  token: string
  refreshToken: string
  authStatus: enumStates
  registerStatus: enumStates
}

const state: AuthState = {
  token: localStorage.getItem(enumToken.USER_TOKEN) || '',
  refreshToken: localStorage.getItem(enumToken.USER_REFRESH_TOKEN) || '',
  authStatus: enumStates.INIT,
  registerStatus: enumStates.INIT
}

const getters = {
  isAuthenticated: (state: AuthState) => !!state.token,
  getAuthStatus: (state: AuthState) => state.authStatus,
  getToken: (state: AuthState) => state.token,
  getRefreshToken: (state: AuthState) => state.refreshToken,
  getRegisterStatus: (state: AuthState) => state.registerStatus
}

type Action = {} & ActionContext<State, State>

const actions = {
  [AUTH.REQUEST]: ({ commit, dispatch }: Action, user: any) => {
    return storePromises.auth.request({ commit, dispatch } as Action, user)
  },
  [AUTH.LOGOUT]: ({ commit, dispatch }: Action) => {
    return storePromises.auth.logout({ commit, dispatch } as Action)
  },
  [AUTH.REDIRECT_CONNEXION]: ({ commit }: Action) => {
    return storePromises.auth.redirect({ commit } as Action)
  },
  [AUTH.REFRESH]: ({ commit, dispatch }: Action) => {
    return storePromises.auth.refresh({ commit, dispatch } as Action)
  },
  [ACCOUNT.RESET_PASSWORD]: ({ commit, dispatch }: Action, data: any) => {
    return storePromises.account.resetPassword(
      { commit, dispatch } as Action,
      data
    )
  },
  [ACCOUNT.FORGOT_PASSWORD]: ({ commit, dispatch }: Action, data: any) => {
    return storePromises.account.forgotPassword(
      { commit, dispatch } as Action,
      data
    )
  },
  [ACCOUNT.REGISTER]: ({ commit, dispatch }: Action, data: any) => {
    return storePromises.account.register({ commit, dispatch } as Action, data)
  }
}

const mutations = {
  [AUTH.REQUEST]: (state: AuthState) => {
    storeMutations.auth.request(state)
  },
  [AUTH.SUCCESS]: (state: AuthState, resp: any) => {
    storeMutations.auth.success(state, resp)
  },
  [AUTH.REFRESH]: (state: AuthState) => {
    storeMutations.auth.refresh(state)
  },
  [AUTH.ERROR]: (state: AuthState) => {
    storeMutations.auth.error(state)
  },
  [AUTH.LOGOUT]: (state: AuthState) => {
    storeMutations.auth.disconnect(state)
  },
  [ACCOUNT.REGISTER_SUCCESS]: (state: AuthState) => {
    storeMutations.account.register.success(state)
  },
  [ACCOUNT.REGISTER_ERROR]: (state: AuthState) => {
    storeMutations.account.register.error(state)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
