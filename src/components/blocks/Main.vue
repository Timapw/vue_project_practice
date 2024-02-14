<template>
    <main class="container">
      <div class=" container__card">
        <CardProduct
        :preview="require('@/assets/images/oysters.png')"
        title="Устрицы по рокфеллеровски"
        description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
        price="2700 P"
      />
      <CardProduct
        :preview="require('@/assets/images/ribs.png')"
        title="Свиные ребрышки на гриле с зеленью"
        description="Не следует, однако забывать, что реализация намеченных плановых"
        price="1600 P"
      />
      <CardProduct
        :preview="require('@/assets/images/shrimps.png')"
        title="Креветки по-королевски в лимонном соке"
        description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу"
        price="1820 P"
      />
      <CardProduct
        :preview="require('@/assets/images/oysters.png')"
        title="Устрицы по рокфеллеровски"
        description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
        price="2700 P"
      />
      <CardProduct
        :preview="require('@/assets/images/oysters.png')"
        title="Устрицы по рокфеллеровски"
        description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
        price="2700 P"
      />
      <CardProduct
        :preview="require('@/assets/images/ribs.png')"
        title="Свиные ребрышки на гриле с зеленью"
        description="Не следует, однако забывать, что реализация намеченных плановых"
        price="1600 P"
      />
      <CardProduct
        :preview="require('@/assets/images/shrimps.png')"
        title="Креветки по-королевски в лимонном соке"
        description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу"
        price="1820 P"
      />
      <CardProduct
        :preview="require('@/assets/images/oysters.png')"
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
  },
  setup () {
  }
}
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
  .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(22, 21, 22);
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .container__card {
    width: 1500px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-left: 35px;
    margin-right: 35px;
  }
  </style>
