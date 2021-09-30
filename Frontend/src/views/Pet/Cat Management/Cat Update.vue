<template>
  <div>
    <HeaderComponent />
    <CatUpdateComponent />
    <FooterComponent />
  </div>
</template>
<script>
import FooterComponent from "../../../components/Footer/Footer.Component.vue";
import HeaderComponent from "../../../components/Header/Header.Component.vue";
import CatUpdateComponent from "../../../components/Pet/Cat Management/Cat Update Component.vue";
export default {
  components: { HeaderComponent, CatUpdateComponent, FooterComponent },
  name: "catupdate",
};
</script>
<style>
</style>