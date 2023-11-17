<template>
  <div class="flex flex-col lg:justify-center lg:items-center gap-3 pt-10 pb-5 w-72 lg:w-50 rounded-lg shadow-xl">
    <div class="px-10 flex flex-col justify-center items-center">
        <slot></slot>
        <h3 id="extention_title" class="font-semibold text-slate-700 mt-8">
            <slot name="extension_title"></slot>
        </h3>
        <p id="extension_version" class="text-sm text-slate-400">
            <span>Minimum Version</span><slot name="extension_version"></slot>
        </p>
    </div>

    <span class="text-slate-400">. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . </span>

    <BlueBtn>
        <template #blueBtn>
            <span class="px-5 text-[12px]">Add & Install Extension</span>
        </template>
    </BlueBtn>
  </div>
</template>

<script setup>
import BlueBtn from '../BlueBtn.vue';
</script>

<style>

</style>