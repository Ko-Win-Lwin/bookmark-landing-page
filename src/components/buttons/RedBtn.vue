<template>
    <div class="
        font-bold flex items-center justify-around px-2
        lg:px-0 lg:justify-normal lg:mt-0 lg:gap-4 ">
        <a href="#">
            <button id="redBtn"
                class="
             text-white text-[11px] px-5 py-4
            lg:text-[11px] lg:py-3 bg-red-500 hover:bg-red-400 rounded-md hover:bg-transparent">
                <slot name="redBtn"></slot>
            </button>
        </a>
    </div>
</template>

<script setup>
</script>