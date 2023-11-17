<template>
  <div class="flex justify-between items-center py-4">
    <p id="question" class="text-slate-700 text-sm lg:text-md" :class="{'text-orange-300': showAnswer}">
        <!-- <slot name="question"></slot> -->
        {{ props.faq.question }}
    </p>

    <div v-if="!showAnswer">
        <img src="../../assets/images/icon-arrow.svg" alt="" @click="toggleBtn">
    </div>
    <div v-if="showAnswer">
        <img src="../../assets/images/icon-arrow.svg" alt="" class="rotate-180" @click="toggleBtn">
    </div>
  </div>

  <p v-if="showAnswer" class="text-slate-500 text-sm mb-5">
    {{  props.faq.answer }}
  </p>
</template>

<script setup>
import { ref } from "vue"
const props = defineProps(['faq'])
console.log(props.faq)

const showAnswer = ref(false)
const toggleBtn = () => {
    showAnswer.value = !showAnswer.value
}


</script>

<style>

</style>