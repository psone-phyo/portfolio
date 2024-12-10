<template>
  <div>
    <div class="">
        <div class="lg:grid grid-cols-2 mx-[5%] lg:mx-[10%]">
            <div class="col-spans-1 mx-auto flex justify-center items-center lg:min-h-screen lg:w-full w-8/12 my-5 lg:my-0">
                <div class=" lg:w-8/12">
                    <img src="../assets/myprofile.jpg" alt="" class="rounded-full bg-sky-900 p-2">
                </div>
            </div>

            <div class="col-spans-1 flex justify-center items-center lg:min-h-screen lg:m-0 my-5">
                <div>
                    <h1 class="font-bold text-[30px] lg:text-[50px] text-sky-900">Pyae Sone Phyo</h1>
                    <h2 class="font-bold text-[20px] lg:text-[25px] text-sky-900">Web Developer</h2>
                    <p>
                        I’m a web developer with a strong passion for building functional and engaging web applications. I enjoy solving problems, learning new technologies, and bringing ideas to life through code.

                        This portfolio is a showcase of my journey, skills, and the dedication I bring to my work. I hope you find it insightful and enjoy exploring what I’ve created.

                        Once again, welcome, and I’m glad to have you here!
                    </p>
                    <button class="p-2 rounded-md bg-sky-700 text-white hover:bg-sky-800 my-3 " @click="downloadcv">Download CV</button>
                </div>
                
            </div>

            
        </div>
    </div>

    <!-- languages -->
    <div class="card flex flex-col items-center lg:w-3/4 mx-auto">
      <div 
        v-animateonscroll="{ enterClass: 'animate-fadein', leaveClass: 'animate-fadeout' }" 
        class="animate-duration-1000 mb-5"
      >
      <h1 class="text-3xl font-bold text-sky-900 mb-5">Programming Languages</h1>
      </div>
      <div 
        v-animateonscroll="{ enterClass: 'animate-fadein-left', leaveClass: 'animate-fadeout-left' }" 
        class="animate-duration-1000 "
      >
      <DesktopSkillPage class="hidden lg:block"/>
      <MobileSkillPage class="block lg:hidden"/>
      </div>
    </div>

    <!-- lang Detials -->
    <!-- <div 
        v-animateonscroll="{ enterClass: 'animate-fadein-left', leaveClass: 'animate-fadeout-left' }" 
        class="animate-duration-1000 "
      >
        <div class="my-10">
        <SkillDetails/>
      </div>
    </div> -->
    <SkillDetails/>


     
  </div>
    
</template>

<script setup>
//page components
import DesktopSkillPage from './Desktop/SkillsPage.vue'
import MobileSkillPage from './Mobile/SkillsPage.vue'
import SkillDetails from './Desktop/SkillsDetails.vue'


//primevue


//
import cv from '../assets/CV.jpg'
const downloadcv = () => {
    const link = document.createElement('a');
    link.href = cv
    link.download = 'PyaeSonePhyo_CV.jpg'
    document.body.appendChild(link); // Append the link to the DOM
    link.click();
    document.body.removeChild(link);
}

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
