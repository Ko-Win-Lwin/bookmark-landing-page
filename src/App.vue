<template>
  <HeaderBar></HeaderBar>
  
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderBar from './components/navigation/HeaderBar.vue';
</script>