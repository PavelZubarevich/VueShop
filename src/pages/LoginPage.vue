<template>
  <div class="login">
    <h1 class="login__title">Log In</h1>
    <form class="login__form form">
      <div class="form__field">
        <label for="username" class="form__fieldLabel">Username</label>
        <InputText id="username" type="text" v-model="userName" />
      </div>
      <div class="form__field">
        <label for="password" class="form__fieldLabel">Password</label>
        <Password id="password" v-model="password" class="input" />
      </div>
      <Button label="Login" @click="login" class="form__submit" />
      <Button label="Create account" class="p-button-text form__createAccount"
        @click="this.$router.push('registration')" />
    </form>
  </div>
</template>
<script>

import simpleHash from '@/utils/simpleHash'

export default {

  data() {
    return {
      userName: '',
      password: '',
    }
  },
  methods: {
    login() {
      const users = JSON.parse(localStorage.getItem('users'))
      if (users) {
        const user = users.filter(elem => elem.userName === this.userName)
        const hashedPassword = simpleHash(this.password)
        if (user[0].password === hashedPassword) {
          const userData = { userName: user[0].userName, role: user[0].role }
          this.$store.commit('authorize', userData)
          this.$router.push('/')
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 30px 25px;

  &__title {
    color: rgba(255, 255, 255, 0.87);
    text-transform: uppercase;
  }

  &__form {
    margin-top: 30px;
    max-width: 450px;
    width: 100%;
  }
}

.form {

  ::v-deep(.p-password input) {
    width: 100%
  }

  &__field {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }

  &__fieldLabel {
    color: rgba(255, 255, 255, 0.87);
    margin-bottom: 5px;
    width: max-content;
  }

  &__errorText {
    color: var(--pink-800);
  }

  &__submit {
    margin-top: 20px;
    width: 100%;
    cursor: pointer;
  }

  &__createAccount {
    padding: 8px 0 !important;
    background: 0 !important;
    cursor: pointer;
  }
}
</style>