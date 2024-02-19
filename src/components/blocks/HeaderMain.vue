<template>
  <header class="header">
    <div :class="{
      'container header__wrapper': true,
      'container__secandary': smallContainer
    }">
    <router-link
      to="/"
      v-if="isBasket"
      style="text-decoration: none;"
    >
    <Button title="←"/>
    </router-link>
    <p v-if="!isBasket">Наша продукция</p>
    <p v-else> Корзина с выбранными товарами</p>
      <router-link
         to="/about"
         v-if="!isBasket"
         style="text-decoration: none;"
         >
        <div class="header__wrapper_basket"> 3 товара <br>на сумму 3500 Р <br/>
            <basketIcon />
        </div>
      </router-link>
    </div>
  </header>
</template>

<script>
import basketIcon from '@/components/icons/basketIcon.vue'
import Button from '@/components/ui/Button.vue'
export default {
  name: 'HeaderMain',
  components: {
    basketIcon,
    Button
  },
  props: {
    isBasket: {
      type: Boolean,
      default: false
    },
    smallContainer: {
      type: Boolean,
      default: false
    },
    button: {
      type: String,
      default: ''
    }
  },
  setup () {
  }
}
</script>
<style lang="scss" scoped>
.header {
  background: rgb(22, 21, 22);
  height: 130px;
  &__wrapper {
    display: flex;
    justify-content: space-between;
}
  color: rgb(255, 255, 255);
  font-family: Montserrat;
  font-size: 31px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 0%;
  text-transform: uppercase;
  padding-top: 54px;
}
  .header__wrapper_basket {
    display: flex;
    justify-content: space-between;
    color: rgb(255, 255, 255);
    font-family: Montserrat;
    font-size: 17px;
    // font-weight: 500;
    line-height: 21px;
    letter-spacing: 0%;
    display: flex;
    justify-content: center;
    text-align: right;
  }
  .button {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      width: 30px;
      height: 30px;
      border: 1px solid rgb(213, 140, 81);
      color: rgb(213, 140, 81);
      border-radius: 50%;
      cursor: pointer;
  }
</style>
