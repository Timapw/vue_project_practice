<template>
 <button class="button">{{ title }}</button>
</template>
<script>
export default {
  name: 'ButtonUI',
  components: {
  },
  props: {
    title: {
      type: String,
      default: '+'
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
}
.button:hover {
  background-color: rgb(213, 140, 81);
}
</style>
