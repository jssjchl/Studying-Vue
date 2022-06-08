<script setup>
</script>

<template>
  <img src="https://kr.vuejs.org/images/logo.png" style="height: 150px; " />
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/test">TestPage</router-link> |
    <router-link to="/Contact">Contact</router-link> |
    <router-link to="/ex">DataBindeing EX</router-link> |
    <router-link to="/classBinding">ClassDataBindeing</router-link> |
    <router-link to="/list">List </router-link> |
    <router-link to="/rendering">Rendering </router-link> |
    <router-link to="/axiosEx">Axios </router-link>
  </div>
  <router-view />
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
