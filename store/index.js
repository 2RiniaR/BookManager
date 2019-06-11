import createPersistedState from 'vuex-persistedstate'
export const strict = false

export const state = () => ({
  authUser: null
})

export const mutations = {
  setUser(state, payload) {
    console.log('mutation: setUser')
    state.authUser = payload
  }
}

export const actions = {

  nuxtClientInit() {
    console.log('(run) [store/actions] nuxtClientInit')
    createPersistedState()(this)
  },

  setUser({ commit }, payload) {
    try {
      console.log('setUser')
      commit('setUser', payload)
    } catch (e) {
      console.log(`[SetUser] Error: ${e}`)
    }
  }

}

export const getters = {
  isAuthenticated(state) {
    return !!state.authUser
  },
  authUser(state) {
    return state.authUser
  }
}
