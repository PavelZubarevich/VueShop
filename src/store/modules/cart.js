export const cart = {
  state: () => ({
    items: []
  }),
  mutations: {
    addItemToCart(state, item) {
      state.items = [...state.items, item]
    }
  },
}