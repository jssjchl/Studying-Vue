<template>
    <h1>{{ sampleData }}</h1>
    <div>{{ sampleData2 }}</div> 
</template>
<!-- 문자열의 데이터 바인딩은 {{}} 두개로 표현한다. -->
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            sampleData : 'hello',
            sampleData2 : 'world'
            };
    },
    sertup() { },
    created() { },
    mounted() { },
    unmounted() { },
}</script>
<style scoped>
</style>