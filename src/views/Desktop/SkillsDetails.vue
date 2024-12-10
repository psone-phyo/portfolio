<template>
    <div class="lg:flex justify-center items-center gap-5 mx-[10%]">
        <div 
        v-animateonscroll="{ enterClass: 'animate-fadein-left', leaveClass: 'animate-fadeout-left' }" 
        class="animate-duration-1000 my-5"
      >
            <div style="overflow: hidden;" class=" border border-black rounded-md p-3 w-full lg:h-[375px] lg:w-[270px]">
            <h3 class="font-bold mb-3 text-lg">For Backend Development</h3>
            <ul>
                <li v-for="(lang,index) in Backends" :key="index" class="text-lg my-1 p-1 rounded-md border" :class="[lang.color,lang.border]">
                    <img :src="lang.logo" alt="" width="30px" class="inline ">
                    {{lang.name}}
                </li>
            </ul>
        </div>
      </div>

      <div 
        v-animateonscroll="{ enterClass: 'animate-fadein-left', leaveClass: 'animate-fadeout-left' }" 
        class="animate-duration-1000 my-5"
      >
      <div style="overflow: hidden;" class=" border border-black rounded-md p-3 w-full h-[375px] lg:w-[270px]">
            <h3 class="font-bold mb-3 text-lg">For Frontend Development</h3>
            <ul>
                <li v-for="(lang,index) in Frontends" :key="index" class="text-lg my-1 p-1 rounded-md border" :class="[lang.color,lang.border]">
                    <img :src="lang.logo" alt="" width="30px" class="inline">
                    {{lang.name}}
                </li>
            </ul>
        </div>
      </div>

      <div 
        v-animateonscroll="{ enterClass: 'animate-fadein-left', leaveClass: 'animate-fadeout-left' }" 
        class="animate-duration-1000 my-5"
      >
      <div style="overflow: hidden;" class=" border border-black rounded-md p-3 w-full h-[375px] lg:w-[270px]">
            <h3 class="font-bold mb-3 text-lg">Tools</h3>
            <ul>
                <li v-for="(lang,index) in Tools" :key="index" class="text-lg my-1 p-1 rounded-md border" :class="[lang.color,lang.border]">
                    <img :src="lang.logo" alt="" width="30px" class="inline">
                    {{lang.name}}
                </li>
            </ul>
        </div>
      </div>
    </div>
        
</template>

<script setup>
import Listbox from 'primevue/listbox';
import { ref } from "vue";
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
import VSCode from '../../assets/vscode.png'
import Postman from '../../assets/postman.svg'
import Gitbash from '../../assets/gitbash.svg'
import Github from '../../assets/github.png'


const Backends = ref([
    {name: 'PHP', logo: PHP, color: 'bg-gray-200', border: 'border-gray-500'},
    {name: 'Laravel', logo: Laravel, color: 'bg-red-200', border: 'border-red-500'},
    {name: 'MySql', logo: MySql, color: 'bg-gray-100', border: 'border-gray-500'},
])

const Frontends = ref([
    {name: 'HTML', logo: HTML, color: 'bg-orange-200', border: 'border-orange-500'},
    {name: 'CSS', logo: Css, color: 'bg-sky-300', border: 'border-sky-500'},
    {name: 'Javascript', logo: Javascript, color: 'bg-yellow-400', border: 'border-yellow-500'},
    {name: 'Bootstrap', logo: Bootstrap, color: 'bg-purple-300', border: 'border-purple-500'},
    {name: 'Tailwind CSS', logo: Tailwind, color: 'bg-sky-200', border: 'border-sky-500'},
    {name: 'Vue.js', logo: Vuejs, color: 'bg-green-200', border: 'border-green-500'},
    {name: 'Inertia.js', logo: Inertia, color: 'bg-purple-100', border: 'border-purple-300'},
])

const Tools = ref([
    {name: 'VS  Code', logo: VSCode, color: 'bg-blue-200', border: 'border-blue-500'},
    {name: 'Postman', logo: Postman, color: 'bg-orange-300', border: 'border-orange-500'},
    {name: 'Git Bash', logo: Gitbash, color: 'bg-green-100', border: 'border-green-400'},
    {name: 'Github', logo: Github, color: 'bg-gray-500', border: 'border-blue-800'},
])
</script>

<style scoped>
  @keyframes fadein-left {
    0% {
      opacity: 0;
      transform: translateY(-50%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeout-left {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(50%);
    }
  }
  
  .animate-fadein-left {
    animation: fadein-left 1s ease-out forwards;
  }
  
  .animate-fadeout-left {
    animation: fadeout-left 1s ease-out forwards;
  }
</style>
