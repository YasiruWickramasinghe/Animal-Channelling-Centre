<template>
  <div>
    <pageheader/>
    <ChHeader title="Available Channelling" />
    <div class="row">
      <div class="col-md-2">
        <ChSideBar />
      </div>
      <div class="col-md-9 center m-5 p-5 shadow-lg">
        <ChManageAva :id="id" />
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
import ChManageAva from "../../components/Channel/CHManageAvailable.vue";

export default {
  name: "ChAvaChannel",

  components: {
    ChHeader,
    ChSideBar,
    ChManageAva,
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
