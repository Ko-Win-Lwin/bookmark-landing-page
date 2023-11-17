<template>
    <div class="bg-indigo-500 py-16 mt-[10%] text-slate-50 ">
        <div class="text-center">
            <p class="uppercase text-sm lg:text-lg">35,000 + Already Joined</p>
            <p class="text-xl lg:text-3xl w-[90%] lg:w-[30%] mx-auto mt-10">Stay up-to-date with what we're doing</p>

            <form @submit.prevent="" class="mt-5 flex flex-col lg:flex justify-center items-center gap-5">
                <MailBox></MailBox>
                <RedBtn>
                    <template #redBtn>
                        Contact Us
                    </template>
                </RedBtn>
            </form>
        </div>
    </div>

    <div class="bg-indigo-950  backdrop-opacity-10 backdrop-invert bg-indigo-950/80">
        <FooterNav></FooterNav>
    </div>
</template>

<script setup>
import RedBtn from '../buttons/RedBtn.vue';
import MailBox from '../mailbox/MailBox.vue';
import FooterNav from './FooterNav.vue';
</script>

<style>

</style>