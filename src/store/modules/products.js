import products from '@/modules/products'
export default {
  state: {
    CountBasketProduct: 0,
    AllPriceInBasket: 0,
    ProductsList: products,
    BasketList: [
      {
        id: 1,
        img: require('@/assets/images/oysters.png'),
        title: 'Устрицы по рокфеллеровски',
        price: 2700
      },
      {
        id: 2,
        img: require('@/assets/images/ribs.png'),
        title: 'Свиные ребрышки на гриле с зеленью',
        price: 1600
      },
      {
        id: 3,
        img: require('@/assets/images/shrimps.png'),
        title: 'Креветки по-королевски в лимонном соке',
        price: 1820
      }
    ]
  },
  getters: {
    getProductsList: state => state.ProductsList,
    getBasketList: state => state.BasketList,
    getCountBasketProduct: state => state.CountBasketProduct,
    getAllPriceInBasket: state => state.AllPriceInBasket
  },
  mutations: {
  },
  actions: {
  }
}
