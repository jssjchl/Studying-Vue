<template>
    <div>
        <input type="text" v-model="lastName">
        <input type="text" v-model="firstName">
        <h1>Hello, {{ lastName }} {{ firstName }}</h1>
        <h1>Hello, {{getFullName()}}</h1>
        <h1>Hello, {{fullName}}</h1>
    </div>
</template>
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            firstName: 'jaeseok'
            , lastName: 'choi'
        };
    },
    computed: { //연산을 한 번만 하게 하여 자원의 손실을 막는다.
        fullName(){
             return this.lastName + this.firstName;
             //여기서 사용하는 데이터필드 값은 항상 computed 내에서 감시? 하고 있다
             //데이터 필드 값이 변경되면 바로 반영된다. 
             //지금 input text에서 값이 변경되면 바로 반영됨 
        }
    },
    sertup() { },
    created() { },
    mounted() { },
    unmounted() { },
    methods: {
        getFullName() {
            return this.lastName + this.firstName;
        }
    }
}</script>
<style scoped>
</style>