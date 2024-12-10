<template>    
    <div class=" ">
        <div class="flex flex-wrap justify-center items-center gap-2">
            <div class="border text-center flex justify-center items-center p-2 rounded-md bg-transparent" :class="lang.color" v-for="(lang, index) in languages" :key="index">
                <div class="text-3xl">
                    <img :src="lang.lang" alt="" class="w-[80px] rounded-md min-h-[80px]">
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';
import Javascript from '../../assets/javascript.png'
import HTML from '../../assets/html.png'
import Css from '../../assets/css.png'
import PHP from '../../assets/php.png'
import Laravel from '../../assets/laravel.png'
import Bootstrap from '../../assets/bootstrap.svg'
import Tailwind from '../../assets/tailwindcss.png'
import MySql from '../../assets/mysql.svg'
import Vuejs from '../../assets/logo.png'
import Inertia from '../../assets/inertia.jpg'

let languages = ref([
    {lang: HTML, color: 'border-orange-500'},
    {lang: Css, color: 'border-sky-500'},
    {lang: Javascript, color: 'border-yellow-500'},
    {lang: Bootstrap, color: 'border-purple-500'},
    {lang: Tailwind, color: 'border-sky-300'},
    {lang: PHP, color: 'border-blue-800'},
    {lang: Laravel, color: 'border-red-600'},
    {lang: MySql, color: 'border-gray-500'},
    {lang: Vuejs, color: 'border-green-500'},
    {lang: Inertia, color: 'border-purple-300'},
])
</script>

