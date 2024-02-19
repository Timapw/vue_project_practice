<template>
    <main class="main">
      <div :class="{
        'container main__wrapper': true,
        'main__wrapper_column': column,
        'container__secandary': column
      } ">
        <CardProduct
        :preview="require('@/assets/images/oysters.png')"
        :horizontally="column"
        title="Устрицы по рокфеллеровски"
        description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
        price="2700 P"
        />
      <CardProduct
        :preview="require('@/assets/images/ribs.png')"
        :horizontally="column"
        title="Свиные ребрышки на гриле с зеленью"
        description="Не следует, однако забывать, что реализация намеченных плановых"
        price="1600 P"
      />
      <CardProduct
        :preview="require('@/assets/images/shrimps.png')"
        :horizontally="column"
        title="Креветки по-королевски в лимонном соке"
        description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу"
        price="1820 P"
      />
      <CardProduct
        :preview="require('@/assets/images/oysters.png')"
        :horizontally="column"
        title="Устрицы по рокфеллеровски"
        description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
        price="2700 P"
      />
      <CardProduct
        :preview="require('@/assets/images/oysters.png')"
        :horizontally="column"
        title="Устрицы по рокфеллеровски"
        description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
        price="2700 P"
      />
      <CardProduct
        :preview="require('@/assets/images/ribs.png')"
        :horizontally="column"
        title="Свиные ребрышки на гриле с зеленью"
        description="Не следует, однако забывать, что реализация намеченных плановых"
        price="1600 P"
      />
      <CardProduct
        :preview="require('@/assets/images/shrimps.png')"
        :horizontally="column"
        title="Креветки по-королевски в лимонном соке"
        description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу"
        price="1820 P"
      />
      <CardProduct
        :preview="require('@/assets/images/oysters.png')"
        :horizontally="column"
        title="Устрицы по рокфеллеровски"
        description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
        price="2700 P"
      />
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
