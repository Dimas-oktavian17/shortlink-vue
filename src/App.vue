<script setup>
import { ref } from 'vue'
import HeaderComponent from './components/headerComponent.vue'
// title
const headerTitle = ref('Shortly')
</script>

<template>
    <HeaderComponent :title="headerTitle"></HeaderComponent>
</template>

