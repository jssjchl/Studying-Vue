<template>
    <div>
        <h2>Calculator</h2>
        <div>
            <input type="text" v-model.number="num1" />
            <span>+</span>
            <input type="text" v-model.number="num2" />
            <span>=</span>
            <span>{{ result }}</span>
        </div>
    </div>
</template>

<script>
import { plustCalculator } from '../common.js'

export default {
    name: 'cal',
    components: {},

    setup() {
        let { num1, num2, result } = plustCalculator();

        return {
            num1, num2, result
        };
    },
};
</script>