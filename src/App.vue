<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import List from './components/List.vue';
import Input from './components/Input.vue';
import { reactive, ref } from 'vue';

const lists = reactive([])
let id = lists.length + 1

const onInputCreate = (val) => {
  lists.splice(0, 0, val)

}

</script>

<template>
  <div class="container mx-auto">
    <img class="mx-auto" alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Awesome Todo App" />
    <div class="columns-1 justify-center my-4">
      <Input @create="onInputCreate" />
    </div>
    <div class="columns-1">
      <List :lists="lists" class="text-left" font-size="large" />
    </div>
  </div>
</template>

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
