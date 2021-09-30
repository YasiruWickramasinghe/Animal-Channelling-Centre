<template>
  <div>
    <div class="container">
      <div class="row">
        <ChHeader title="Update Channel Slot" />
        <form @submit.prevent="handleSubmitForm">
          <div class="row">
            <div class="row ">
              <label class="form-label text-start fs-5">
                <b>Veterinarian Details</b>
              </label>
              <hr />
            </div>
            <div class="col-md-4 p-2">
              <label class="form-label text-start" required>
                <b>First Name :</b>
              </label>
            </div>
            <div class="col-md-7 p-2">
              <input
                type="text"
                class="form-control"
                id="example"
                v-model="cslot.firstname"
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 p-2">
              <label class="form-label text-start">
                <b>Last Name :</b>
              </label>
            </div>
            <div class="col-md-7 p-2">
              <input
                type="text"
                class="form-control"
                id="example"
                v-model="cslot.lastname"
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 p-2">
              <label class="form-label text-start">
                <b>Email :</b>
              </label>
            </div>
            <div class="col-md-7 p-2">
              <input
                type="text"
                class="form-control"
                id="example"
                v-model="cslot.email"
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 p-2">
              <label class="form-label text-start">
                <b>Phone :</b>
              </label>
            </div>
            <div class="col-md-7 p-2">
              <input
                type="text"
                class="form-control"
                id="example"
                v-model="cslot.phone"
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 p-2">
              <label class="form-label text-start">
                <b>Charge :</b>
              </label>
            </div>
            <div class="col-md-7 p-2">
              <input
                type="text"
                class="form-control"
                id="example"
                v-model="cslot.hcharge"
                required
              />
            </div>
          </div>

          <div class="row">
            <label class="form-label text-start fs-5">
              <b>Hospital Details</b>
            </label>
            <hr />
          </div>

          <div class="row">
            <div class="col-md-4 p-2">
              <label class="form-label text-start">
                <b>Room No :</b>
              </label>
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
          <div class="row">
            <div class="col-md-4 p-2">
              <label class="form-label text-start">
                <b>Date :</b>
              </label>
            </div>
            <div class="col-md-7 p-2">
              <input
                type="date"
                class="form-control"
                id="example"
                v-model="cslot.date"
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 p-2">
              <label class="form-label text-start">
                <b>Time :</b>
              </label>
            </div>
            <div class="col-md-7 p-2">
              <input
                type="text"
                class="form-control"
                id="example"
                v-model="cslot.time"
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 p-2">
              <label class="form-label text-start">
                <b>Charge :</b>
              </label>
            </div>
            <div class="col-md-7 p-2">
              <input
                type="text"
                class="form-control"
                id="example"
                v-model="cslot.vcharge"
                required
              />
            </div>
          </div>
              <div class="form-group">
                <button class="btn btn-success btn-block">Update</button>
              </div>
              <!-- <button type="button" class="btn btn-danger p-2 m-2">
                Cancel
              </button> -->

        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ChHeader from "../../components/Channel/Ch_Header.vue";

export default {
  name: "ChUpdateForm",
  components: {
    ChHeader,
  },

   props: {
    id: String,
  },
  data() {
    return {
      cslot: {

            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            hcharge: "",
            roomno: "",
            date: "",
            time: "",
            vcharge: "",
      },

    };
  },
  created() {
    let apiURL = `http://localhost:5000/cslot/${this.id}`;
    axios.get(apiURL).then((res) => {
      this.cslot = res.data.cslot;
      // console.log(this.cslot);
    });
  },

    methods: {
    handleSubmitForm() {
      let apiURL = `http://localhost:5000/cslot/update/${this.id}`;

      console.log(apiURL);
      console.log(this.cslot);

    this.$swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Update Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })

      axios
        .put(apiURL, this.cslot)
        .then(() => {
          this.$router.push("/ch_manageslot");
          this.cslot = {
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            hcharge: "",
            roomno: "",
            date: "",
            time: "",
            vcharge: "",
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
