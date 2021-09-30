<template>
  <div>
    <HeaderComponent />
    <DogDisplayComponent />
    <FooterComponent />
  </div>
</template>
<script>
import FooterComponent from "../../../components/Footer/Footer.Component.vue";
import HeaderComponent from "../../../components/Header/Header.Component.vue";
import DogDisplayComponent from "../../../components/Pet/Dog Manageent/Dog Display Component.vue";
export default {
  components: { HeaderComponent, FooterComponent, DogDisplayComponent },
  name: "dogdisplay",
};
</script>
<style>
</style>