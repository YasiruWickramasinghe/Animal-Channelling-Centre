<template>
  <div>
    <HeaderComponent />
    <CatBreedUpdateComponent />
    <FooterComponent />
  </div>
</template>
<script>
import FooterComponent from "../../../components/Footer/Footer.Component.vue";
import HeaderComponent from "../../../components/Header/Header.Component.vue";
import CatBreedUpdateComponent from "../../../components/Pet/Cat Management/Cat Breed Update Component.vue";
export default {
  components: { HeaderComponent, CatBreedUpdateComponent, FooterComponent },
  name: "catbreedupdate",
};
</script>
<style>
</style>