<template>
    <main class="main">
        <form @submit.prevent class="form" action="">
            <span
                class="form__toggle"
                @click="toggleForm"
            >
                {{ toggleName }}
            </span>
        <h2>{{ title }}</h2>
        <input
            class="input"
            type="text"
            placeholder="Логин"
            v-model="loginValue"
        >
        <span class="validate" v-if="isEmptyValueLogin|isEmptyValue">Поле не должно быть пустым</span>
        <input
            class="input"
            type="text"
            placeholder="Пароль"
            v-model="passwordValue"
        >
        <span class="validate" v-if="isEmptyValuePassword|isEmptyValue">Поле не должно быть пустым</span>
        <div class="checkbox" v-if="!isAuthToogle">
            <input class="checkbox__input" type="checkbox" id="checkbox"
            v-model="checkValue">
            <label for="checkbox">
            Я согласен получать обновления на почту
            </label>
        </div>
        <span class="validate" v-if="isErrorUsers">Логин или пароль неверен</span>
        <button @click.stop="clickForm">{{ buttonName }}</button>
        </form>
    </main>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'AuthPage',
  components: {
  },
  props: {
  },
  setup () {
    const router = useRouter()
    const title = ref('вход')
    const toggleName = ref('Зарегестрироваться')
    const buttonName = ref('Войти')
    const isErrorUsers = ref(false)
    const isEmptyValueLogin = ref(false)
    const isEmptyValuePassword = ref(false)
    const isEmptyValue = ref(false)
    const isAuthToogle = ref(true)
    const loginValue = ref('')
    const passwordValue = ref('')
    const checkValue = ref(false)

    const toggleForm = () => {
      if (isAuthToogle.value) {
        title.value = 'Регистрация'
        toggleName.value = 'Авторизоваться'
        buttonName.value = 'Зарегистрироваться'
      } else {
        title.value = 'вход'
        toggleName.value = 'Зарегистрироваться'
        buttonName.value = 'Войти'
      }
      isAuthToogle.value = !isAuthToogle.value
    }
    const clickForm = () => {
      console.log('checkValue', checkValue)
      if (isAuthToogle.value) {
        authorization()
      } else {
        registration()
      }
    }
    const authorization = () => {
      const users = JSON.parse(localStorage.getItem('users'))
      const user = users.find(item => {
        return item.login === loginValue.value
      })
      if (user?.login === loginValue.value && user?.password === passwordValue.value) {
        localStorage.isAuth = JSON.stringify(true)
        router.push('/')
      } else {
        isErrorUsers.value = true
      }
    }
    const registration = () => {
      const users = JSON.parse(localStorage.getItem('users'))
      if (loginValue.value.trim().length === 0 && passwordValue.value.trim().length === 0) {
        isEmptyValue.value = true
      } else if (loginValue.value.trim().length === 0) {
        isEmptyValueLogin.value = true
      } else if (passwordValue.value.trim().length === 0) {
        isEmptyValuePassword.value = true
      } else {
        users.push({
          login: loginValue.value,
          password: passwordValue.value
        })
        localStorage.users = JSON.stringify(users)
      }
    }
    return {
      title,
      toggleName,
      buttonName,
      isErrorUsers,
      isEmptyValueLogin,
      isEmptyValuePassword,
      isEmptyValue,
      loginValue,
      passwordValue,
      isAuthToogle,
      checkValue,
      toggleForm,
      clickForm
    }
  }
}
</script>

<style lang="scss" scoped>
.main{
    height: 100vh;
    background-image: url(../assets/images/MaskGroup.png);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
}
.form {
//   width: 460px;
//   height: 340px;
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
  position: relative;
  width: 500px;
  padding: 9px 20px 34px 20px;
&__toggle {
    color: rgb(213, 140, 81);
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    line-height: 13px;
    letter-spacing: 0%;
    text-align: right;
    text-decoration-line: underline;
}
}
h2 {
    // width: 249px;
    // height: 38px;
    color: rgb(22, 21, 22);
    font-family: Montserrat;
    font-size: 31px;
    font-weight: 700;
    line-height: 38px;
    letter-spacing: 0%;
    text-align: left;
    text-transform: uppercase;
    margin: 15px auto 36px auto;
    display: flex;
    justify-content: center;
}
.input {
    box-sizing: border-box;
    border: 1px solid rgb(213, 140, 81);
    border-radius: 61px;
    height: 39px;
    margin-bottom: 15px;
    color: black;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0%;
    text-align: left;
    padding-left: 18px;
}
.checkbox {
    display: flex;
    align-items: center;
    color: rgb(48, 20, 17);
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 300;
    line-height: 13px;
    letter-spacing: 0%;
    text-align: left;
    margin-bottom: 8px;
}
button {
    margin: 12px auto auto auto;
    width: 200px;
    height: 42px;
    color: black;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0%;
}
.validate {
    color: rgb(255, 11, 11);
    font-family: Montserrat;
    font-size: 10px;
    font-weight: 500;
    line-height: 10px;
    letter-spacing: 0%;
    text-align: center;
}
</style>
