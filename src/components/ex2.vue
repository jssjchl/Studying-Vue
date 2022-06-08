<template>
    <div>
        <img v-bind:src="url" style="height: 200px;" />
        <input type="text" v-model = "textValue"/>
        <input type="button" value="Click" v-bind:disabled ="textValue ==''" /> 
        <!-- textVaule =='' => textVaule가 비어있으면 true, 무언가 작성되있으면 false를 반환한다는 뜻  -->
    </div>
</template>
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            url: 'https://kr.vuejs.org/images/logo.png'
            ,textValue :''
        };
    },
    sertup() { },
    created() { },
    mounted() { },
    unmounted() { },
}</script>
<style scoped>
</style>