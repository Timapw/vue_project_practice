<template>
  <div
    :class="{
      'card':true,
      'card_horizontally': horizontally
    }"
    >
    <img class="card__preview" :src="preview" alt="">
    <p class="card__name">{{ title }}</p>
    <p class="card__description">{{ description }}</p>
    <div class="card__price">
      <p>{{price}}₽</p>
      <Button title="+"/>
    </div>
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
    },
    isBasket: {
      type: Boolean,
      default: false
    },
    horizontally: {
      type: Boolean,
      default: false
    },
    iconBut: {
      type: String,
      default: 'x'
    }
  },
  setup () {
  }
}
</script>
<style lang="scss" scoped>
.card {
  border: 1px solid rgb(213, 140, 81);
  display: flex;
  flex-direction: column;

  &_horizontally {
    flex-direction: row;
    border: none;
    height: 122px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & .card__preview {
      width: 122px;
      height: 122px;
      padding: 0;
      margin: 0;
    }
    & .card__name {
      height: 122px;
      display: flex;
      align-items: center;
    }
    & .card__description {
      display: none;
    }
    & .card__price {
      margin: 0;
      width: 114px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: rgb(213, 140, 81);
    }
    & .button {
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
      content: 'X';
      }
    & .button:hover {
      background-color: rgb(213, 140, 81);
      color: white;
      }
      :deep(button) {
      transform: rotate(45deg);
      border: 1px solid #D58C51;
      color: #D58C51;

      &:hover {
        color: inherit;
      }
      }
    }
  }

.card:hover p {
  color: rgb(213, 140, 81);
}
.card__preview{
  display: block;
  width: 90%;
  padding: 43px 15px 30px 15px;
}
.card__name {
  height: 62px;
  width: 288px;
  color: rgb(255, 255, 255);
  font-family: Montserrat;
  font-size: 17px;
  // font-weight: 500;
  line-height: 21px;
  letter-spacing: 0%;
  text-align: left;
  padding: 15px;
}
.card__description{
  height: 88px;
  width: 288px;
  color: rgb(255, 255, 255);
  font-family: Montserrat;
  font-size: 14px;
  // font-weight: 300;
  line-height: 17px;
  letter-spacing: 0%;
  text-align: left;
  padding: 15px;
  // margin-bottom: 0px;
}
.card__price{
  // position: absolute;
  color: rgb(255, 255, 255);
  font-family: Montserrat;
  font-size: 17px;
  // font-weight: 500;
  line-height: 21px;
  letter-spacing: 0%;
  text-align: left;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  // margin-top: 30px;
  margin-bottom: 36px;
}
</style>
