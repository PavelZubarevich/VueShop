<template>
  <div class="footer">
    <div class="footer__leftContent">
      <div @click="this.$router.push('/')" class="footer__logo">
        <span class="pi pi-microsoft footer__logoImage" />
        <span class="footer__logoLabel">VueShop</span>
      </div>
      <p class="footer__text">Copyright © 2022 VueShop</p>
    </div>
    <div class="footer__rightContent">
      <div class="footer__contactUs">
        <span class="pi pi-twitter" />
        <span class="pi pi-telegram" />
        <span class="pi pi-send" />
        <span class="pi pi-instagram" />
        <span class="pi pi-facebook" />
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.footer {

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: var(--surface-a);
  border-top: 1px solid var(--surface-d);

  &__leftContent {
    display: flex;
    align-items: center;
  }

  &__text {
    color: rgba(255, 255, 255, 0.87);
    margin-left: 30px;
  }

  &__logo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__logoImage {
    font-size: 27px !important;
    margin-bottom: 5px;
    color: rgba(255, 255, 255, 0.87);
  }

  &__logoLabel {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.87);
  }

  &__contactUs {
    span {
      color: #fff;
      margin-left: 15px;
      font-size: 19px;
      cursor: pointer;
    }
  }
}
</style>