<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import List from './components/List.vue';
import Input from './components/Input.vue';
import { reactive, ref } from 'vue';

const lists = reactive([])
const onInputCreate = (val) => {
  lists.push(val)
}

</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite + Todo App" />
  <Input @create="onInputCreate" />
  <List :lists="lists" />
</template>s

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  position: relative;
  padding: 32px;
}
</style>
