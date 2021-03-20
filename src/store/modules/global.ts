import storeActions from '../actions/storeActions'

interface GlobalState {
  isLoading: boolean
  connexionByForm: boolean
  activeAuth: boolean
  dataInitialized: boolean
}

const getDefaultState: () => GlobalState = () => {
  return {
    isLoading: false,
    connexionByForm: false,
    activeAuth: false,
    dataInitialized: false
  }
}
const GLOBAL = storeActions.global
const state = getDefaultState()

const getters = {
  isLoading: (state: GlobalState) => state.isLoading,
  connexionByForm: (state: GlobalState) => state.connexionByForm,
  getActiveAuth: (state: GlobalState) => state.activeAuth,
  getDataInitialized: (state: GlobalState) => state.dataInitialized
}

const mutations = {
  [GLOBAL.LOADING]: (state: GlobalState) => {
    state.isLoading = !state.isLoading
  },
  [GLOBAL.CONNEXION_BY_FORM]: (state: GlobalState, value: boolean) => {
    state.connexionByForm = value
  },
  [GLOBAL.DATA_INITIALIZED]: (state: GlobalState, value: boolean) => {
    state.dataInitialized = value
  },
  [GLOBAL.RESET_STATE]: (state: GlobalState) => {
    Object.assign(state, getDefaultState())
  }
}

export default {
  state,
  getters,
  mutations
}
