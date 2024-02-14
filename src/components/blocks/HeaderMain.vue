<template>
    <header class="header">
      <div class="header__main">
        <div class="header__main__product">Наша продукция</div>
        <div class="header__main__info"> 3 товара <br>на сумму 3500 Р <br/>
        <basketIcon /></div>
      </div>
   </header>
</template>

<script>
import basketIcon from '@/components/icons/basketIcon.vue'
export default {
  name: 'HeaderMain',
  components: {
    basketIcon
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
  .header {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 173px;
    background: rgb(22, 21, 22);
  }
  .header__main {
    width: 1500px;
    display: flex;
    justify-content: space-between;
    margin-left: 70px;
    margin-right: 70px;
  }
.header__main__product {
/* наша продукция */
  // ШРИФТ
  color: rgb(255, 255, 255);
  font-family: Montserrat;
  font-size: 31px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 0%;
  text-transform: uppercase;
}
.header__main__info {
  color: rgb(255, 255, 255);
  font-family: Montserrat;
  font-size: 17px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0%;
  display: flex;
  justify-content: center;
  text-align: right;
}
</style>
