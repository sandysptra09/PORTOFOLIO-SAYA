<script setup>
import 'flowbite/dist/flowbite';

import NavbarComponent from './components/NavbarComponent.vue';
import HeroSectionComponent from './components/HeroSectionComponent.vue'
import AboutmeComponent from './components/AboutmeComponent.vue'
import RatingComponent from './components/RatingComponent.vue'
import GalleriComponent from './components/GalleriComponent.vue'
import ContactComponent from './components/ContactComponent.vue'
import AlertComponent from './components/AlertComponent.vue';
import FooterComponent from './components/FooterComponent.vue'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>

    <NavbarComponent></NavbarComponent>
    <HeroSectionComponent></HeroSectionComponent>
    <div class="bg-yellow-100">
      <AboutmeComponent></AboutmeComponent>
    </div>
    <RatingComponent></RatingComponent>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <GalleriComponent></GalleriComponent>
    <ContactComponent></ContactComponent>
    <AlertComponent></AlertComponent>

    <FooterComponent></FooterComponent>
  </div>
</template>

<style scoped>

</style>
