<template>
    <div>
        <h2>Calculator</h2>
        <div>
            <input type="text" v-model.number="num1" @keyup="plusNumber" />
            <span>+</span>
            <input type="text" v-model.number="num2" @keyup="plusNumber" />
            <span>=</span>
            <span>{{ result }}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'cal',
    components: {},
    data() {
        return {
            num1: 0,
            num2: 0,
            result: ''
        };
    },
    sertup() { },
    created() { },
    mounted() { },
    unmounted() { },
    methods: {
        plusNumber() {
            this.result = this.num1 + this.num2;
        }
    },
}</script>
<style scoped>
</style>