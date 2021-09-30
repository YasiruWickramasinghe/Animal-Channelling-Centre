<template>
  <div>
    <pageheader/>
    <ChHeader title="Appointment" />
    <div>
      <div class="row">
        <div
          class="col-md-6 container card rounded m-4  shadow-lg border border-primary form-card"
        >
          <ChAppointment :id="id" />
        </div>
        <div
          class="col-md-5 container card rounded m-4  shadow-lg border border-primary form-card"
        >
          <ChAppSlot :id="id" />
        </div>
      </div>
    </div>
    <pagefooter/>
  </div>
</template>

<script>

import pageheader from"../../components/Header/Header.Component.vue";
import pagefooter from "../../components/Footer/Footer.Component.vue"
import ChHeader from "../../components/Channel/Ch_Header.vue";
import ChAppointment from "../../components/Channel/ChAppointment.vue";
import ChAppSlot from "../../components/Channel/ChAppSlot.vue";



export default {
  name: "ChApp",
  components: {
    ChHeader,
    ChAppointment,
    ChAppSlot,
    pageheader,
    pagefooter,
  },

  data() {
    return {
      id: {},
    };
  },
  created() {
    this.id = this.$route.params.id;
  },
};
</script>

<style></style>
