<template>
    <div class="mt-20 lg:mt-[15%]">
        <div class="text-center ">
            <h2 class="text-slate-700 text-2xl font-semibold">Download the extension</h2>
            <p class="text-slate-500 text-sm mt-2 w-[77%] lg:w-[33%] mx-auto leading-5">We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
         </div> 
    </div>
    
    <div class="flex gap-10 items-center mx-auto justify-center">
        <ExtensionCard class="align-top">
            <img src="../../assets/images/logo-chrome.svg" alt="chrome-logo">
            <template #extension_title>
                Add to Chrome
            </template>

            <template #extension_version>
                62
            </template>
        </ExtensionCard>

        <ExtensionCard class="align-middle mt-20">
            <img src="../../assets/images/logo-firefox.svg" alt="firefox-logo">
            <template #extension_title>
                Add to Firefox
            </template>

            <template #extension_version>
                    55
            </template>
        </ExtensionCard>

        <ExtensionCard class="align-bottom mt-40">
            <img src="../../assets/images/logo-opera.svg" alt="opera-logo">
            <template #extension_title>
                Add to Opera
            </template>

            <template #extension_version>
                46
            </template>
        </ExtensionCard>
    </div>

    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</template>

<script setup>
import ExtensionCard from './ExtensionCard.vue';
</script>

<style>

</style>