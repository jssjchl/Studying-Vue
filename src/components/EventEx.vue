<template>
    <div>
        <button type="button" @click="one(), two()">ADD 1</button>
        <!-- 버튼에다가 이벤트를 줄 때 v-on 디렉티브 사용 function은 method에 구현 -->
        <!-- v-on 은 @ 로 댸체 가능하다 == v-on:click = @click -->
        <!-- 쉼표를 기준으로 동시에 여러개의 이벤트를 실행시킬 수 있다 -->
        <p>The count is : {{ counter }}</p>

        <select v-model="city" @change="changeSelect">
            <option value="seoul">Seoul</option>
            <option value="busan">Busan</option>
            <option value="jeju">Jeju</option>
        </select>
<!-- change 이벤트 -->

        <input type="text" v-model ="textValue" @keyup.enter="showValue" />
        <!-- tab, delete, esc, space, enter, up, down, left, right 키에서 @keyup을 사용한다. -->
        
    </div>
</template>
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            counter: 0
            ,city:''
            ,textValue : ''
        };
    },
    sertup() { },
    created() { },
    mounted() { },
    unmounted() { },
    methods: {
        increaseCounter() {
            this.counter = this.counter +1;
        }
        ,one(){
            alert('one');
        }
        ,two(){
            alert('two');
        }
        ,changeSelect(){
            alert(this.city);
        }
        ,showValue(){
            alert(this.textValue);
        }
    }
}</script>
<style scoped>
</style>