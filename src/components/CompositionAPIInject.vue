<!-- 자식 컴포넌트 -->

<template>
    <div>
        <h1>{{ title }}</h1>
    </div>
</template>

<script>
import { inject } from 'vue';
export default {
    setup() {
        const title = inject('title');
        //키값을 넣어주고 inject를 하면 title값을 가져온다

        return { title };
    }
}
</script>