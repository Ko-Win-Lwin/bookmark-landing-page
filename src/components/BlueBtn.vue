<template>
    <div class="
        font-bold flex items-center justify-around mt-10 px-2
        lg:px-0 lg:justify-normal lg:mt-0 lg:gap-4">
        <a href="#">
            <button id="blueBtn"
                class="
            border text-white text-[11px] px-5 py-4
            lg:text-[11px] lg:py-3 bg-indigo-500 hover:text-indigo-500 hover:border-indigo-500 rounded-md hover:bg-transparent">
                <slot name="blueBtn"></slot>
            </button>
        </a>
    </div>
</template>

<script setup>
</script>