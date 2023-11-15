<template>
        <h1
        class="
        leading-normal tracking-normal font-semibold text-slate-700
        text-2xl
        lg:text-left lg:text-xl lg:leading-[40px]" id="title">
            <slot name="title"></slot>
        </h1>
        
        <p
        class="
        text-center text-sm leading-6 mb-6 px-5 text-slate-500
        lg:text-left lg:text-[12px] lg:px-0 lg:mr-40" id="content">
            <slot name="content"></slot>
        </p>

        <FeatureBtn>
            <template #featureBtn>
                More Info
            </template>
        </FeatureBtn>
</template>

<script setup>
import FeatureBtn from './FeatureBtn.vue';
</script>

<style>

</style>