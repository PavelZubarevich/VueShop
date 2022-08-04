export const user = {
  state: () => ({
    user: null
  }),
  mutations: {
    authorize(state, newUser) {
      state.user = newUser
    },
    logout(state) {
      state.user = null
    }
  },
}