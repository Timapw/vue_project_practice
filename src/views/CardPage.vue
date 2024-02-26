<template>
  <div class="wrapper">
    <HeaderMain
    isItem
    />
    <div class="page__product">
      <img class="page__product_image" :src="product.img" alt="">
      <div class="page__product_description">
        <h1 class="">{{ product.title }}</h1>
        <p class="">{{ product.description }}</p>
        <div class="page__product_price">
          <span class="">{{ product.price }} ₽</span>
          <Button item title="В корзину" @click="addInBasket"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { onBeforeMount, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import HeaderMain from '@/components/blocks/HeaderMain.vue'
import Button from '@/components/ui/Button.vue'

export default {
  name: 'CardPage',
  components: {
    HeaderMain,
    Button
  },
  props: {
  },
  setup () {
    const route = useRoute()
    const store = useStore()
    const product = computed(() => {
      return store.getters.getCardPage
    })
    onBeforeMount(() => {
      store.commit('SetCardPage', route.params.id)
    })
    const addInBasket = () => {
      store.commit('SetBasketList', product.value.id)
    }
    return {
      product,
      addInBasket
    }
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  background-image: url(../assets/images/fone.png);
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  color: #fff;
  overflow:auto;
}

:deep(.header) {
  background-color: transparent;
}
.page__product {
  // position: relative;
  width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  // flex-wrap: wrap;
}

.page__product_image{
  width: 501px;
  height: 503px;
  // margin-left: 142px;
}
.page__product_description {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 528px;
  height: 382px;
}
.page__product_price {
  width: 420px;
  display: flex;
  justify-content: space-between;
}
h1 {
  color: rgb(213, 140, 81);
  font-family: Montserrat;
  font-size: 30px;
  font-weight: 500;
  line-height: 37px;
  letter-spacing: 0%;
  text-align: left;
}
span {
  color: rgb(255, 255, 255);
  font-family: Montserrat;
  font-size: 23px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0%;
  text-align: left;
  display: flex;
  align-items: center;
}
p {
  color: rgb(255, 255, 255);
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0%;
  text-align: left;
}
</style>
