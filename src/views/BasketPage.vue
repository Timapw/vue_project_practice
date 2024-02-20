<template>
    <HeaderMain
    isBasket
    smallContainer
    />
    <Main column
    minusHeight="288px"
    :listArray="basket"
    @clickCard="clickCard"
    />
    <hr>
    <footer>
      <div class="container__secandary">
         <p class="order__line">Заказ на сумму:</p>
         <p class="order__sum">{{price}} ₽</p>
      <button>Оформить заказ</button>
    </div>
    </footer>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import HeaderMain from '@/components/blocks/HeaderMain.vue'
import Main from '@/components/blocks/Main.vue'
export default {
  name: 'BasketPage',
  components: {
    HeaderMain,
    Main
  },
  props: {
    listArray: {
      type: Array,
      default: () => {}
    }
  },
  setup () {
    const store = useStore()
    const basket = computed(() => {
      return store.getters.getBasketList
    })
    const price = computed(() => {
      return store.getters.getAllPriceInBasket
    })
    const clickCard = (item) => {
      // console.log('Клик по карточке из корзины', id)
      store.commit('SetBasketRemoveItem', item.idx)
    }
    return {
      basket,
      price,
      clickCard
    }
  }
}

</script>

<style lang="scss">
  footer {
    padding: 30px 0;
    background: rgb(22, 21, 22);
    color: rgb(255, 255, 255);
    font-family: Montserrat;
    font-size: 21px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0%;
    text-align: left;
    text-transform: uppercase;
  }
  button {
    width: 200px;
    height: 42px;
    background: rgb(213, 140, 81);
    color: rgb(19, 19, 19);
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0%;
    border: 0;
    cursor: pointer;
  }
  hr {
      margin: 0;
      height: 0;
      left: 0;
      border: 1px solid rgb(213, 140, 81);
      background-color: rgb(22, 21, 22);
     }
     .container__secandary {
      position: relative;
      display: flex;
      justify-content: space-between;
     }
  .order__sum{
    position: absolute;
    color: rgb(213, 140, 81);
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0%;
    display: flex;
    justify-content: left;
    left: 225px;
    bottom: 18px;
  }
</style>
