<template>
    <!-- <h1 v-if="bRender">bRender값이 true이면 , h1 블록이 화면에 보여지게 된다.</h1>
    <h1 v-else style="color: red;">bRender값이 false이면 , h1 블록이 화면에 보여지게 된다.</h1> -->
    <h1 v-if="TYPE=='A'"> A</h1>
    <h1 v-else-if="TYPE=='B'"> B</h1>
    <h1 v-else-if="TYPE=='C'"> V</h1>
    <h1 v-else>Other</h1>
</template>
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            bRender: false
            ,TYPE: 'B'

        };
    },
    sertup() { },
    created() { },
    mounted() { },
    unmounted() { },
}</script>
<style scoped>
</style>