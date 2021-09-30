<template>
  <div>
    <div class="container">
      <div class="row">
        <ChHeader title="Add Channelling Slot" />
        <form @submit.prevent="handleSubmitForm">
          <div class="row">
            <label class="text-start fs-5"><b>Veterinarian Details</b></label>
            <hr />
          </div>
          <div class="form-group row">
            <div class="col-md-4 p-2">
              <label><b>First Name :</b></label>
            </div>
            <div class="col-md-7 p-2">
              <input
                type="text"
                placeholder="Enter First Name"
                class="form-control"
                v-model="cslot.firstname"
                required
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-md-4 p-2">
              <label><b>Last Name :</b></label>
            </div>
            <div class="col-md-7 p-2">
              <input
                type="text"
                placeholder="Enter Last Name"
                class="form-control"
                v-model="cslot.lastname"
                required
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-md-4 p-2">
              <label><b>Email :</b></label>
            </div>
            <div class="col-md-7 p-2">
              <input
                type="email"
                placeholder="Enter Email"
                class="form-control"
                v-model="cslot.email"
                required
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-md-4 p-2">
              <label><b>Phone :</b></label>
            </div>
            <div class="col-md-7 p-2">
              <input
                type="text"
                placeholder="Enter Phone Number"
                class="form-control"
                v-model="cslot.phone"
                required
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-md-4 p-2">
              <label><b>Charge :</b></label>
            </div>
            <div class="col-md-7 p-2">
              <input
                type="text"
                placeholder="Enter Charge"
                class="form-control"
                v-model="cslot.vcharge"
                required
              />
            </div>
          </div>
          <div class="row">
            <label class="text-start fs-5"><b>Hospital Details</b></label>
            <hr />
          </div>
          <div class="form-group row">
            <div class="col-md-4 p-2">
              <label><b>Room No :</b></label>
            </div>
            <div class="col-md-7 p-2">
              <select class="form-select" v-model="cslot.roomno">
                <option value="" hidden>Select</option>
                <option value="Room 01">Room 01</option>
                <option value="Room 02">Room 02</option>
                <option value="Room 03">Room 03</option>
                <option value="Room 04">Room 04</option>
                <option value="Room 05">Room 05</option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-md-4 p-2">
              <label><b>Date :</b></label>
            </div>
            <div class="col-md-7 p-2">
              <input
                type="date"
                placeholder="Enter Date"
                class="form-control"
                v-model="cslot.date"
                required
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-md-4 p-2">
              <label><b>Time :</b></label>
            </div>
            <div class="col-md-7 p-2">
              <input
                type="text"
                placeholder="Enter Time"
                class="form-control"
                v-model="cslot.time"
                required
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-md-4 p-2">
              <label><b>Charge :</b></label>
            </div>
            <div class="col-md-7 p-2">
              <input
                type="text"
                placeholder="Enter Charge"
                class="form-control"
                v-model="cslot.hcharge"
                required
              />
            </div>
          </div>

          <div class="form-group">
            <button class="btn btn-success btn-block">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ChHeader from "../../components/Channel/Ch_Header.vue";

export default {
  name: "ChSlotForm",
  components: {
    ChHeader,
  },
  data() {
    return {
      cslot: {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        vcharge: "",
        roomno: "",
        date: "",
        time: "",
        hcharge: "",
      },
    };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "http://localhost:5000/cslot/create";

      this.$swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your Slot has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })



      axios.post(apiURL, this.cslot)
        .then(() => {
          this.$router.push("/ch_manageslot");
          this.cslot = {
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            vcharge: "",
            roomno: "",
            date: "",
            time: "",
            hcharge: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
