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
    //mutations에 선언되어있는 함수를 통해서만 state값을 변경할 수 있다.
  },
  getters: {
      //getters 함수를 통해서 state에 있는 값을 가지고 component를 그 값을 가져와서 사용할 수 있다 .
      
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
