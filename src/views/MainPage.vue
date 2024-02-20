<template>
  <HeaderMain />
  <Main
  :listArray="products"
  @clickCard="clickCard"
  />
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import HeaderMain from '@/components/blocks/HeaderMain.vue'
import Main from '@/components/blocks/Main.vue'

export default {
  name: 'MainPage',
  components: {
    HeaderMain,
    Main
  },
  props: {
  },
  setup () {
    const store = useStore()
    const products = computed(() => {
      return store.getters.getProductsList
    })
    const clickCard = (item) => {
      store.commit('SetBasketList', item.id)
    }
    return {
      products,
      clickCard
    }
  }
}
</script>

<style lang="scss" scoped>
:deep(.card){
  width: 24%;
}
</style>
