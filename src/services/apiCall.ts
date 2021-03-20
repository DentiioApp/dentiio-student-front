import axios from 'axios'
import Configuration from '@/Utils/ConfigProvider'
import store from '../store/index'
import common from '@/core/global/common'
import storeActions from '../store/actions/storeActions'
import Livre from '@/core/models/metiers/Livre'

const AUTH = storeActions.auth

const instance = axios.create({
  baseURL: Configuration.value('backendUrl'),
  withCredentials: true
})

//https://github.com/axios/axios#interceptors
instance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error && error.response) {
      //Verirication présence error
      if (error.response.status === 401) {
        common.log.devLog(
          '--- Interception code 401 .. Refresh Token Utilisateur'
        )
        store.dispatch(AUTH.REFRESH)
      } else if (error.response.status === 302) {
        window.location.href = error.response.request.responseURL
      }
    }
    return Promise.reject(error)
  }
)

export default {
  authentification: {
    authentify(code: any) {
      return instance({
        url: 'api/Authentification',
        data: code,
        method: 'POST'
      })
    },
    refresh() {
      return instance({
        url: 'api/Authentification/refresh',
        method: 'POST',
        data: {
          token: store.getters.getToken,
          refreshToken: store.getters.getRefreshToken
        }
      })
    }
  },
  account: {
    register(data: any) {
      return instance({
        url: 'api/v1/Account/register',
        data: data,
        method: 'POST'
      })
    },
    forgotPassword(data: any) {
      return instance({
        url: 'api/v1/Account/forgotpassword',
        data: data,
        method: 'POST'
      })
    },
    resetPassword(data: any) {
      return instance({
        url: 'api/v1/Account/resetpassword',
        data: data,
        method: 'POST'
      })
    }
  },
  profile: {
    get() {
      return instance({
        url: 'api/Profile/teamwork',
        headers: { Authorization: 'Bearer ' + store.getters.getToken }
      })
    }
  },
  projects: {
    get() {
      return instance({
        url: 'api/Project',
        headers: { Authorization: 'Bearer ' + store.getters.getToken }
      })
    }
  },
  tasksByProject: {
    get(id: number) {
      return instance({
        url: 'api/Tasks/project/' + id,
        headers: { Authorization: 'Bearer ' + store.getters.getToken }
      })
    }
  },
  livre: {
    get() {
      return instance({
        url: 'api/v1/Livre',
        headers: { Authorization: 'Bearer ' + store.getters.getToken }
      })
    },
    post(data: Livre) {
      return instance({
        url: 'api/v1/Livre',
        data: data,
        method: 'POST',
        headers: { Authorization: 'Bearer ' + store.getters.getToken }
      })
    },
    put(data: Livre) {
      return instance({
        url: 'api/v1/Livre',
        data: data,
        method: 'PUT',
        headers: { Authorization: 'Bearer ' + store.getters.getToken }
      })
    },
    delete(id: number) {
      return instance({
        url: 'api/v1/Livre/' + id,
        method: 'DELETE',
        headers: { Authorization: 'Bearer ' + store.getters.getToken }
      })
    }
  }
}
