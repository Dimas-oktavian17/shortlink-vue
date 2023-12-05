<script setup>
import { reactive, toRefs } from 'vue'
import HeaderComponent from './components/headerComponent.vue'
import MainComponent from './components/mainComponent.vue'
const Title = reactive({
    headerTitle: 'Shortly',
    mainTitle: 'More than just shorter links'
})
const { headerTitle, mainTitle } = toRefs(Title)
</script>

<template>
    <HeaderComponent :title="headerTitle"></HeaderComponent>
    <MainComponent :title="mainTitle" />
</template>

