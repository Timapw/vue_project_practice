<template>
  <header class="header">
    <div :class="{
      'container header__wrapper': true,
      'container__secondary': smallContainer
    }">
    <router-link
      to="/"
      v-if="isBasket | isItem"
      style="text-decoration: none;"
    >
    <Button title="←" @click="router.go(-1)" />
    </router-link>
    <p v-if="!isBasket & !isItem">НАША ПРОДУКЦИЯ</p>
    <p v-else-if="isBasket">КОРЗИНА С ВЫБРАННЫМИ ТОВАРАМИ</p>
    <p v-else-if="isItem"></p>
      <div class="button__position"><router-link
         to="/about"
         v-if="!isBasket"
         style="text-decoration: none;"
         >
        <div class="header__wrapper_basket"> {{count}} товара <br>на сумму {{ price.toLocaleString() }} ₽ <br/>
            <basketIcon />
        </div>
      </router-link>
      <router-link to="/auth">
        <button class="exitBtn" @click.stop="router.go('/auth')">Выйти</button>
      </router-link>
      </div>
    </div>
  </header>
</template>

<script>

import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

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
    },
    isItem: {
      type: Boolean,
      default: false
    }
  },
  setup () {
    const store = useStore()
    const router = useRouter()

    const count = computed(() => {
      return store.getters.getCountBasketProduct
    })
    const price = computed(() => {
      return store.getters.getAllPriceInBasket
    })
    return {
      count,
      price,
      router
    }
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
    align-items: center;
}
  color: rgb(255, 255, 255);
  font-family: Montserrat;
  font-size: 31px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 0%;
  // text-transform: uppercase;
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
  .button__position {
    display: flex;
    justify-content: space-between;
  }
  .exitBtn {
    padding: 12px 75px 13px 77px;
    margin-left: 20px;
    color: rgb(213, 140, 81);
    background: none;
    box-sizing: border-box;
    border: 1px solid rgb(213, 140, 81);
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0%;
    text-align: left;
  }
</style>
