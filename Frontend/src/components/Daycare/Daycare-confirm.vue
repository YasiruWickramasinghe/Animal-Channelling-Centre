<template>
  <div class="daycare-reg">
    <div class="container-fluid">
      <div class="row shadow py-1 mb-3 rounded daycare-header">
        <div class="header mb-3 mt-1 p-2">
          <h1>
            <b>Registration Confirmation ! <i class="bi bi-check-lg"></i></b>
          </h1>
        </div>
      </div>
    </div>
    <div class="container p-3">
      <div class="row">
        <div class="col-md-8">
          <div class="card rounded border border-5 receipt">
            <div class="daycare-header p-3 receipt">
              <h2>
                <b>Receipt Details <i class="bi bi-journal-text"></i></b>
              </h2>
            </div>
            <div class="row">
              <div class="col-md-5 p-4 m-3">
                <div class="card rounded border border-primary pet-image">
                  This is image
                </div>
              </div>
              <div class="col-md-6 m-3 p-3">
                <div class="container">
                  <table class="table table-striped table-hover m-3">
                    <tbody>
                      <tr>
                        <td><b>Owner Name</b></td>
                        <td>{{ profileData.owner }}</td>
                      </tr>
                      <tr>
                        <td><b>PetName</b></td>
                        <td>{{ profileData.pet }}</td>
                      </tr>
                      <tr>
                        <td><b>Email</b></td>
                        <td>{{ profileData.email }}</td>
                      </tr>
                      <tr>
                        <td><b>No of days</b></td>
                        <td>{{ profileData.days }}</td>
                      </tr>
                      <tr>
                        <td><b>Package</b></td>
                        <td>{{ profileData.package }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div
            class="
              container
              card
              rounded
              border border-primary
              receipt
              m-2
              p-4
              options
            "
          >
            <div class="row p-2 d-flex justify-content-center">
              <h2>Options <i class="bi bi-gear-wide-connected"></i></h2>
            </div>
            <div class="row p-2 d-flex justify-content-center">
              <button type="button" class="w-75 btn btn-outline-primary">
                <h5>Download Receipt <i class="bi bi-download"></i></h5>
              </button>
            </div>
            <div class="row p-2 d-flex justify-content-center">
              <router-link
                :to="{
                  name: 'daycare-update',
                  params: { id: profileData._id },
                }"
              >
                <button type="button" class="w-75 btn btn-outline-secondary">
                  <h5>Edit <i class="bi bi-pencil"></i></h5>
                </button>
              </router-link>
            </div>
            <div class="row p-2 d-flex justify-content-center">
              <router-link
                :to="{
                  name: 'daycare-packs',
                }"
              >
                <button
                  type="button"
                  class="w-75 btn btn-outline-danger"
                  v-on:click="deleteDaycare(profileData._id)"
                  @click="deleteAlert"
                >
                  <h5>Delete <i class="bi bi-trash-fill"></i></h5>
                </button>
              </router-link>
            </div>
            <div class="row p-2 d-flex justify-content-center">
              <router-link
                :to="{
                  name: 'Home',
                }"
              >
                <button type="button" class="w-75 btn btn-outline-success">
                  <h5>
                    Confirm Booking <i class="bi bi-check-square-fill"></i>
                  </h5>
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import Swal from "sweetalert2";
Vue.use(VueAxios, axios);

export default {
  name: "daycare-confirm",

  data() {
    return {
      profileData: {
        _id: "",
        owner: "",
        pet: "",
        email: "",
        days: "",
        package: "",
      },
    };
  },
  methods: {
    getDaycare() {
      const data = this.$route.params.data;
      Vue.axios.get("http://localhost:5000/api/daycare/" + data).then((res) => {
        this.profileData = res.data.results;
      });
    },
    deleteDaycare() {
      const data = this.$route.params.data.data._id;
      Vue.axios
        .delete("http://localhost:5000/api/daycare/" + data)
        .then((res) => {
          this.profileData = res.data.results;
        });
    },
    deleteAlert() {
      Swal.fire({
        icon: "error",
        title: "Registration Deleted !",
        text: "See you soon",
      });
    },
  },
  mounted() {
    this.getDaycare();
  },
};
</script>
<style scoped>
.daycare-header {
  background-color: #6504b5;
  color: white;
}

.receipt-header {
  background-color: #6504b5;
  color: white;
}

.pet-image {
  width: 400px;
  height: 400px;
}

.receipt {
  border-radius: 20px !important;
}
</style>
