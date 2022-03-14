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

const fontClass = computed(() => {
    return `list__font-size--${props.fontSize}`
})
</script>

<template>
    <TransitionGroup class="list" tag="ul" name="fade">
        <li
            class="text-center"
            :class="fontClass"
            v-if="!lists.length"
        >@ something that you want to do ⚡️</li>
        <li
            v-for="(list, index) in lists"
            :key="list"
            :class="fontClass"
            :style="`color: ${fontColor}`"
        >{{ list  }}</li>
    </TransitionGroup>
</template>

<style lang="scss" scoped>
@import "./list";
</style>