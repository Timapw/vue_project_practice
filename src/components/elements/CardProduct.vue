<template>
  <div class="product">
    <img class="card__preview" :src="preview" alt="">
    <p class="card__name">{{ title }}</p>
    <p class="card__description">{{ description }}</p>
    <p class="card__price">{{ price }}</p>
    <Button class="card__button"></Button>
  </div>
</template>
<script>
import Button from '@/components/ui/Button.vue'
export default {
  name: 'CardProduct',
  components: {
    Button
  },
  props: {
    preview: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    price: {
      type: String,
      default: ''
    }
  },
  setup () {
  }
}
</script>
<style lang="scss" scoped>
.product {
  position: relative;
  display: block;
  flex: 0 0 312px;
  flex-direction: column;
  margin: 35px 20px;
  padding: 0;
  height: 552px;
  box-sizing: border-box;
  border: 1px solid rgb(213, 140, 81);
}
.product:hover p {
  color: rgb(213, 140, 81);
}
.card__preview{
  position: absolute;
  margin: 43px 21px 238px 21px;
}
.card__name {
  position: absolute;
  color: rgb(255, 255, 255);
  font-family: Montserrat;
  font-weight: 500;
  font-size: 17px;
  text-align: left;
  margin: 345px 20px 186px 20px;
}
.card__description{
  position: absolute;
  color: rgb(255, 255, 255);
  font-family: Montserrat;
  font-weight: 400;
  font-size: 14px;
  margin-top: 396px;
  margin-left: 20px;
}
.card__price{
  position: absolute;
  color: rgb(255, 255, 255);
  font-family: Montserrat;
  font-size: 17px;
  margin-top: 495px;
  margin-left: 20px;
}
.card__button {
  position: absolute;
  display: flex;
  justify-content: right;
  align-items: end;
  margin: 490px 25px 32px 257px;
}
</style>
