<template>
  <div>
    <HeaderComponent />
    <DogBreedDisplayComponent />
    <FooterComponent />
  </div>
</template>
<script>
import FooterComponent from "../../../components/Footer/Footer.Component.vue";
import HeaderComponent from "../../../components/Header/Header.Component.vue";
import DogBreedDisplayComponent from "../../../components/Pet/Dog Manageent/Dog Breed Display Component.vue";
export default {
  components: { HeaderComponent, FooterComponent, DogBreedDisplayComponent },
  name: "dogbreeddisplay",
};
</script>
<style>
</style>