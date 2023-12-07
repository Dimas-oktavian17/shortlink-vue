<script setup>
import { reactive, toRefs, ref, } from 'vue'
import MainFigure from './mainFigure.vue'
import cardText from './cardText.vue'
import cardsFigure from './cardsFigure.vue'
defineProps({
    title: String
})

const input = ref('')
const result = ref([])
const error = ref(null)
const isLoading = ref(false)
const mainText = reactive({
    cardsTitle: 'Advanced Statistics',
    cardsDescription: 'Track how your links are performing across the web with our advanced statistics dashboard.'
})
const footerFeatures = ref([
    { id: 1, title: 'Link Shortening', link: '#short' },
    { id: 2, title: 'Branded Links', link: '#short' },
    { id: 3, title: 'Analytics', link: '#short' },
])
const footerResources = ref([
    { id: 1, title: 'Blog', link: '#blog' },
    { id: 2, title: 'Developers', link: 'https://github.com/Dimas-oktavian17' },
    { id: 3, title: 'Support', link: 'https://github.com/Dimas-oktavian17' },
])
const footerCompany = ref([
    { id: 1, title: 'About', link: '#body' },
    { id: 2, title: 'Our Team', link: '#body' },
    { id: 3, title: 'Careers', link: '#body' },
    { id: 4, title: 'Contact', link: '#footer' },
])
const { cardsTitle, cardsDescription } = toRefs(mainText)
// watch(input, newUrl)
// fetch api and form handlers
const shortenUrl = async (url) => {
    const apiUrl = import.meta.env.VITE_API_URL
    const apiKey = import.meta.env.VITE_API_KEY
    const requestData = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            api_token: apiKey,
            url: url
        })
    }
    try {
        const response = await fetch(apiUrl, requestData)
        const data = await response.json()
        result.value.push(data)
    } catch (err) {
        error.value = err.message
        throw new Error(error)
    }
}
// fetch api data
const newUrl = async () => {
    const shortenedUrl = await shortenUrl(input.value)
    return shortenedUrl

}
// copy
const copyUrl = async () => {
    try {

        let { data: { tiny_url } } = result.value[0]
        await navigator.clipboard.writeText(tiny_url)

    } catch (error) {
        console.error(error)
    }
}


