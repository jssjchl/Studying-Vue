<!-- 부모 컴포넌트 -->
<template>
    <CompositionAPIInject />
</template>

<script>
import { provide } from 'vue';
//setUp() 안에서 provide를 사용하려면 vue에서 import를 해줘야한다.
import CompositionAPIInject from './CompositionAPIInject.vue'
export default {
    components: { CompositionAPIInject },
    setup() {
        provide('title', "Vue.js Project")
    }
}
</script>