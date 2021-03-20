// Custom Plugin de réécriture d'acces au traduction de vuetify.
const Translation = {
  install(Vue: any) {
    Vue.prototype.$getTrad = function(key: string) {
      return this.$vuetify.lang.t('$vuetify.' + key)
    }
  }
}

export default Translation
