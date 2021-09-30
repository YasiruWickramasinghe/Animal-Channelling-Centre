<template>
  <div>
    <div class="container">
      <div class="row">
        <ChHeader title="Channelling Details" />
        <form>
          <div class="row">
            <div class="row ">
              <label class="form-label text-start fs-5">
                <b>Venue Details</b>
              </label>
              <hr />
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 p-2">
              <label class="form-label text-start">
                <b>Veterinarian Name :</b>
              </label>
            </div>
            <div class="col-md-6 p-2">
              <label class="form-label text-start">
                <b>{{ cslot.firstname }} {{ cslot.lastname }}</b>
              </label>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 p-2">
              <label class="form-label text-start">
                <b>Date :</b>
              </label>
            </div>
            <div class="col-md-6 p-2">
              <label class="form-label text-start">
                <b>{{ cslot.date }}</b>
              </label>
            </div>
          </div>
          <!-- <div class="row">
                <div class="col-md-6 p-2">
                  <label  class="form-label text-start">
                    <b>Day :</b>
                  </label>
                </div>
                <div class="col-md-6 p-2">
                   <label  class="form-label text-start">
                    <b>{{day}}</b>
                  </label>
                </div>
              </div> -->
          <div class="row">
            <div class="col-md-6 p-2">
              <label class="form-label text-start">
                <b>Time :</b>
              </label>
            </div>
            <div class="col-md-6 p-2">
              <label class="form-label text-start">
                <b>{{ cslot.time }}</b>
              </label>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 p-2">
              <label class="form-label text-start">
                <b>Room :</b>
              </label>
            </div>
            <div class="col-md-6 p-2">
              <label class="form-label text-start">
                <b>{{ cslot.roomno }}</b>
              </label>
            </div>
          </div>
          <div class="row">
            <div class="row ">
              <label class="form-label text-start fs-5">
                <b>Charges</b>
              </label>
              <hr />
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 p-2">
              <label class="form-label text-start">
                <b>Hospital Charge :</b>
              </label>
            </div>
            <div class="col-md-6 p-2">
              <label class="form-label text-start">
                <b>{{ cslot.hcharge }}</b>
              </label>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 p-2">
              <label class="form-label text-start">
                <b>Doctor Charge :</b>
              </label>
            </div>
            <div class="col-md-6 p-2">
              <label class="form-label text-start">
                <b>{{ cslot.vcharge }}</b>
              </label>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-md-6 p-2">
              <label class="form-label text-start text-danger">
                <b>Total Charge :</b>
              </label>
            </div>
            <div class="col-md-6 p-2">
              <label class="form-label text-start text-danger">
                <b>{{ total }}</b>
              </label>
            </div>
          </div>
          <hr />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ChHeader from "../../components/Channel/Ch_Header.vue";

export default {
  name: "ChAppSlot",

  components: {
    ChHeader,
  },
  props: {
    id: String,
  },
  data() {
    return {
      cslot: {},
    };
  },
  created() {
    let apiURL = `http://localhost:5000/cslot/${this.id}`;
    axios.get(apiURL).then((res) => {
      this.cslot = res.data.cslot;
      // console.log(this.cslot);
    });
  },
  computed: {
    total: function() {
      return parseInt(this.cslot.hcharge) + parseInt(this.cslot.vcharge);
    },
  },
};
</script>

<style></style>
