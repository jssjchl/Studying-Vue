<template>
    <div>
        <div>Likes : {{ likes }}</div>
        <div>isOk: {{ isOk }}</div>
        <div>commentId: {{ commentId }}</div>
        <button type="button" @click="childFunction" ref="childBtn">자식에 있는 클릭</button>
        <button type="button" @click="sendFromChild" ref="childBtn">자식컴포넌트 버튼</button>
        <div>
            msg: {{ msg }}
        </div>
    </div>
</template>
<script>

export default {
    name: '',
    props: {
        likes: { //number값 전달
            type: Number
            , default: 0
        },

        isOk: { //boolean 값 전달
            type: Boolean
            , default: false
        },
        commentId: { //배열 전달
            type: Array
        }
   

    },
    components: {},
    data() {
        return {
            msg: '자식에 있는 메시지'
            ,message : '자식 컴포넌트가 보내는 메시지'
        };
    },
    sertup() { },
    created() { },
    mounted() {
        console.log(this.commentId);
    },
    unmounted() { },
    methods: {
        childFunction() {
            this.$swal('부모컴포넌트에서 발생시킨 것');
        },
        sendFromChild(){
            this.$emit('send-message', this.message);
            //emit은 자식컴포넌트가 부모컴포넌트에 이벤트를 발생시킨다.
        }
    },
}</script>
<style scoped>
</style>