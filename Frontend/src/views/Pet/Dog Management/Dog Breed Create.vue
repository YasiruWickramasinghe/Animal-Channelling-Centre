<template>
  <div>
    <HeaderComponent />
    <DogBreedCreateComponent />
    <FooterComponent />
  </div>
</template>
<script>
import FooterComponent from "../../../components/Footer/Footer.Component.vue";
import HeaderComponent from "../../../components/Header/Header.Component.vue";
import DogBreedCreateComponent from "../../../components/Pet/Dog Manageent/Dog Breed Create Component.vue";
export default {
  components: { HeaderComponent, FooterComponent, DogBreedCreateComponent },
  name: "dogbreedcreate",
};
</script>
<style>
</style>