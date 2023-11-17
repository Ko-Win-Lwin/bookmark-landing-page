<template>
        <h1
        class="
        leading-normal tracking-normal font-semibold text-slate-700
        text-xl text-center
        lg:text-left lg:text-xl lg:leading-[40px]" id="title">
            <slot name="title"></slot>
        </h1>
        
        <p
        class="
        text-center text-sm leading-6 mb-6 mt-3 text-slate-500
        lg:text-left lg:text-[12px] lg:px-0 lg:mr-40" id="content">
            <slot name="content"></slot>
        </p>

        <BlueBtn class="hidden lg:block">
            <template #blueBtn>
                More Info
            </template>
        </BlueBtn>
</template>

<script setup>
import BlueBtn from '../buttons/BlueBtn.vue';
</script>

<style>

</style>