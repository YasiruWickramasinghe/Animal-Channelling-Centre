<template>
  <div>
    <HeaderComponent />
    <CatBreedCreateComponent />
    <FooterComponent />
  </div>
</template>
<script>
import FooterComponent from "../../../components/Footer/Footer.Component.vue";
import HeaderComponent from "../../../components/Header/Header.Component.vue";
import CatBreedCreateComponent from "../../../components/Pet/Cat Management/Cat Breed Create Component.vue";
export default {
  components: { HeaderComponent, CatBreedCreateComponent, FooterComponent },
  name: "catbreedcreate",
};
</script>
<style>
</style>