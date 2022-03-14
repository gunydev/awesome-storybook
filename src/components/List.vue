<script setup>
import { computed, watch } from 'vue';

const props = defineProps({
    lists: {
        type: Array,
        default: () => {
            return []
        }
    },
    fontSize: {
        type: String,
        fontSize: {
            type: String,
            validator: function (value) {
                return ['small', 'medium', 'large'].indexOf(value) !== -1;
            },
        },
    },
    fontColor: {
        type: String,
    },
})

watch(
    () => props.list,
    (val) => {
        props.lists.push(val)
    }
)

const fontClass = computed(() => {
    return `list__font-size--${props.fontSize}`
})
</script>

<template>
    <TransitionGroup class="list" v-for="(list, index) in lists" tag="ul" name="list">
        <li :class="fontClass" v-if="!lists.length">@ something that you want to do ⚡️</li>
        <li :key="index" :class="fontClass" :style="`color: ${fontColor}`">{{ list }}</li>
    </TransitionGroup>
</template>

<style lang="scss" scoped>
@import "./list";
</style>