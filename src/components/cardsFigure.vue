<script setup>
import { reactive, toRefs } from 'vue'
import ilustrasion from '../assets/icon-brand-recognition.svg'
const figure = reactive({
    title: 'icon brand',
    link: ilustrasion
})
const { title, link } = toRefs(figure)
</script>

<template>
    <figure>
        <img :src="link" :alt="title">
    </figure>
</template>
