<script setup>
import { ref, reactive } from 'vue'
defineProps({
    title: String
})
const nav = reactive([
    {
        id: 2,
        title: 'Features',
        link: '#features'
    },
    {
        id: 3,
        title: 'Pricing',
        link: '#pricing'
    },
    {
        id: 4,
        title: 'Resources',
        link: '#resources'
    },
])
const hamburger = ref(true)
</script>
<template>
    <header class="container pb-8" id="beranda">
        <nav class="px-2 mb-10 border-gray-200 font-header" id="nav">
            <div
                class="fixed container backdrop-blur-md w-[95%] z-[999]  mx-auto flex flex-wrap items-center md:justify-between justify-around rounded-xl pb-8 lg:w-[98%]">
                <a href="#beranda" class="flex">
                    <span class="self-center pl-4 text-4xl font-semibold whitespace-nowrap text-primaryDarkViolet">{{ title
                    }}</span>
                </a>
                <!-- btn-logout -->
                <div class="flex md:order-2">
                    <div class="relative hidden mr-3 md:mr-0 md:block">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        </div>
                        <a href="mr-4 text-base font-semibold text-netralGrayishViolet">
                            Login
                        </a>
                        <a href="#body">
                            <button type="button" onclick="onLogout()"
                                class="px-5 py-2 mb-2 mr-2 text-lg font-semibold text-white transition-all rounded-full bg-primaryCyan hover:opacity-70">
                                Sign Up
                            </button>
                        </a>
                    </div>
                    <button @click="hamburger = !hamburger" data-collapse-toggle="mobile-menu-3" type="button"
                        class="inline-flex items-center justify-center text-gray-400 rounded-lg md:hidden group hover:text-gray-900"
                        aria-controls="mobile-menu-3" aria-expanded="false" id="hamburger">
                        <span class="sr-only">Open main menu</span>
                        <div class="flex flex-col items-end ">
                            <p
                                :class="[hamburger ? 'bg-netralGrayishViolet transition-all w-[30px] h-1' : 'bg-netralGrayishViolet transition-all w-[30px] h-1 rotate-45 origin-bottom-left']">

                            </p>
                            <p
                                :class="[hamburger ? 'bg-netralGrayishViolet transition-all w-[30px] h-1 my-1' : 'bg-netralGrayishViolet transition-all w-[30px] h-1 scale-0 origin-center']">

                            </p>
                            <p
                                :class="[hamburger ? 'bg-netralGrayishViolet transition-all w-[30px] h-1' : 'bg-netralGrayishViolet transition-all w-[30px] h-1 -rotate-45 origin-center']">

                            </p>
                        </div>
                        <svg class="hidden w-6 h-6" id="hamburger" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <svg class="hidden w-6 h-6" id="close" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div :class="{ listNav: hamburger }" id="mobile-menu-3">
                    <ul
                        class="flex flex-col items-center mt-4 md:mr-72 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li v-for="(   { link, title, id }   ) in    nav   " :key="id">
                            <a :href="link"
                                class="block py-2 pl-3 pr-4 text-base font-semibold text-gray-200 transition-all link md:text-netralGrayishViolet md:p-0 hover:text-gray-100 md:hover:text-netralVeryDarkViolet"
                                aria-current="page">
                                {{ title }}
                            </a>
                        </li>
                        <li class="md:hidden">
                            <button type="button" class="py-2 text-base font-semibold text-gray-200">
                                Login
                            </button>
                        </li>
                        <li class="pt-4 pb-8 md:hidden">
                            <a href="#body">
                                <button type="button"
                                    class="py-2 text-lg font-semibold text-white transition-all rounded-full bg-primaryCyan px-28 hover:opacity-70">
                                    Sign Up
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
