<template>
  <div class="container-fluid daycare-create-container">
    <h2 class="heading text-start mt-5 p-5 pb-0">Daycare Update</h2>
    <div class="row p-5">
      <div class="col">
        <div class="pet-image h-75 w-50 mt-4">
          <div class="position-relative top-50 start-50 translate-middle">
            <label for="file-upload" class="custom-file-upload">
              <i class="bi bi-upload"></i>
            </label>
            <input id="file-upload" type="file" accept="image/*" multiple />
          </div>
        </div>
      </div>
      <div class="col">
        <div class="w-75 text-start fw-bolder">
          <form @submit.prevent="updateDaycare" method="put">
            <div class="mb-3">
              <label for="pet-name" class="form-label">Owner</label>
              <input
                type="text"
                name="owner"
                v-model="posts.owner"
                class="form-control"
                id="pet-owner"
              />
            </div>
            <div class="mb-3">
              <label for="pet-name" class="form-label">Pet Name</label>
              <input
                type="text"
                name="pet"
                v-model="posts.pet"
                class="form-control"
                id="pet-name"
              />
            </div>
            <div class="mb-3">
              <label for="pet-name" class="form-label">Email</label>
              <input
                type="email"
                name="email"
                v-model="posts.email"
                class="form-control"
                id="pet-name"
              />
            </div>
            <div class="row">
              <div class="col-md-4 mb-3">
                <label for="pet-name" class="form-label">No of Days</label>
                <input
                  type="number"
                  name="days"
                  v-model="posts.days"
                  class="form-control"
                  id="pet-name"
                />
              </div>
              <div class="col-md-6 mb-3">
                <label for="pet-type" class="form-label">Type</label>
                <select
                  class="form-select"
                  id="pet-type"
                  name="type"
                  v-model="posts.package"
                >
                  <option value="#" hidden>Select</option>
                  <option value="Premium">Premium package</option>
                  <option value="Medi Plus">Medi Plus package</option>
                  <option value="Lite">Lite package</option>
                </select>
              </div>
            </div>
            <div class="mb-3 text-end">
              <button
                class="cancel-btn fw-bold me-3"
                v-on:click="onViewClick(single.id)"
              >
                <i class="bi bi-chevron-left"></i>Cancel
              </button>
              <input type="submit" class="submit-btn fw-bold" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  name: "daycare-update",
  data() {
    return {
      posts: {
        owner: "",
        pet: "",
        email: "",
        days: "",
        package: "",
      },
      single: "",
    };
  },
  methods: {
    getDayCare() {
      const id = this.$route.params.id;
      Vue.axios.get("http://localhost:5000/api/daycare/" + id).then((res) => {
        this.posts = res.data.results;
      });
    },
    updateDaycare() {
      const id = this.$route.params.id;
      Vue.axios
        .put("http://localhost:5000/api/daycare/" + id, this.posts)
        .then((res) => {
          this.single = res.data.results._id;
          this.$router.push({
            name: "daycare-confirm",
            params: {
              data: this.single,
            },
          });
        });
    },
  },
  mounted() {
    this.getDayCare();
  },
};
</script>
<style>
html {
  background-color: #efeef1;
}
.daycare-create-container {
  width: 90%;
  top: 155px;
  background: #ffffff;
  border-radius: 33px 33px 33px 33px;
}
.heading {
  font-family: Poppins;
  font-weight: bolder;
  font-size: 35px;
  color: #171859;
}
input,
textarea,
select {
  border: 1px solid #7e7dde !important;
}
label {
  font-weight: bolder;
}
.submit-btn {
  color: #ffff;
  width: 120px;
  height: 50px;
  background: #5f30e2;
  border-radius: 19px;
  border: none;
}
.submit-btn:hover {
  color: #5f30e2;
  background: #ffff;
  border: 1px solid #5f30e2;
}
.cancel-btn {
  background: none;
  color: #7e7e7e;
  border: none;
  font-size: 18px;
}
.cancel-btn i {
  font-weight: 900;
}
.pet-image {
  border: 1px solid #7e7dde !important;
  border-radius: 30px;
  margin-right: auto;
  margin-left: auto;
}
input[type="file"] {
  display: none;
}
.custom-file-upload {
  border: 1px solid #7e7dde;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 30px;
  font-size: 20px;
}
</style>
