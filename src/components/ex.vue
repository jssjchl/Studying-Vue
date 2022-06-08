<template>
    <div>
        <h1>{{ sampleData }}</h1>
        <div v-html="htmlString"></div>
        <input type="text" v-model="inputText" />

        <select v-model="city">
            <option value="2">서울</option>
            <option value="21">부산</option>
            <option value="64">제주</option>
        </select>
        <label> <input type="checkbox" value="서울" v-model ="checked">서울</label>
        <label> <input type="checkbox" value="부산" v-model ="checked">부산</label>
        <label> <input type="checkbox" value="제주" v-model ="checked">제주</label>

        <label> <input type="radio" value="서울" v-model ="checked2">서울</label>
        <label> <input type="radio" value="부산" v-model ="checked2">부산</label>
        <label> <input type="radio" value="제주" v-model ="checked2">제주</label>
    </div>
    <br>
    <span>
        체크한 지역: {{checked}} 
        체크한 지역: {{checked2}} 
        <!-- //체크한 도시의 이름이 배열로 들어가 표시된다, -->
    </span>
</template>
<!-- 문자열의 데이터 바인딩은 {{}} 두개로 표현한다. -->
<!-- html태그의 내용 그대로 표현하려면 v-html을 사용한다 -->
<!-- v-model은  INPUT태그와 함께 사용 가능하다.-->
<!-- v-model은  value와 바인딩된다-->
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            sampleData: 'hello'
            , htmlString: '<p style="color :red;"> This is a red String</p> '
            , inputText: 'vuesadasd'
            , city : 2
            , checked : [] //체크한 도시의 이름이 표시된다,
            , checked2 : [] 
        };
    },
    sertup() { },
    created() { },
    mounted() { },
    unmounted() { },
}</script>
<style scoped>
</style>