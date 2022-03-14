<script setup>
import { ref } from 'vue'
const props = defineProps({
    title: String,
})

const emit = defineEmits('create')

const title = ref(props.title)

const onCreate = () => {
    emit('create', title.value)
    title.value = ''
}


</script>

<template>
    <div class="input">
        <input  v-model="title" type="text" name="title" @keyup.enter="onCreate" />
    </div>
</template>

<style lang="scss" scoped>
@import "./input";
</style>