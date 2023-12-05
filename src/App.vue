<script setup>
<<<<<<< HEAD
import { ref } from 'vue'
import HeaderComponent from './components/headerComponent.vue'
// title
const headerTitle = ref('Shortly')
=======
import { reactive, toRefs } from 'vue'
import HeaderComponent from './components/headerComponent.vue'
import MainComponent from './components/mainComponent.vue'
const Title = reactive({
    headerTitle: 'Shortly',
    mainTitle: 'More than just shorter links'
})
const { headerTitle, mainTitle } = toRefs(Title)
>>>>>>> dev
</script>

<template>
    <HeaderComponent :title="headerTitle"></HeaderComponent>
<<<<<<< HEAD
=======
    <MainComponent :title="mainTitle" />
>>>>>>> dev
</template>

