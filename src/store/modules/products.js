import products from '@/modules/products'
import { v4 as uuidv4 } from 'uuid'

export default {
  state: {
    CountBasketProduct: 0,
    AllPriceInBasket: 0,
    ProductsList: products,
    BasketList: [
      // {
      //   id: 1,
      //   img: require('@/assets/images/oysters.png'),
      //   title: 'Устрицы по рокфеллеровски',
      //   price: 2700
      // },
      // {
      //   id: 2,
      //   img: require('@/assets/images/ribs.png'),
      //   title: 'Свиные ребрышки на гриле с зеленью',
      //   price: 1600
      // },
      // {
      //   id: 3,
      //   img: require('@/assets/images/shrimps.png'),
      //   title: 'Креветки по-королевски в лимонном соке',
      //   price: 1820
      // }
    ]
  },
  getters: {
    getProductsList: state => state.ProductsList,
    getBasketList: state => state.BasketList,
    getCountBasketProduct: state => state.CountBasketProduct,
    getAllPriceInBasket: state => state.AllPriceInBasket
  },
  mutations: {
    SetBasketList (state, val) {
      state.ProductsList.forEach(item => {
        if (item.id === val) {
          const itemBasket = {
            id: item.id,
            idx: uuidv4(),
            img: item.img,
            title: item.title,
            price: item.price
          }
          state.BasketList.push(itemBasket)
        }
      })
      localStorage.basket = JSON.stringify(state.BasketList)
      state.CountBasketProduct = state.BasketList.length
      state.AllPriceInBasket = state.BasketList.reduce((prev, item) => {
        return prev + item.price
      }, 0)
    },
    SetStoreBasket (state, val) {
      state.BasketList = JSON.parse(localStorage.getItem('basket'))
      state.CountBasketProduct = state.BasketList.length
      state.AllPriceInBasket = state.BasketList.reduce((prev, item) => {
        return prev + item.price
      }, 0)
    },
    SetBasketRemoveItem (state, val) {
      state.BasketList = state.BasketList.filter(item => {
        return item.idx !== val
      })
      localStorage.basket = JSON.stringify(state.BasketList)
      state.CountBasketProduct = state.BasketList.length
      state.AllPriceInBasket = state.BasketList.reduce((prev, item) => {
        return prev + item.price
      }, 0)
    }
  },
  actions: {
  }
}
