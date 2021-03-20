//https://sweetalert2.github.io/
import Swal from 'sweetalert2'
import Vue from 'vue'
import _ from 'lodash'
import store from '../../store/index'
import vuetify from '@/plugins/vuetify'

const vm = new Vue({ vuetify })

const $getTrad = (key: string) => (vm as any).$getTrad(key)

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  onOpen: toast => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

export default {
  loading: {
    go() {
      store.commit('LOADING')
    },
    stop() {
      store.commit('LOADING')
    }
  },

  alert: {
    error(message: string) {
      Swal.fire({
        title: $getTrad('messages.alert.error'),
        text: message,
        icon: 'error',
        confirmButtonText: $getTrad('messages.ok')
      })
    },
    success(message: string) {
      Swal.fire({
        title: $getTrad('messages.alert.success'),
        text: message,
        icon: 'success',
        confirmButtonText: $getTrad('messages.ok')
      })
    },
    warning(message: string) {
      Swal.fire({
        title: $getTrad('messages.alert.warning'),
        text: message,
        icon: 'warning',
        confirmButtonText: $getTrad('messages.ok')
      })
    }
  },
  notify: {
    error(titre: string, message: string) {
      Vue.notify({
        group: 'foo',
        type: 'error',
        title: titre,
        text: message
      })
    },
    errorAPI(err: any) {
      if (err.response.data) {
        _.forEach(err.response.data.errors, function(value: any) {
          _.forEach(value, function(valueItem: any) {
            Vue.notify({
              group: 'foo',
              type: 'error',
              title:
                '[' + err.response.data.status + '] ' + err.response.data.title,
              text: valueItem
            })
          })
        })
      }
    },
    success(titre: string, message: string) {
      Vue.notify({
        group: 'foo',
        type: 'success',
        title: titre,
        text: message
      })
    },
    warning(titre: string, message: string) {
      Vue.notify({
        group: 'foo',
        type: 'warning',
        title: titre,
        text: message
      })
    }
  },
  log: {
    devLog(message: string) {
      if (process.env.NODE_ENV !== 'production') {
        console.log(message)
      }
    }
  },
  confirm: {
    delete() {
      return Swal.fire({
        title: $getTrad('messages.confirm.titreSuppression'),
        text: $getTrad('messages.confirm.texteSuppression'),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: $getTrad('messages.confirm.confirmSuppression'),
        cancelButtonText: $getTrad('messages.confirm.cancelSuppression')
      })
      // Exemple d'utilisation :
      // common.confirm.delete().then(result => {
      //   if (result.value) {
      //     common.toast.success();
      //   }
      // });
    },
    custom(titre: string, message: string, ok: string, cancel: string) {
      return Swal.fire({
        title: titre,
        text: message,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: ok,
        cancelButtonText: cancel
      })
    }
  },
  toast: {
    success() {
      Toast.fire({
        icon: 'success',
        title: $getTrad('messages.toast.success')
      })
    },
    error() {
      Toast.fire({
        icon: 'error',
        title: $getTrad('messages.toast.error')
      })
    },
    info(message: string, isCleTrad?: boolean) {
      Toast.fire({
        icon: 'info',
        title: isCleTrad ? $getTrad(message) : message
      })
    },
    errorCustom(message: string, isCleTrad?: boolean) {
      Toast.fire({
        icon: 'error',
        title: isCleTrad ? $getTrad(message) : message
      })
    },
    errorAPI(err: any) {
      if (err.response) {
        _.forEach(err.response.data.errors, function(value: any) {
          _.forEach(value, function(valueItem: any) {
            Toast.fire({
              icon: 'error',
              title: `[${$getTrad('messages.codeErreur')} : ${
                err.response.data.status
              }] ${valueItem}`
            })
          })
        })
      } else if (!err.response) {
        Toast.fire({
          icon: 'error',
          title: $getTrad('messages.erreurServeur')
        })
      } else {
        Toast.fire({
          icon: 'error',
          title: `[${$getTrad('messages.codeErreur')} : ${
            err.response.status
          }] ${err.response.statusText}`
        })
      }
    }
  }
}
