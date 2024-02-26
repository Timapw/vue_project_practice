<template>
 <button :class="{
      'button':true,
      'button_item': item
    }">{{ title }}</button>
</template>
<script>
export default {
  name: 'ButtonUI',
  components: {
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    item: {
      type: Boolean,
      default: false
    }
  },
  setup () {
  }
}
</script>
<style lang="scss" scoped>
.button{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: 1px solid #ffffff;
  color: #ffffff;
  border-radius: 50%;
  cursor: pointer;
  &_item {
    width: 200px;
    height: 42px;
    content: 'В корзину';
    background: rgb(213, 140, 81);
    border-radius: 0;
    color: rgb(19, 19, 19);
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0%;
    text-align: left;
    border: none;
  }
}
.button:hover {
  background-color: rgb(213, 140, 81);
}
</style>
