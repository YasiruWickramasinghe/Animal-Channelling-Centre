<template>
  <div>
    <HeaderComponent />
    <CatCreateComponent />
    <FooterComponent />
  </div>
</template>
<script>
import FooterComponent from "../../../components/Footer/Footer.Component.vue";
import HeaderComponent from "../../../components/Header/Header.Component.vue";
import CatCreateComponent from "../../../components/Pet/Cat Management/Cat Create Component.vue";
export default {
  components: { HeaderComponent, CatCreateComponent, FooterComponent },
  name: "catcreate",
};
</script>
<style>
</style>