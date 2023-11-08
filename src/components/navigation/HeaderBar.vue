<template>
    <nav
        class="flex justify-between lg:justify-around items-center px-5 lg:px-10 lg:pr-12 py-10">
            <!-- logo -->
        <div class="lg:mr-14">
            <img
                src="../../assets/images/logo-bookmark.svg"
                alt="logo_bookmark"
                class="w-[150px] lg:w-[80%] cursor-pointer" 
            />
        </div>

        <!-- nav_links -->
        <div
            class="hidden 
            md:flex md:justify-around md:items-center
            lg:flex lg:justify-around lg:items-center gap-8 font-bold">
            <a href="#" class="">FEATURES</a>

            <a href="#" class="">PRICING</a>

            <a href="#" class="">CONTACT</a>

            <button
                class="bg-orange-600 border-2 border-orange-600 hover:text-slate-500">
                LOGIN
            </button>
        </div>

        <!-- menu icon -->
        <div class="md:hidden lg:hidden" @click="toggleBackdrop" v-if="!isShowBackdrop">
            <img
                src="../../assets/images/icon-hamburger.svg"
                alt="manu_icon"
                class="w-[20px] lg:w-full cursor-pointer" 
            />
        </div>
    </nav>

    
    <Teleport to="body">
        <div v-if="isShowBackdrop" class="backdrop">
            <ActiveNav @hideBackdrop="toggleBackdrop"></ActiveNav>
        </div>
    </Teleport>
</template>

<script setup>
import { ref } from "vue";
import ActiveNav from "./ActiveNav.vue";

const isShowBackdrop = ref(false);

const toggleBackdrop = () => {
    isShowBackdrop.value = !isShowBackdrop.value
    document.querySelector("body").classList.toggle("overflow-hidden");
}

</script>






<style scoped>
button {
    font-size: 10px;
    border-radius: 4px;
    color: white;
    letter-spacing: 0.8px;
}


/* navigation bar default style*/
nav a {
    color: #59615A;
    letter-spacing: 1.3px;
    font-size: 10px;
}

nav a:hover {
    color: #E2410E;
}

nav button {
    padding: 6px 22px;
}

nav button:hover {
    background-color: transparent;
}
</style>


