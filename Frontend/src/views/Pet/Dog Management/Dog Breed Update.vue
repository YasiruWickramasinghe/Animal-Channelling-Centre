<template>
  <div>
    <HeaderComponent />
    <DogBreedUpdateComponent />
    <FooterComponent />
  </div>
</template>
<script>
import FooterComponent from "../../../components/Footer/Footer.Component.vue";
import HeaderComponent from "../../../components/Header/Header.Component.vue";
import DogBreedUpdateComponent from "../../../components/Pet/Dog Manageent/Dog Breed Update Component.vue";
export default {
  components: { HeaderComponent, FooterComponent, DogBreedUpdateComponent },
  name: "dogbreedupdate",
};
</script>
<style>
</style>