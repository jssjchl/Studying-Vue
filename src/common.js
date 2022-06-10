import { reactive, computed, toRefs } from 'vue'

function plustCalculator() {
    let state = reactive({
        num1: 0
        , num2: 0
        , result: computed(() => state.num1 + state.num2)
    })
    return toRefs(state);
}
export{
    plustCalculator
}