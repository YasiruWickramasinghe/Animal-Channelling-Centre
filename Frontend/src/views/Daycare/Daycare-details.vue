<template>
  <div>
    <HeaderComponent />
    <DaycareDetails />
    <FooterComponent />
  </div>
</template>
<script>
import DaycareDetails from "../../components/Daycare/Daycare-details.vue";
import FooterComponent from "../../components/Footer/Footer.Component.vue";
import HeaderComponent from "../../components/Header/Header.Component.vue";
export default {
  name: "Daycare-reg",
  components: {
    DaycareDetails,
    HeaderComponent,
    FooterComponent,
  },
};
</script>
