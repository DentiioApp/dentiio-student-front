import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

import en from '../core/translations/en'
import fr from '../core/translations/fr'

export default new Vuetify({
  lang: {
    locales: { en, fr },
    current: 'fr'
  },
  theme: {
    // Pour rajouter des variantes de couleurs pour les themes ou des nouveaux thèmes,
    // vous devez créer des nouvelles propriétés dans l'interface située ".\node_modules\vuetify\types\services\theme.d.ts"
    themes: {
      light: {
        primary: '#DE7036',
        secondary: '#707173',
        accent: '#8c9eff',
        success: '#83b33f',
        error: '#b71c1c',
        edit: '#ff851a',
        background: '#FFFFFF',
        themeCHR: '#FFFFFF',
        sectionMenu: '#b0d141',
        navbar: '#a5c302',
        sidebar: '#a5c302'
      },
      dark: {
        primary: '#d36022',
        secondary: '#707173',
        accent: '#8c9eff',
        error: '#b71c1c',
        success: '#83b33f',
        edit: '#ff851a',
        themeCHR: '#13181b',
        background: '#13181b',
        sectionMenu: '#b0d141',
        navbar: '#272727',
        sidebar: '#1e1e1e'
      }
    }
  },
  options: {
    themeCache: {
      get: (key: string) => localStorage.getItem(key),
      set: (key: string, value: string) => localStorage.setItem(key, value)
    }
  }
})
