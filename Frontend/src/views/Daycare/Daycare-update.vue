<template>
  <div>
    <HeaderComponent />
    <DaycareUpdate />
    <FooterComponent />
  </div>
</template>
<script>
import DaycareUpdate from "../../components/Daycare/Daycare-update.vue";
import FooterComponent from "../../components/Footer/Footer.Component.vue";
import HeaderComponent from "../../components/Header/Header.Component.vue";
export default {
  name: "Daycare-reg",
  components: {
    DaycareUpdate,
    HeaderComponent,
    FooterComponent,
  },
};
</script>
