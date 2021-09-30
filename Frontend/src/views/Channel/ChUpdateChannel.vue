<template>
  <div>
    <pageheader/>
    <ChHeader title="Update Channel Slot" />
    <div class="row">
      <div class="col-md-4">
        <ChSideBar />
      </div>
      <div
        class="col-md-6 container center card rounded m-5 p-2 shadow-lg border border-primary form-card"
      >
        <ChUpdateForm :id="id" />
      </div>
    </div>
    <pagefooter/>
  </div>
</template>

<script>
import pageheader from"../../components/Header/Header.Component.vue";
import pagefooter from "../../components/Footer/Footer.Component.vue"
import ChHeader from "../../components/Channel/Ch_Header.vue";
import ChSideBar from "../../components/Channel/ChSideBar.vue";
import ChUpdateForm from "../../components/Channel/ChUpdateSlotForm.vue";

export default {
  name: "ChUpdateSlot",

  components: {
    ChHeader,
    ChSideBar,
    ChUpdateForm,
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
