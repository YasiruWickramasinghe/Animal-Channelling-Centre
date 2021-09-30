<template>
  <div>
    <HeaderComponent />
    <DaycareReceipt />
    <FooterComponent />
  </div>
</template>
<script>
import DaycareReceipt from "../../components/Daycare/Daycare-receipt.vue";
import FooterComponent from "../../components/Footer/Footer.Component.vue";
import HeaderComponent from "../../components/Header/Header.Component.vue";
export default {
  name: "Daycare-receipt",
  components: {
    DaycareReceipt,
    HeaderComponent,
    FooterComponent,
  },
};
</script>
