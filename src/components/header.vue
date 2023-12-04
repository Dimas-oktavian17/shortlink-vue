// eslint-disable-next-line vue/multi-word-component-names
<script setup>
import { ref, reactive } from 'vue'
const nav = reactive([{
    id: 1,
    title: 'Shortly',
},
{
    id: 2,
    title: 'Features',
},
{
    id: 3,
    title: 'Pricing',
},
{
    id: 4,
    title: 'Resources',
},
])
</script>
<template>
    <ul>
        <li v-for="({ title, id }) in nav" :key="id">
            {{ title }}
        </li>
    </ul>
</template>
