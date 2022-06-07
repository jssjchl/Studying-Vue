<script>
import { ref } from 'vue'
// ref 컴포지션 API 함수

export default {
  setup() {
    const abbr = ref('DOPT') //반응형 변수를 선언하기 위해서 ref 함수로 한 번 감싸주어야한다.
    const normal = ref('Dong Project Team')

    return {
      abbr,
      normal,
    }
  },
}

</script>

<!-- html -->
<template>
  <p>TestPage</p>
  <input type="text" :value="abbr">
  <input type="text" v-model="normal">
  <!-- v-model은 반드시 value 속성과 결합이 됨  -->

  <hr />

  <abbr :title="normal">{{ abbr }}</abbr>

</template>
