<template>
    <div>
        Item Length : {{ this.itemLength }}
        Items : {{ this.items }}
    </div>
</template>
<script>
export default {

    inject: ["itemLength" , "items"],

    components: {},

}</script>
<style scoped>
</style>