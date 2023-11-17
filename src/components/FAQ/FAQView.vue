<template>
    <div class="mt-32 mb-20 lg:mb-0 lg:mt-[15%]">
        <div class="text-center ">
            <h2 class="text-slate-700 text-2xl font-semibold">Frequently Asked Questions</h2>
            <p class="text-slate-500 text-sm mt-2 w-[77%] lg:w-[33%] mx-auto leading-5">Here is some of our FAQs. If you have any other questions you'd like answered please feel free to mail us.</p>
        </div> 
    </div>

    <div class="w-[85%] lg:w-[33%] mx-auto mt-10">
        <hr class="w-full mx-auto h-[1px] bg-slate-300">
        <div v-for="faq in questions" :key="faq">
            <QuestionBox :faq="faq">
            </QuestionBox>
            <hr class="w-full mx-auto h-[1px] bg-slate-300">
        </div>
    </div>

    <div class="grid place-items-center mt-8">
        <BlueBtn>
            <template #blueBtn>
                More Info
            </template>
        </BlueBtn>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import BlueBtn from '../buttons/BlueBtn.vue';
import QuestionBox from './QuestionBox.vue';

const questions = ref([])
import getFAQ from "../../composible/getFAQ";

onMounted( async () => {
    questions.value = await getFAQ();
})


</script>

<style>

</style>