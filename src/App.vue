<template>
  <div>
    <Header></Header>
    <RouterView class="min-h-screen"></RouterView>
    <Footer></Footer>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';


</script>

<style scoped>

</style>
