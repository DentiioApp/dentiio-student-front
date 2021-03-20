import storeActions from '../actions/storeActions'
import common from '../../core/global/common'
import apiCall from '../../services/apiCall'
import { ActionContext } from 'vuex'
import State from '@vuex-orm/core/lib/model/contracts/State'

const AUTH = storeActions.auth
const USER = storeActions.user
const ACCOUNT = storeActions.account

type Action = ActionContext<State, State>

export default {
  auth: {
    request: ({ commit, dispatch }: Action, code: any) =>
      new Promise((resolve, reject) => {
        commit(AUTH.REQUEST)
        apiCall.authentification
          .authentify(code)
          .then(resp => {
            commit(AUTH.SUCCESS, resp)
            resolve(resp)
            dispatch(USER.REQUEST)
          })
          .catch(err => {
            //Si erreur 4** -> Appel du refreshtoken
            commit(AUTH.ERROR, err)
            dispatch(AUTH.LOGOUT)
            reject(err)
            common.toast.errorCustom('messages.erreurConnexion', true)
          })
      }),
    logout: ({ commit, dispatch }: Action) =>
      new Promise(resolve => {
        commit(AUTH.LOGOUT)
        dispatch(USER.LOGOUT)
        resolve()
      }),
    redirect: ({ commit }: Action) =>
      new Promise(resolve => {
        commit(AUTH.LOGOUT)
        resolve()
      }),
    refresh: ({ commit, dispatch }: Action) =>
      new Promise((resolve, reject) => {
        commit(AUTH.REFRESH)
        apiCall.authentification
          .refresh()
          .then(resp => {
            commit(AUTH.SUCCESS, resp)
            resolve(resp)
          })
          .catch(err => {
            commit(AUTH.ERROR, err)
            dispatch(AUTH.LOGOUT)
            reject(err)
            common.toast.errorCustom('messages.erreurConnexion', true)
          })
      })
  },
  account: {
    resetPassword: (action: /*{commit, dispatch}*/ Action, data: any) =>
      new Promise((resolve, reject) => {
        apiCall.account
          .resetPassword(data)
          .then(resp => {
            common.toast.success()
            resolve(resp)
          })
          .catch(err => {
            //Si erreur 4** -> Appel du refreshtoken
            reject(err)
            common.toast.errorCustom('messages.erreurConnexion', true)
          })
      }),
    forgotPassword: (action: /*{commit, dispatch}*/ Action, data: any) =>
      new Promise((resolve, reject) => {
        apiCall.account
          .forgotPassword(data)
          .then(resp => {
            common.toast.success()
            resolve(resp)
          })
          .catch(err => {
            //Si erreur 4** -> Appel du refreshtoken
            reject(err)
            common.toast.errorCustom('messages.erreurConnexion', true)
          })
      }),
    register: ({ commit }: Action, data: any) =>
      new Promise((resolve, reject) => {
        apiCall.account
          .register(data)
          .then(resp => {
            commit(ACCOUNT.REGISTER_SUCCESS)
            common.toast.success()
            resolve(resp)
          })
          .catch(err => {
            //Si erreur 4** -> Appel du refreshtoken
            commit(ACCOUNT.REGISTER_ERROR)
            reject(err)
            common.toast.errorCustom('messages.erreurConnexion', true)
          })
      })
  },
  user: {
    request: ({ commit }: Action) =>
      new Promise(() => {
        commit(USER.REQUEST)
      }),
    logout: ({ commit }: Action) =>
      new Promise(() => {
        commit(USER.LOGOUT)
      })
  }
}
