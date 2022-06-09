<template>
    <h1 class="page-Title">{{title}}</h1>
</template>

<script>
export default {
    props: { 
        title: {
            type: String
            ,default: '페이지 타이틀입니다. '
        }
    }
}
</script>

<style scoped>
    .page-Title{
        padding-left: 5px;
        border-left: 5px solid red;
        text-align: left;
    }
</style>