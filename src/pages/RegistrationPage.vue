<template>
  <div class="registration">
    <h1 class="registration__title">Registration</h1>
    <form class="registration__form form">
      <div class="form__field">
        <label for="username" class="form__fieldLabel">Username</label>
        <InputText id="username" type="text" v-model="userName" :class="{ 'p-invalid': userNameError.length }" />
        <p v-if="userNameError.length" class="form__errorText">{{ userNameError }}</p>
      </div>
      <div class="form__field">
        <label for="password" class="form__fieldLabel">Password</label>
        <Password id="password" v-model="password" class="input" :class="{ 'p-invalid': passwordError.length }" />
        <p v-if="passwordError.length" class="form__errorText">{{ passwordError }}</p>
      </div>
      <div class="form__field">
        <label for="confirmPassword" class="form__fieldLabel">Confirm Password</label>
        <Password id="confirmPassword" v-model="confirmPassword" class="input"
          :class="{ 'p-invalid': confirmPasswordError.length }" />
        <p v-if="confirmPasswordError.length" class="form__errorText">{{ confirmPasswordError }}</p>
      </div>
      <div class="form__field">
        <label for="admin" class="form__fieldLabel">Admin</label>
        <InputSwitch v-model="isAdmin" id="admin" />
      </div>
      <p v-if="errorMessage.length" class="form__errorText">{{ errorMessage }}</p>
      <Button label="Create account" @click="registration" class="form__submit" />
    </form>
  </div>
</template>
<script>

import InputSwitch from 'primevue/inputswitch';
import simpleHash from '../utils/simpleHash'

export default {

  components: { InputSwitch },

  data() {
    return {
      userName: '',
      userNameError: '',
      password: '',
      passwordError: '',
      confirmPassword: '',
      confirmPasswordError: '',
      isAdmin: '',
      errorMessage: '',
    }
  },

  methods: {
    registration() {

      let isFormInvalid = false

      if (!this.userName) {
        this.userNameError = 'UserName required'
        isFormInvalid = true
      } else {
        this.userNameError = ''
      }

      if (!this.password) {
        this.passwordError = 'Passwords required'
        isFormInvalid = true
      } else {
        this.passwordError = ''
      }

      if (!this.confirmPassword) {
        this.confirmPasswordError = 'Confirmation passwords required'
        isFormInvalid = true
      } else {
        this.confirmPasswordError = ''
      }

      if (this.password !== this.confirmPassword) {
        this.errorMessage = 'Passwords do not match'
        isFormInvalid = true
      }

      if (!isFormInvalid) {

        const newUser = {
          userName: this.userName,
          password: simpleHash(this.password),
          role: this.isAdmin ? 'admin' : 'user'
        }

        const users = JSON.parse(localStorage.getItem('users'))

        if (users) {
          localStorage.setItem('users', JSON.stringify([...users, newUser]))
        } else {
          localStorage.setItem('users', JSON.stringify([newUser]))
        }
        this.$router.push('/')
      }
    }
  },
}
</script>
<style lang="scss" scoped>
.registration {

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

  ::v-deep(.p-hidden-accessible) {
    visibility: hidden;
  }

  &__field {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;

    & input {
      width: 100%;
    }
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
}
</style>