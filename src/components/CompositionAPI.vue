<template>
    <div>
        <h2>Calculator</h2>
        <div>
            <input type="text" v-model.number="state.num1" @keyup="plusNumber" />
            <span>+</span>
            <input type="text" v-model.number="state.num2" @keyup="plusNumber" />
            <span>=</span>
            <span>{{ state.result }}</span>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue'
export default {
    name: 'cal',
    components: {},

    setup() {
        let state = reactive({ //reactive를 이용하면 각 변수의 실시간 변경사항에 대해 반응형으로 적용
            num1: 0,
            num2: 0,
            result: 0
        });
        function plusNumber() {
            state.result = state.num1 + state.num2;
        }
        return {
            state,
            plusNumber
        };
    },
}</script>