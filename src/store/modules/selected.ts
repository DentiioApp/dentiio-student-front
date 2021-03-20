import storeActions from '../actions/storeActions'

interface SelectedState {
  language: LanguageStorable
}
interface LanguageStorable {
  id: number
  alpha3: string
  languageCode: string
  iso: string
  isoFull: string
  nicename: string
  phonecode: number
}

const getDefaultState: () => SelectedState = () => {
  return {
    language: {} as LanguageStorable
  }
}
const SELECTED = storeActions.selected
const state = getDefaultState()

const getters = {
  getLanguage: (state: SelectedState) => state.language
}

const mutations = {
  [SELECTED.CHANGE_LANGUAGE]: (
    state: SelectedState,
    value: LanguageStorable
  ) => {
    state.language = value
  },
  [SELECTED.RESET_STATE]: (state: SelectedState) => {
    Object.assign(state, getDefaultState())
  }
}

export default {
  state,
  getters,
  mutations
}
