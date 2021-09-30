<template>
  <div>
    <HeaderComponent />
    <PetDisplayComponent />
    <FooterComponent />
  </div>
</template>
<script>
import FooterComponent from "../../../components/Footer/Footer.Component.vue";
import HeaderComponent from "../../../components/Header/Header.Component.vue";
import PetDisplayComponent from "../../../components/Pet/Pet Management/Pet Display Component.vue";
export default {
  components: {
    HeaderComponent,
    FooterComponent,
    PetDisplayComponent,
  },
  name: "petdisplay",
};
</script>
<style>
</style>