<template>
  <div>
    <HeaderComponent />
    <Daycare />
    <FooterComponent />
  </div>
</template>
<script>
import Daycare from "../../components/Daycare/Daycare-registration.vue";
import FooterComponent from "../../components/Footer/Footer.Component.vue";
import HeaderComponent from "../../components/Header/Header.Component.vue";
export default {
  name: "Daycare-reg",
  components: {
    HeaderComponent,
    Daycare,
    FooterComponent,
  },
};
</script>
