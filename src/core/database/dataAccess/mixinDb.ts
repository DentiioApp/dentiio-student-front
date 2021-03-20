import Vue from 'vue'
import { mapGetters } from 'vuex'
import storeActions from '../../../store/actions/storeActions'
import store from '@/store/index'
import Bibliotheque from '../../models/metiers/Bibliotheque'
import Livre from '../../models/metiers/Livre'
import apiCall from '@/services/apiCall'
import common from '@/core/global/common'
import Profile from '../../models/metiers/Profile'
import Projects from '@/core/models/metiers/Projects'
import Tasks from '@/core/models/metiers/Tasks'

export default Vue.extend({
  computed: {
    bibliotheques: () =>
      Bibliotheque.query()
        .withAll()
        .all(),
    livres: () =>
      Livre.query()
        .withAll()
        .all(),
    projects: () =>
      Projects.query()
        .withAll()
        .all(),
    profile: () =>
      Profile.query()
        .withAll()
        .all(),
    tasks: () =>
      Tasks.query()
        .withAll()
        .all(),

    ...mapGetters({
      //Global
      getIsLoading: 'isLoading',
      getConnexionByForm: 'connexionByForm',
      getActiveAuth: 'getActiveAuth',
      getDataInitialized: 'getDataInitialized',

      getLanguage: 'getLanguage',

      //Auth
      getIsAuthenticated: 'isAuthenticated',
      getAuthStatus: 'getAuthStatus',
      getToken: 'getToken',
      getRefreshToken: 'getRefreshToken'
    }),
    isDev: () => process.env.NODE_ENV == 'development'
  },
  methods: {
    setIsLoading(newValue: boolean) {
      store.commit(storeActions.global.LOADING, newValue)
    },
    setConnexionByForm(newValue: boolean) {
      store.commit(storeActions.global.LOADING, newValue)
    },
    setDataInitialized(newValue: boolean) {
      store.commit(storeActions.global.DATA_INITIALIZED, newValue)
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
    },

    //Gestion API GET
    apiGetLivre() {
      Livre.query().deleteAll()
      apiCall.livre
        .get()
        .then(resp => {
          Livre.insert({ data: resp.data })
          common.log.devLog('---CHARGEMENT DES LIVRES')
        })
        .catch(err => {
          common.toast.errorAPI(err)
        })
      // .then(() => {
      //   this.setIsLoading(false)
      // })
    },
    apiGetProfile() {
      Profile.query().deleteAll()
      apiCall.profile
        .get()
        .then(resp => {
          //TODO STORE DATA NOT LIST OF OBJECT PROFILE
          //Profile.insert({ data: resp.data.person })
          Profile.add(
            new Profile({
              id: 0,
              idTeamwork: resp.data.person.idTeamwork,
              firstname: resp.data.person.firstname,
              lastname: resp.data.person.lastname,
              email: resp.data.person.email,
              mentionName: resp.data.person.mentionName,
              isClientUser: resp.data.person.isClientUser,
              inOwnerCompany: resp.data.person.inOwnerCompany,
              userType: resp.data.person.userType,
              companyId: resp.data.person.companyId,
              companyName: resp.data.person.companyName,
              administrator: resp.data.person.administrator
            })
          )
          common.log.devLog('---CHARGEMENT DU PROFIL')
        })
        .catch(err => {
          common.toast.errorAPI(err)
        })
    },
    apiGetProject() {
      Projects.query().deleteAll()
      apiCall.projects
        .get()
        .then(resp => {
          Projects.insert({ data: resp.data.projects })
          common.log.devLog('---CHARGEMENT DES PROJECTS')
        })
        .catch(err => {
          common.toast.errorAPI(err)
        })
    },
    apiGetTasksByProject(id: number) {
      apiCall.tasksByProject
        .get(id)
        .then(resp => {
          Tasks.insert({ data: resp.data.tasks })
          common.log.devLog('---CHARGEMENT DES TASKS')
        })
        .catch(err => {
          common.toast.errorAPI(err)
        })
    }
  }
})
