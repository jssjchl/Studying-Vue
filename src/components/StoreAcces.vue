<template>
    <div>
        <h1>Cart: {{cartCount}}</h1>
        <h1>ProductA: {{productACount}}</h1>
        <h2>
            Count: {{ count }}
            <button type="button" @click="increment">증가</button>
        </h2>
    </div>
</template>
<script>
export default {
    computed: {
        count() {
            return this.$store.state.count;
            //store에 접근하려면 $표시해줘야함
        },
        cartCount(){
            return this.$store.getters.cartCount;
        },
        productACount(){
            return this.$store.getters.productACount;
        }
    },
    methods: {
        increment() {
            this.$store.commit("increment");
            //mutation안에 있는 함수를 호출하기 위해서는 commit이라는 함수를 통해 호출할 수 있다. commit함수 파라미터로 호출할 함수의 이름을 준다.
        }
    },
}</script>
<style scoped>
</style>