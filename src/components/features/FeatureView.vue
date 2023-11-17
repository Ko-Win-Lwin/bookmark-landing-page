<template>
    <div class="my-20 lg:my-[8%]">
        <div class="text-center ">
            <h2 class="text-slate-700 text-2xl font-semibold">Features</h2>
            <p class="text-slate-500 text-sm mt-2 w-[77%] lg:w-[30%] mx-auto leading-5">Our aim is to make it esay and quick for you to accept your favourite website. Your bookmark sync between your devices so you can access them on the go.</p>
        </div>

        <div class="w-[80%] lg:w-[60%] mt-10 lg:mt-5 flex-row lg:flex items-center mx-auto text-sm text-center">
            <hr class="lg:hidden block w-full mx-auto h-[1px] bg-slate-200">
            <div class="border-b-2 w-[60%] lg:w-[30%] mx-auto hover:text-orange-400" 
                :class="{'border-orange-400 text-slate-800': isSimpleBookingBtn, 'border-slate-50 text-slate-500': !isSimpleBookingBtn}">
                <button @click="chooseTab('simpleBookingBtn')" class="py-4">Simple Bookmarking</button>
            </div>
            <hr class="lg:hidden block w-full mx-auto h-[1px] bg-slate-200">



            <div class="border-b-2 w-[60%] lg:w-[30%] mx-auto hover:text-orange-400" 
                :class="{ 'border-orange-400 text-slate-800': isSpeedySearchingBtn, 'border-slate-50 text-slate-500': !isSpeedySearchingBtn }">
                <button  @click="chooseTab('speedySearchingBtn')" class="py-4">Speedy Searching</button>
            </div>
            <hr class="lg:hidden block w-full mx-auto h-[1px] bg-slate-300">

            <div class="border-b-2 w-[60%] lg:w-[30%] mx-auto hover:text-orange-400" 
                :class="{ 'border-orange-400 text-slate-800': isEasySharingBtn, 'border-slate-50 text-slate-500': !isEasySharingBtn }">
                <button  @click="chooseTab('easySharingBtn')" class="py-4">Easy Sharing</button>
            </div>
            <hr class="lg:hidden block w-full mx-auto h-[1px] bg-slate-300">
        </div>
        <hr class="hidden lg:block w-[58%] mx-auto h-[1px] bg-slate-300">

        

        

        <div v-if="isSimpleBookingBtn">
            <div class="flex-row lg:flex justify-between mt-10 lg:mt-[5%] mx-auto relative">
                <div>
                    <img src="../../assets/images/illustration-features-tab-1.svg" alt="" class="w-[80%] mx-auto lg:w-[60%] lg:ml-28" />
                    <FeatureBackground></FeatureBackground>
                </div>
                <div class="w-[80%] mx-auto lg:w-[40%] mt-16 lg:mt-10">
                    <FeatureContent>
                        <template #title>
                            Bookmark in one click
                        </template>

                        
                        <template #content>
                             Organize your bookmark however you like.Our simple drap-and-drop interface gives you complete control over how you manage your favourite sites.
                        </template>
                    </FeatureContent>
                </div>
            </div>
        </div>


        <div v-if="isSpeedySearchingBtn" >
            <div class="flex-row lg:flex justify-between mt-10 lg:mt-[5%] mx-auto relative">
                <div>
                    <img src="../../assets/images/illustration-features-tab-2.svg" alt="" class="w-[70%] ml-16 mx-auto lg:w-[60%] lg:ml-40" />
                    <FeatureBackground class=""></FeatureBackground>
                </div>
                <div class="w-[80%] mx-auto lg:w-[40%] mt-10">
                    <FeatureContent>
                        <template #title>
                            Intelligent Search
                        </template>

                        
                        <template #content>
                            Our powerful search features will help you find saved sites in no time at all.No need to trawl through all of your bookmakrs.
                        </template>
                    </FeatureContent>
                </div>
            </div>
        </div>


        <div v-if="isEasySharingBtn" >
            <div class="flex-row lg:flex justify-between mt-10 lg:mt-[5%] mx-auto relative">
                <div>
                    <img src="../../assets/images/illustration-features-tab-3.svg" alt="" class="w-[70%] ml-16 lg:w-[60%] lg:ml-40" />
                    <FeatureBackground></FeatureBackground>
                </div>
                <div class="w-[80%] mx-auto lg:w-[40%] mt-10">
                    <FeatureContent>
                        <template #title>
                            Share your bookmarks
                        </template>

                        
                        <template #content>
                            Easily share your bookmarks and collections with other.Create a shareable link that you can send at the click of a button.
                        </template>
                    </FeatureContent>
                </div>
            </div>
        </div>
    </div>


</template>

<script setup>

import { ref } from "vue"
import FeatureBackground from "./FeatureBackground.vue";
import FeatureContent from "./FeatureContent.vue";



const isSimpleBookingBtn = ref(true);
const isSpeedySearchingBtn = ref(false);
const isEasySharingBtn = ref(false);

const chooseTab = (btn) => {
    btn === "simpleBookingBtn" ? isSimpleBookingBtn.value = true : isSimpleBookingBtn.value = false;
    btn === "speedySearchingBtn" ? isSpeedySearchingBtn.value = true : isSpeedySearchingBtn.value = false;
    btn === "easySharingBtn" ? isEasySharingBtn.value = true : isEasySharingBtn.value = false;
}

</script>

<style>

</style>