<template>
  <div>
    <HeaderComponent />
    <DaycareConfirm />
    <FooterComponent />
  </div>
</template>
<script>
import DaycareConfirm from "../../components/Daycare/Daycare-confirm.vue";
import FooterComponent from "../../components/Footer/Footer.Component.vue";
import HeaderComponent from "../../components/Header/Header.Component.vue";
export default {
  name: "Daycare-confirm",
  components: {
    HeaderComponent,
    FooterComponent,
    DaycareConfirm,
  },
};
</script>
