<template>
  <div class="cart">
    <div v-for="item in items" :key="item.id">
      <div class="cart__card">
        <div class="cart__cardLeft">
          <h3 class="cart__cardTitle">{{ item.name }}</h3>
          <p class="cart__cardDesc">{{ item.description }}</p>
        </div>
        <div class="cart__cardRight">
          <p class="cart__cardPrice">{{ item.price }}$</p>
          <p class="cart__cardStatus">{{ item.inventoryStatus }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: "CartPage",

  computed: {
    ...mapState({
      items: state => state.cart.items
    })
  }
}
</script>

<style lang="scss">
.cart {

  max-width: 1440px;
  margin: 0 auto;
  padding: 35px 20px;

  &__card {
    border: 1px solid var(--primary-color);
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
  }

  &__cardTitle {
    color: var(--text-color);
    font-size: 20px;
    margin-bottom: 5px;
  }

  &__cardDesc {
    color: var(--text-color);
  }

  &__cardPrice {
    color: var(--primary-color);
    font-size: 25px;
  }

  &__cardStatus {
    color: var(--text-color);
  }
}
</style>