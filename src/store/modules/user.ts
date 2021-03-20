import { enumStates } from '@/core/global/enums/enumStates'
import State from '@vuex-orm/core/lib/model/contracts/State'
import { ActionContext } from 'vuex'
import storeActions from '../actions/storeActions'
import storeMutations from '../core/storeMutations'
import storePromises from '../core/storePromises'

interface UserState {
  userStatus: enumStates
  profile: any
}

const USER = storeActions.user

const state: UserState = {
  userStatus: enumStates.LOADING,
  profile: {}
}

const getters = {
  getProfile: (state: UserState) => state.profile,
  getUserStatus: (state: UserState) => state.userStatus
}

type Action = {} & ActionContext<State, State>

const actions = {
  [USER.REQUEST]: ({ commit }: Action) => {
    storePromises.user.request({ commit } as Action)
  },
  [USER.LOGOUT]: ({ commit }: Action) => {
    storePromises.user.logout({ commit } as Action)
  }
}

const mutations = {
  [USER.REQUEST]: (state: UserState) => {
    storeMutations.user.request(state)
  },
  [USER.SUCCESS]: (state: UserState) => {
    storeMutations.user.success(state)
  },
  [USER.ERROR]: (state: UserState) => {
    storeMutations.user.error(state)
  },
  [USER.LOGOUT]: (state: UserState) => {
    storeMutations.user.logout(state)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
