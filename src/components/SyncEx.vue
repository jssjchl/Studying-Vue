<template>
    <div>
        <button type="button" @click="showData">변경된 데이터 확인</button>
        <ChildComponent ref="childComponent"/>
    </div>
</template>
<script>
    import ChildComponent from './ChildComponent.vue';
export default {
    name: '',
    components: {ChildComponent},
    data() {
        return {
            parentMsg: ''
        };
    },
    computed: {
        msg(){
            return this.$refs.childComponent.msg;
        }
    },  
    sertup() { },
    created() { },
    mounted() { },
    unmounted() { },
    methods: {
        showData(){
            alert(this.msg);
        }
    },
}</script>
<style scoped>
</style>