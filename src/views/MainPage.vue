<template>
  <HeaderMain />
  <Main />
</template>

<script>
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
  }
}
</script>

<style lang="scss" scoped>
</style>
