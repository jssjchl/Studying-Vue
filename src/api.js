import axios from 'axios'

export default {
  mounted() {
    console.log('믹스인 mounted')
  },
  unmounted() {},
  methods: {
    async $callApi(url, method, data) {
      return (
        await axios({
          //서버로 호출했던 그 res를 받기 까지 await으로 기다렸다가 실행
          method: method, //get, post등의 방식
          url: url,
          data: data, //보낼 데이터
        }).catch((e) => {
          console.log(e)
        })
      ).data //response는 data에 담긴다.
    },
  },
}
