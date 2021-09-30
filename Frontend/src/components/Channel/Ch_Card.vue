<template>
  <div>
    <b-card-group>
      <b-card
        v-for="cslot in Cslots"
        :key="cslot._id"
        v-bind:title="'Dr ' + cslot.firstname"
        v-bind:img-src="cslot.image"
        img-alt="Image"
        img-top
        img-height="150"
        tag="article"
        style="max-width: 15rem; min-width: 15rem; box-shadow: 1px 4px 8px 2px rgba(0,0,0,0.5);"
        class="mb-3 m-3"
      >
        <hr />
        <b-card-text>
          {{ cslot.time }}
        </b-card-text>
        <router-link
          :to="{ name: 'ChApp', params: { id: cslot._id } }"
          class="btn btn-primary"
          v-b-popover.hover="{ variant: 'info', content: 'Click to Here' }"
        >
          Channel
        </router-link>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ChCard",

  data() {
    return {
      Cslots: [],
    };
  },

  created() {
    let apiURL = "http://localhost:5000/cslot/";
    axios
      .get(apiURL)
      .then((res) => {
        this.Cslots = res.data.data;
        console.log(this.Cslots);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>
