<template>
     <div
          class="
            hero_section 
            flex flex-col-reverse mt-14 items-center 
            lg:gap-32 lg:flex-row
          ">
          <div
            class="
            mt-10 text-center
            lg:w-[45%] lg:ml-[15%] lg:mt-0"  >
            <h1
              class="
              leading-normal tracking-normal font-semibold text-slate-700 
              text-2xl mb-2 
              lg:text-left lg:text-3xl lg:leading-[40px] lg:mb-6">
              A Simple Bookmark Manager
            </h1>
            <p
              class="text-center text-sm leading-6 mb-6 px-5 text-slate-500
              lg:text-left lg:text-[12px] lg:px-0">
              A clean and simple interface to organize your favourite websites. Open
              a new browser tab and see your sites load instantly. Try it for free.
            </p>

            <!-- buttons -->
            <div
              class="font-bold flex items-center justify-around mt-10 px-2
              lg:px-0 lg:justify-normal lg:mt-0 lg:gap-4">
              <a href="#">
                <button
                  class="border text-white text-[11px] px-5 py-4
                  lg:text-[11px] lg:py-3 bg-indigo-500 hover:text-indigo-500 hover:border-indigo-500 rounded-md">
                  Get it on Chrome
                </button>
              </a>

              <a href="#">
                <button
                  class="border border-transparent text-[11px]  px-5 py-4
                  lg:text-[11px] lg:py-3 text-slate-600 hover:border hover:text-slate-600 hover:border-slate-600 shadow-lg rounded-md">
                  Get it on Firefox
                </button>
              </a>
            </div>
          </div>

          <div class="relative lg:w-[65%] mx-auto">
            <img src="../assets/images/illustration-hero.svg" alt="" class="lg:pr-10" />
            <div
              class="bg-indigo-500 absolute z-[-2] md:hidden
              w-[250px] h-[160px] rounded-l-[150px] top-[70px] right-0
              lg:block lg:w-[340px] lg:h-[230px] lg:top-[100px] lg:right-0"></div>
          </div>
        </div>
</template>

<script setup>

</script>

<style scoped>
.hero_section button:hover {
    background-color: transparent;
} 
</style>

