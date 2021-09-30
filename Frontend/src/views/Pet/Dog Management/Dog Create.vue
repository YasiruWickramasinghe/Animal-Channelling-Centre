<template>
  <div>
    <HeaderComponent />
    <DogCreateComponent />
    <FooterComponent />
  </div>
</template>
<script>
import FooterComponent from "../../../components/Footer/Footer.Component.vue";
import HeaderComponent from "../../../components/Header/Header.Component.vue";
import DogCreateComponent from "../../../components/Pet/Dog Manageent/Dog Create Component.vue";
export default {
  components: { HeaderComponent, FooterComponent, DogCreateComponent },
  name: "dogcreate",
};
</script>
<style>
</style>