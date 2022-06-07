<script setup>
</script>

<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + Vite" />
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/test">TestPage</router-link> |
    <router-link to="/Contact">Contact</router-link>
  </div>
  <router-view/> 
  <!-- router에서 찾은 컴포넌트가 표시될 위치 -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
