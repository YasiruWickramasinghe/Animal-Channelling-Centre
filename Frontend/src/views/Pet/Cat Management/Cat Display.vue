<template>
  <div>
    <HeaderComponent />
    <CatDisplayComponent />
    <FooterComponent />
  </div>
</template>
<script>
import FooterComponent from "../../../components/Footer/Footer.Component.vue";
import HeaderComponent from "../../../components/Header/Header.Component.vue";
import CatDisplayComponent from "../../../components/Pet/Cat Management/Cat Display Component.vue";
export default {
  components: { HeaderComponent, CatDisplayComponent, FooterComponent },
  name: "catdisplay",
};
</script>
<style>
</style>