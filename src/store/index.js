import { createStore } from 'vuex'
import { user, cart } from './modules'

export const store = createStore({
  modules: {
    user,
    cart
  }
})
