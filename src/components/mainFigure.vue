<script setup>
import { reactive, toRefs } from 'vue'
import ilustrasion from '../assets/illustration-working.svg'
const figure = reactive({
    title: 'workingIlustrasion',
    link: ilustrasion,
    style: 'w-full h-full'
})
const { title, link, style } = toRefs(figure)
</script>
<template>
    <figure>
        <img :class="style" :src="link" :alt="title">
    </figure>
</template>
