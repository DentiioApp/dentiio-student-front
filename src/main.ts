import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'
import vueNotification from './plugins/vue-notification'
import vueTimePicker from './plugins/vue-timePicker'
import dayspanVuetify from './plugins/dayspan-vuetify'
import '@/assets/sass/style.scss'
import translation from './plugins/translation'
// @ts-ignore
import VueMoment from 'vue-moment'
import moment from 'moment'
import Skeleton from 'vue-loading-skeleton'

Vue.use(Skeleton)
Vue.prototype.moment = moment
require('moment/locale/fr')
Vue.use(VueMoment, {
  moment
})
Vue.use(translation)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  // @ts-ignore
  vueNotification,
  vueTimePicker,
  dayspanVuetify,
  translation,
  render: h => h(App)
}).$mount('#app')
