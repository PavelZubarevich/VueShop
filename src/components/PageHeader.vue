<template>
  <Menubar :model="items" class="header" :class="isPageScrolled ? 'header__shrinked' : ''">
    <template #start>
      <div @click="this.$router.push('/')" class="header__logo">
        <span class="pi pi-microsoft header__logoImage" />
        <span class="header__logoLabel">VueShop</span>
      </div>
    </template>
    <template #end>
      <i class="pi pi-shopping-bag header__cartImage mr-4" v-badge.warning="cartItems.length || null"
        @click="$router.push('/cart')" />
      <Avatar icon=" pi pi-user" size="large" shape="circle" @click="toggle" />
      <OverlayPanel ref="op">
        <div class="menu" v-if="!user">
          <Button label="Log In" @click="navigateTo('login')" class="p-button-text" />
          <Button label="Register" @click="navigateTo('registration')" class="p-button-text" />
        </div>
        <div class="menu" v-if="user">
          <Button label="Profile" @click="{}" class="p-button-text" />
          <Button label="Log Out" @click="$store.commit('logout')" class="p-button-text" />
        </div>
      </OverlayPanel>
    </template>
  </Menubar>
</template>

<script>
import Menubar from 'primevue/menubar';
import Avatar from 'primevue/avatar';
import OverlayPanel from 'primevue/overlaypanel';
import { mapState } from 'vuex'

export default {
  components: { Menubar, Avatar, OverlayPanel },

  data() {
    return {
      items: [
        {
          label: 'About',
          to: 'about',
          class: 'focus-disable',
          icon: 'disabled'
        }
      ]
    }
  },

  methods: {
    toggle(event) {
      this.$refs.op.toggle(event);
    },

    navigateTo(path) {
      this.toggle()
      this.$router.push(`/${path}`)
    }
  },

  computed: {
    ...mapState({
      user: state => state.user.user,
      cartItems: state => state.cart.items
    }),
  }
}
</script>

<style lang="scss">
.header {
  position: sticky;
  top: 0;
  border-radius: 0 !important;
  border: 0 !important;
  border-bottom: 1px solid var(--surface-d) !important;
  height: 104px;
  z-index: 999;
  transition: 0.4s;

  &__shrinked {
    height: 72px;

    & .header__logoImage {
      font-size: 28px !important;
    }

    & .header__logoLabel {
      font-size: 12px;

    }
  }

  &__logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 30px 10px 10px;
    cursor: pointer;
  }

  &__logoImage {
    font-size: 40px !important;
    margin-bottom: 5px;
    transition: 0.4s;
  }

  &__logoLabel {
    font-size: 16px;
    transition: 0.4s;
  }

  &__cartImage {
    font-size: 24px !important;
    cursor: pointer;
  }
}

.router-link-active {
  border-bottom: 2px solid var(--yellow-200);
}

.router-link-active span {
  color: var(--yellow-200) !important;
}

.disabled {
  display: none;
}

.focus-disable a:focus {
  box-shadow: none !important;
}

.menu {
  display: flex;
  flex-direction: column;
}
</style>