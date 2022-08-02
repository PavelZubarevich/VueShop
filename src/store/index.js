import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      user: null
    }
  },
  mutations: {
    authorize(state, newUser) {
      state.user = newUser
    },

    logout(state) {
      state.user = null
    }
  }
})

