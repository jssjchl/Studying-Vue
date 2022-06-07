<!-- html -->
<template>
    <div>
        <h1>{{ title }}</h1>
        <input type="text" v-model="title" />
        <!-- text를 바꾸면 title에 해당하는 data값이 실시간으로 바뀐다. -->
        <!-- vue는 양방향 데이터 바인딩을 지원한다. -->
    </div>
</template>

<!-- js -->
<script>
export default {
    name: ''
    , components: {}
    , data() {
        return {
            title: 'hello World'
        };
    },
    setup(){}
    , created(){} //view컴포넌트가 실행되는 순간 정의된 코드가 실행
    , mounted(){} // Templete안에 정의된 html Dom이 실제 화면에 로딩이 되는 순간 실행
    , unmounted(){} //현재 컴포넌트에서 다른 컴포넌트로 이동되는 순간 실행
    , methods: {

    }
}
</script>

<!-- css -->
<style scoped>
</style>
