<template>
  <div class="home">
    <div class="home__products">
      <h1 class="home__title">Products List</h1>
      <DataView :value="products" layout="grid" :paginator="true" :rows="12">
        <template #grid="slotProps">
          <div class="col-12 md:col-4">
            <div class="card">
              <div class="card__top">
                <div>
                  <i class="pi pi-tag card__categoryIcon"></i>
                  <span class="card__category">{{ slotProps.data.category }}</span>
                </div>
                <span :class="'status-' + slotProps.data.inventoryStatus.toLowerCase()">{{
                    slotProps.data.inventoryStatus
                }}</span>
              </div>
              <div>
                <h3 class="card__name" @click="$router.push(`/product/${slotProps.data.id}`)">{{ slotProps.data.name
                }}</h3>
                <div class="card__description">{{ slotProps.data.description }}</div>
                <Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false"></Rating>
              </div>
              <div class="card__bottom">
                <span class="card__price">${{ slotProps.data.price }}</span>
                <Button icon="pi pi-shopping-cart" :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
              </div>
            </div>
          </div>
        </template>
      </DataView>
    </div>
  </div>
</template>
<script>

import DataView from 'primevue/dataview'
import Rating from 'primevue/rating'
import data from '../data/prod.json'

export default {
  name: "home-page",
  components: { DataView, Rating },
  data() {
    return {
      products: null,
    }
  },

  mounted() {
    this.products = data.data
  }
}
</script>
<style lang="scss" scoped>
.home {
  max-width: 1440px;
  margin: 0 auto;
  padding: 30px 25px;

  &__products {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    font-size: 35px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 10px;
  }
}

.card {
  margin: 15px 20px;
  padding: 25px;
  border-radius: 4px;
  background-color: #1e1e1e;
  border: 1px solid var(--surface-border);

  &__top,
  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__top {
    margin-bottom: 10px;
  }

  &__name {
    font-size: 1.5rem;
    font-weight: 700;
    cursor: pointer;
  }

  &__description {
    margin: 0 0 1rem 0;
  }

  &__categoryIcon {
    vertical-align: middle;
    margin-right: .5rem;
  }

  &__category {
    font-weight: 600;
    vertical-align: middle;
  }

  &__price {
    font-size: 1.5rem;
    font-weight: 600;
  }
}

::v-deep(.p-dataview-content) {
  background: none !important;
}

::v-deep(.p-paginator-bottom) {
  background: none !important;
  border: none !important;
}
</style>