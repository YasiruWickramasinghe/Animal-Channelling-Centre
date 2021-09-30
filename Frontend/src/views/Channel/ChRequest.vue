<template>
  <div>
    <pageheader/>
    <ChHeader title="Channelling Requests" />
    <div class="row">
      <div class="col-md-2">
        <ChSideBar />
      </div>
      <div class="col-md-9 center m-5 p-5 shadow-lg">
        <ChManageReq />
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
import ChManageReq from "../../components/Channel/CHManageRequest.vue";

export default {
  name: "ChChannelReq",

  components: {
    ChHeader,
    ChSideBar,
    ChManageReq,
    pageheader,
    pagefooter,
  },
};
</script>

<style></style>
