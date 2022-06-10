<template>
    <modal-layout>
        <template v-slot:header-area>
            <h1>팝업 타이틀</h1>
        </template>

        <template v-slot:default>
            <p>팝업 이벤트 1</p>
            <p>팝업 이벤트 2</p>
        </template>

        <template v-slot:footer-area>
            <button type="button">닫기</button>
        </template>

    </modal-layout>
</template>
<script>
import SlotModalLayout from './SlotModalLayout.vue'
export default {
    name: '',
    components: { "modal-layout": SlotModalLayout },
    data() {
        return {

        };
    },
    sertup() { },
    created() { },
    mounted() { },
    unmounted() { },
    methods: {},
}</script>
<style scoped>
</style>