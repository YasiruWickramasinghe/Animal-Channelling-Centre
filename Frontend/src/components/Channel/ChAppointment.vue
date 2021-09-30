<template>
  <div>
    <div class="container">
      <div class="row">
        <ChHeader title="Channel Your Pet" />
        <form @submit.prevent="handleSubmitForm">
          <div class="row">
            <label class="text-start fs-5"><b>Owner Details</b></label>
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
                v-model="capp.firstname"
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
                v-model="capp.lastname"
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
                v-model="capp.email"
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
                v-model="capp.phone"
                required
              />
            </div>
          </div>
          <div class="row">
            <label class="text-start fs-5"><b>Pet Details</b></label>
            <hr />
          </div>
          <div class="form-group row">
            <div class="col-md-4 p-2">
              <label><b>Type :</b></label>
            </div>
            <div class="col-md-7 p-2">
              <select class="form-select" v-model="capp.ptype">
                <option value="" hidden>Select</option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-md-4 p-2">
              <label><b>Name :</b></label>
            </div>
            <div class="col-md-7 p-2">
              <input
                type="text"
                placeholder="Enter Pet Name"
                class="form-control"
                v-model="capp.pname"
                required
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-md-4 p-2">
              <label><b>Age :</b></label>
            </div>
            <div class="col-md-7 p-2">
              <input
                type="text"
                placeholder="Enter Pet Age"
                class="form-control"
                v-model="capp.page"
                required
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-md-4 p-2">
              <label><b>Message :</b></label>
            </div>
            <div class="col-md-7 p-2">
              <textarea
                class="form-control"
                rows="3"
                placeholder="Enter Message"
                v-model="capp.message"
              ></textarea>
            </div>
          </div>
          <div class="form-group">
            <button class="btn btn-success btn-block">Submit</button>
          </div>
        </form>
        <div class="col-md-4 p-2">
              <label><b>{{cslot.hcharge}}</b></label>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ChHeader from "../../components/Channel/Ch_Header.vue";

export default {
  name: "ChAppointment",

  components: {
    ChHeader,
  },
  props: {
    id: String,

  },

  data() {
    return {
      capp: {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        ptype: "",
        pname: "",
        page: "",
        message: "",
        action: "Pending",
        slotid: this.id,
      },
      cslot: {},
    };

   
  },
  //get Slot id 
  created() {
      console.log(this.id);

    let apiURL = `http://localhost:5000/cslot/${this.id}`;
    axios.get(apiURL).then((res) => {
      this.cslot = res.data.cslot;
      console.log(this.cslot);
    });
  },
  methods: {
    handleSubmitForm() {{
      let apiURL = "http://localhost:5000/capp/create";

      //console.log(apiURL);
        
      this.$swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your Appointment has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })  

      axios
        .post(apiURL, this.capp)
        .then(() => {
          this.$router.push("/ch_usercard");

          // console.log(this.capp)

          this.capp = {
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            ptype: "",
            pname: "",
            page: "",
            message: "",
            action: "Pending",
            slotid: this.id,
          };
        })
        .catch((error) => {
          console.log(error);
        });
    }
    {

      

        //save payment details

        let apiURL2 = "http://localhost:5000/cpay/create";
        
        axios.post(apiURL2, this.$data.cslot).then(() => {

            console.log(this.$data.cslot)
        })
        .catch((error) => {
          console.log(error);
        });
    }
    },
  },
};
</script>

<style></style>
