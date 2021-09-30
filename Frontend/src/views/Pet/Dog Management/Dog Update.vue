<template>
  <div>
    <HeaderComponent />
    <DogUpdateComponent />
    <FooterComponent />
  </div>
</template>
<script>
import FooterComponent from "../../../components/Footer/Footer.Component.vue";
import HeaderComponent from "../../../components/Header/Header.Component.vue";
import DogUpdateComponent from "../../../components/Pet/Dog Manageent/Dog Update Component.vue";
export default {
  components: { HeaderComponent, FooterComponent, DogUpdateComponent },
  name: "dogupdate",
};
</script>
<style>
</style>