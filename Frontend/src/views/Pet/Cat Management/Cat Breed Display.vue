<template>
  <div>
    <HeaderComponent />
    <CatBreedDisplayComponent />
    <FooterComponent />
  </div>
</template>
<script>
import FooterComponent from "../../../components/Footer/Footer.Component.vue";
import HeaderComponent from "../../../components/Header/Header.Component.vue";
import CatBreedDisplayComponent from "../../../components/Pet/Cat Management/Cat Breed Display Component.vue";
export default {
  components: { HeaderComponent, CatBreedDisplayComponent, FooterComponent },
  name: "catbreeddisplay",
};
</script>
<style>
</style>