</script>
<template>
    <main class="container">
        <!-- Home -->
        <div class="flex flex-col pt-8 lg:flex-row-reverse">
            <!-- ilustrasion -->
            <div class="flex flex-col items-center w-full lg:w-1/2">
                <MainFigure />
            </div>
            <!-- end ilustrasion -->
            <!-- Deskripsi -->
            <div class="flex flex-col items-center justify-center pt-4 lg:items-start lg:pl-7 lg:pt-0 lg:w-1/2">
                <!-- head deskripsi -->
                <div class="text-center lg:text-left">
                    <!-- title -->
                    <h1
                        class="px-4 text-4xl font-semibold leading-tight lg:text-6xl text-primaryDarkViolet lg:leading-tight lg:px-0 ">
                        {{ title }}
                    </h1>
                    <!-- paragraf -->
                    <p class="px-4 pt-4 text-lg font-medium text-netralGray lg:px-0">
                        Build your brand’s recognition and get detailed insights
                        on how your links are performing.
                    </p>
                </div>
                <!-- btn -->
                <div class="flex flex-row items-center justify-center pt-8">
                    <a class="py-4 font-semibold text-white rounded-full bg-primaryCyan px-14 hover:opacity-60"
                        href="#body">
                        Get Started
                    </a>
                </div>
            </div>
        </div>
        <!-- end Home -->
        <div class="relative " id="short">
            <!-- shortLink -->
            <div class="flex flex-col items-center justify-center ">
                <div class="absolute  top-[9.5rem] w-full max-w-xs bg-primaryDarkViolet  p-4 lg:bg-[url('./images/bg-shorten-desktop.svg')] bg-[url('./images/bg-shorten-mobile.svg')] bg-no-repeat bg-contain
        lg:bg-left-bottom lg:bg-cover bg-right-top  rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 lg:p-12 dark:bg-gray-800 dark:border-gray-700
        lg:max-w-5xl">
                    <form class="space-y-3 lg:space-y-0" @submit.prevent="newUrl">
                        <div class="space-y-3 lg:space-y-0 lg:flex lg:flex-row lg:justify-between">
                            <!-- input -->
                            <div class="w-full lg:w-4/5">
                                <input type="text" name="text" v-model="input" class="bg-white border border-white text-netralGray w-full text-lg rounded-lg inline-block  p-2.5
                               focus:border  focus:border-secondaryRed focus:ring-2 focus:ring-secondaryRed "
                                    placeholder="Shorten a link here..." required="">
                            </div>
                            <!-- submit -->
                            <div class="lg:w-[15%] w-full">
                                <button type="submit" class="w-full text-white bg-primaryCyan font-medium rounded-lg text-lg px-5 py-2.5 text-center 
                                      ">
                                    Shorten It!
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- end shortLink -->
        <div class="mt-56 bg-neutral-200">
            <div class="container pt-20">
                <!-- result wrapper -->
                <div class="" v-if="isLoading">
                    Loading...
                </div>
                <div class="result" v-else>

                    <div class="flex flex-col items-center" v-for="({ data: { tiny_url, url }, id }) in result" :key="id">
                        <div class="max-w-xs lg:max-w-7xl ">
                            <div
                                class="flex flex-col items-center justify-center px-4 py-8 mt-4 bg-white rounded-md lg:flex-row lg:justify-between lg:w-[1024px]">
                                <!-- Wrapper old url -->
                                <div class="w-full lg:w-[60%]">
                                    <div class="truncate">
                                        {{ tiny_url }}
                                    </div>
                                </div>
                                <div class="w-full pt-4 lg:w-[25%] lg:pt-0">
                                    <p class="text-xs text-primaryCyan ">{{ url }}</p>
                                </div>
                                <div class="w-full pt-4 lg:w-[15%] lg:pt-0">
                                    <button @click="copyUrl"
                                        class="w-full px-6 py-2 text-base text-center text-white rounded cursor-pointer bg-primaryCyan ">
                                        copy
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- card section -->
                <div class="flex flex-col items-center py-20 lg:items-stretch scroll-mt-14 lg:scroll-mt-10" id="blog">
                    <!-- deskripsi -->
                    <cardText :title="cardsTitle" :description="cardsDescription" />
                    <!-- card wraper -->
                    <div class="lg:flex lg:flex-row lg:justify-between lg:items-center">
                        <!-- card -->
                        <div class="relative max-w-xs lg:max-w-[17.5rem] xl:max-w-[18.75rem] pt-24 ">
                            <!-- logo -->
                            <div
                                class="absolute top-[30%] left-1/2 lg:left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-primaryDarkViolet rounded-full p-6">
                                <cardsFigure />
                            </div>
                            <!-- wraper deskripsi -->
                            <div class="flex flex-col items-center justify-center pt-8 pb-8 mt-4 text-center bg-white">
                                <!-- deskripsi -->
                                <!-- title -->
                                <h1 class="pt-16 text-2xl font-semibold leading-tight text-netralVeryDarkViolet">
                                    Brand Recognition
                                </h1>
                                <!-- paragraf -->
                                <p class="px-4 pt-4 text-base font-medium text-netralGray">
                                    Boost your brand recognition with each click. Generic links don’t
                                    mean a thing. Branded links help instil confidence in your content.
                                </p>
                            </div>
                        </div>
                        <!-- card -->
                        <div data-aos="fade-up"
                            class="relative max-w-xs pt-24 lg:max-w-[17.5rem] xl:max-w-[18.75rem] lg:pt-48">
                            <!-- line -->
                            <div
                                class="absolute top-[10%]  lg:top-[61%] lg:-left-[16%] xl:-left-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                                <p class=" bg-primaryCyan h-20 w-2 lg:h-2 lg:w-[5.7rem] xl:w-[3.8rem]"></p>
                            </div>
                            <!-- logo -->
                            <div
                                class="absolute top-[30%] lg:top-[42.5%] left-1/2 lg:left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-primaryDarkViolet rounded-full p-6">
                                <figure>
                                    <img src="./images/icon-detailed-records.svg" alt="">
                                </figure>
                            </div>
                            <!-- wraper deskripsi -->
                            <div class="flex flex-col items-center justify-center pt-8 pb-8 mt-4 text-center bg-white">
                                <!-- deskripsi -->
                                <!-- title -->
                                <h1 class="pt-16 text-2xl font-semibold leading-tight text-netralVeryDarkViolet">
                                    Detailed Records
                                </h1>
                                <!-- paragraf -->
                                <p class="px-4 pt-4 text-base font-medium text-netralGray">
                                    Gain insights into who is clicking your links. Knowing when and where
                                    people engage with your content helps inform better decisions.
                                </p>
                            </div>
                        </div>
                        <!-- card -->
                        <div data-aos="fade-up"
                            class="relative max-w-xs lg:max-w-[17.5rem] pt-24 xl:max-w-[18.75rem] lg:pt-64">
                            <!-- line -->
                            <div
                                class="absolute top-[10%] lg:top-[60%] lg:-left-[16%] xl:-left-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                                <p class=" bg-primaryCyan h-20 w-2 lg:h-2 lg:w-[5.8rem] xl:w-[4rem]"></p>
                            </div>
                            <!-- logo -->
                            <div
                                class="absolute top-[30%] lg:top-[50%] left-1/2 lg:left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-primaryDarkViolet rounded-full p-6">
                                <figure>
                                    <img src="./images/icon-fully-customizable.svg" width="40" height="40" alt="">
                                </figure>
                            </div>
                            <!-- wraper deskripsi -->
                            <div class="flex flex-col items-center justify-center pt-8 pb-8 mt-4 text-center bg-white">
                                <!-- deskripsi -->
                                <!-- title -->
                                <h1 class="pt-16 text-2xl font-semibold leading-tight text-netralVeryDarkViolet">
                                    Fully Customizable
                                </h1>
                                <!-- paragraf -->
                                <p class="px-4 pt-4 text-base font-medium text-netralGray">
                                    Improve brand awareness and content discoverability through customizable
                                    links, supercharging audience engagement.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end short link -->
            </div>
        </div>


        <!-- last section & footer -->
        <section>
            <div>
                <!-- last section -->
                <div class="flex flex-col items-center justify-center  lg:py-14 py-20 bg-primaryDarkViolet lg:bg-[url('./images/bg-boost-desktop.svg')] 
          lg:bg-cover lg:bg-center bg-[url('./images/bg-boost-mobile.svg')] bg-no-repeat bg-cover ">
                    <!-- deskripsi -->
                    <!-- title -->
                    <h1 class="text-2xl font-semibold leading-tight text-white lg:text-3xl">
                        Boost your links today
                    </h1>
                    <!-- btn -->
                    <div class="flex flex-row items-center justify-center pt-8 ">
                        <a class="py-4 font-semibold text-white rounded-full bg-primaryCyan lg:px-4 px-14 lg:text-base lg:py-2"
                            href="#short">
                            Get Started
                        </a>
                    </div>
                </div>
                <!-- end last section -->
                <!-- footer -->
                <footer id="footer"
                    class="flex flex-col items-center justify-center py-20 lg:flex-row lg:items-baseline lg:justify-evenly bg-netralVeryDarkViolet">
                    <!-- one -->
                    <div class="flex flex-col items-center justify-center lg:items-start">
                        <!-- deskripsi -->
                        <!-- title -->
                        <a href="#body" class="text-4xl font-bold leading-tight text-white">
                            Shortly
                        </a>
                    </div>
                    <!-- two -->
                    <div class="flex flex-col items-center justify-center pt-8 lg:pt-0 lg:items-start">
                        <!-- deskripsi -->
                        <!-- title -->
                        <ul class="text-center list-none lg:text-left">
                            <li
                                class="pb-8 text-lg font-semibold leading-tight text-white transition-all cursor-pointer opacity-90 hover:text-primaryCyan">
                                Features
                            </li>
                            <li v-for="({ title, link, id }) in footerFeatures" :key="id"
                                class="pb-4 text-base font-normal leading-tight transition-all text-netralGray hover:text-primaryCyan">
                                <a :href="link">
                                    {{ title }}
                                </a>
                            </li>

                        </ul>
                    </div>
                    <!-- three -->
                    <div class="flex flex-col items-center justify-center pt-6 lg:pt-0 lg:items-start">
                        <!-- deskripsi -->
                        <!-- title -->
                        <ul class="text-center list-none lg:text-left">
                            <li
                                class="pb-8 text-lg font-semibold leading-tight text-white transition-all cursor-pointer opacity-90 hover:text-primaryCyan">
                                Resources
                            </li>
                            <li v-for="({ title, link, id }) in footerResources" :key="id"
                                class="pb-4 text-base font-normal leading-tight transition-all text-netralGray hover:text-primaryCyan">
                                <a :href="link">
                                    {{ title }}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <!-- four -->
                    <div class="flex flex-col items-center justify-center pt-6 lg:pt-0 lg:items-start">
                        <!-- deskripsi -->
                        <!-- title -->
                        <ul class="text-center list-none lg:text-left">
                            <li
                                class="pb-8 text-lg font-semibold leading-tight text-white transition-all cursor-pointer opacity-90 hover:text-primaryCyan">
                                Company
                            </li>
                            <li v-for="({ title, link, id }) in footerCompany" :key="id"
                                class="pb-4 text-base font-normal leading-tight transition-all text-netralGray hover:text-primaryCyan">
                                <a :href="link">
                                    {{ title }}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <!-- five -->
                    <div class="flex flex-col items-center justify-center pt-6 lg:pt-0">
                        <!-- wrapper -->
                        <div class="flex flex-row justify-center items-center gap-[10px]">
                            <!-- box -->
                            <a href="https://www.facebook.com/dimas.oktavian.5055/" class="group">
                                <div
                                    class="flex flex-row justify-center items-center p-[10px] gap-[10px] rounded-[100px] bg-[#fe5e440d]  transition-all duration-500 group-hover:bg-primaryCyan">
                                    <!-- icon -->
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                        <path fill="#FFF"
                                            d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                                    </svg>
                                </div>
                            </a>
                            <!-- box -->
                            <a href="#footer" class="group">
                                <!-- box -->
                                <div
                                    class="flex flex-row justify-center items-center p-[10px] gap-[10px] rounded-[100px] bg-[#fe5e440d] transition-all duration-500 group-hover:bg-primaryCyan">
                                    <!-- icon -->
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
                                        <path fill="#FFF"
                                            d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z" />
                                    </svg>
                                </div>
                            </a>
                            <!-- box -->
                            <a href="#footer" class="group">
                                <!-- box -->
                                <div
                                    class="flex flex-row justify-center items-center p-[10px] gap-[10px] rounded-[100px] bg-[#fe5e440d] transition-all duration-500 group-hover:bg-primaryCyan">
                                    <!-- icon -->
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                        <path fill="#FFF"
                                            d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                                    </svg>
                                </div>
                            </a>
                            <!-- box -->
                            <a href="https://www.instagram.com/dimas_okr/?hl=id" class="group">
                                <!-- box -->
                                <div
                                    class="flex flex-row justify-center items-center p-[10px] gap-[10px] rounded-[100px] bg-[#fe5e440d] transition-all duration-500 group-hover:bg-primaryCyan">
                                    <!-- icon -->
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                        <path fill="#FFF"
                                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </footer>
                <!-- footer -->
            </div>
        </section>
        <!-- footer -->
    </main>
</template>
