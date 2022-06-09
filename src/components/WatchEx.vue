<template>
    <div>
        <input type="text" v-model.number="x"/>
        <input type="text" v-model.number="y"/>
        <input type="text" v-model.number="z"/>
        <!-- <button type="button" @click="Add" >더하기</button> -->
    </div>
</template>
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            x: 0
            , y: 0
            , z: 0

        };
    },
    watch: {
        x(){ //데이터 필드의 변화를 감지해서 변화가 있을 때 작동한다.
            //x값의 변화가 있을 때 실행
            //하지만 변화가 있을 때마다 연산을 하다보니 자주 사용되면 성능에는 좋지 않은 영향
             this.z = this.x + this.y;
        }, 
        y(){
             this.z = this.x + this.y;
        }
    },
    sertup() { },
    created() { },
    mounted() { },
    unmounted() { },
    methods: {
        Add() {
            this.z = this.x + this.y;
        }
    },
}</script>
<style scoped>
</style>