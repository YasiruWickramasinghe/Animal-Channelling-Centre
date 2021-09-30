<template>
  <div>
    <pageheader/>
    <ChHeader title="New Channel Slot" />
    <div>
      <div class="row">
        <div class="col-md-4">
          <ChSideBar />
        </div>
        <div
          class="col-md-6 container center card rounded m-5 p-2 shadow-lg border border-primary form-card"
        >
          <ChSlotForm />
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
import ChSideBar from "../../components/Channel/ChSideBar.vue";
import ChSlotForm from "../../components/Channel/ChNewChannel.vue";

export default {
  name: "ChNewChannelform",
  components: {
    ChHeader,
    ChSideBar,
    ChSlotForm,
    pageheader,
    pagefooter,
  },
};
</script>

<style></style>
