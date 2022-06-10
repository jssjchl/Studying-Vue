import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      count: 0,
      cart: [
        { prouct_id: 1, product_item: 'iphone', categoty: 'A' },
        { prouct_id: 2, product_item: 'airpod', categoty: 'B' },
        { prouct_id: 3, product_item: 'APPLE', categoty: 'A' }
      ],
    }
  },
  mutations: {
    increment(state) {
      state.count = state.count + 1
    },
  },
  getters: {
    cartCount: (state) => {
      return state.cart.length
    },
    productACount: (state) =>{
        return state.cart.filter(p=>p.categoty == 'A').length;
        //filters == 특정조건을 갖는 배열을 리턴해주는 함수 
        //p는 배열의 하나 하나 값이 들어온다. 
    }
  },
})

export default store
