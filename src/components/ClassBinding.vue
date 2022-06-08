<template>
    <div class="container" v-bind:class="[activeClass, redClass]">Class Binding</div>
    <!-- 배열 형태로도 class의 속성 값을 추가할 수 있다. -->
    <div class="container" v-bind:class="{'active':isActive, 'text-red':isRed}">Class Binding</div>
    <!-- 같은 속성을 여러번 선언했을 때에는 속성에 추가가 된다.
        class container에 v-bind:class의 속성이 추가됨  -->

    <div v-bind:style="[baseStyle, addStyle]">인라인 스타일 Binding</div>
                                                               

</template>
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
             isActive : true //isActive가 true면 container에 active css가 적용됨
            ,isRed: false

            , activeClass :'active2'
            , redClass: 'text-red'
            
            , baseStyle: 'background-color:orange;width:100%;height:200px'
            , addStyle: 'color:pink;font-weight:bold'
        };
    },
    sertup() { },
    created() { },
    mounted() { },
    unmounted() { },
}</script>
<style scoped>
.container {
    width: 100%;
    height: 200px;
}
.active{
    background-color: yellow;
    font-weight: bold;
}
.active2{
    background-color: blue;
    font-weight: bold;
}
.text-red{
    color: red;
}
</style>