<template>
    <main class="main">
      <div :class="{
        'container main__wrapper': true,
        'main__wrapper_column': column,
        'container__secandary': column
      } ">
      <CardProduct :horizontally="column" v-for="(item, i) in  listArray " :key="i" :preview="item.img"
        :title="item.title" :description="item.description" :price="item.price" />
      </div>
    </main>
</template>
<script>
import CardProduct from '@/components/elements/CardProduct.vue'
export default {
  name: 'ListProducts',
  components: {
    CardProduct
  },
  props: {
    minusHeight: {
      type: String,
      default: '184px'
    },
    column: {
      type: Boolean,
      default: false
    },
    listArray: {
      type: Array,
      default: () => {}
    }
  },
  setup () {
  }
}
</script>
<style lang="scss" scoped>
.main {
  background: rgb(22, 21, 22);
  height: calc(100vh - v-bind(minusHeight));
  overflow: auto;
 .card {
  // width: 24%;
 }
  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 35px 0;
    &_column {
      // flex-direction: column;
    }
  }
}
  </style>
