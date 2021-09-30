<template>
  <div>
    <HeaderComponent />
    <DaycarePacks />
    <FooterComponent />
  </div>
</template>
<script>
import DaycarePacks from "../../components/Daycare/Daycare-packages.vue";
import FooterComponent from "../../components/Footer/Footer.Component.vue";
import HeaderComponent from "../../components/Header/Header.Component.vue";
export default {
  name: "Daycare-reg",
  components: {
    DaycarePacks,
    HeaderComponent,
    FooterComponent,
  },
};
</script>
