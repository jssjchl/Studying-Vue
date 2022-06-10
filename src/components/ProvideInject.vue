<template>
    <div>
        <ProvideInjectChild :itemLength="items.length" />
    </div>
</template>
<script>
import ProvideInjectChild from "./ProvideInjectChild.vue";
export default {
    name: '',
    components: { ProvideInjectChild },
    data() {
        return {
            items: ["A", "B"]
        };
    },
    provide() {
        return {
            itemLength: this.items.length,
            items: this.items,
            //key : value
        }
    },
    sertup() { },
    created() { },
    mounted() { },
    unmounted() { },
    methods: {},
}</script>
<style scoped>
</style>