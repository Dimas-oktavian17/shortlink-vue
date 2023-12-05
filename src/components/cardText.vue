<script setup>
defineProps({
    title: String,
    description: String,
})
</script>
<template>
    <div class="flex flex-col items-center pb-4 text-center">
        <!-- title -->
        <h1 class="text-3xl font-semibold leading-tight text-netralVeryDarkViolet">
            {{ title }}
        </h1>
        <!-- paragraf -->
        <p class="font-medium text-base text-netralGrayishViolet pt-4 px-4 lg:px-[17rem]">
            {{ description }}
        </p>
    </div>
</template>
