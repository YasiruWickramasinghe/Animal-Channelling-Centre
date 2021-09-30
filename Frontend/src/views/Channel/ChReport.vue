<template>
  <div>
    <pageheader/>
    <ChHeader title="Channel Report" />
    <div class="row">
      <div class="col-md-2">
        <ChSideBar />
      </div>
      <div
        class="col-md-10"
      >
        <ChReportForm />
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
import ChReportForm from "../../components/Channel/ChReportForm.vue";

export default {
  name: "ChReport",

  components: {
    ChHeader,
    ChSideBar,
    ChReportForm,
    pageheader,
    pagefooter,
  },
};
</script>

<style></style>
