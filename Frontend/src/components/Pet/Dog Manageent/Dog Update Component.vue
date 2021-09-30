<template>
  <div class="container-fluid dog-management-update-container">
    <h2 class="heading text-start mt-5 p-5 pb-0">Dog Management - Update</h2>
    <div class="row p-5">
      <div class="col">
        <div class="dog-image h-75 w-75 mt-5">
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
          <form @submit.prevent="updateDog" method="put">
            <div class="mb-3">
              <label for="dog-name" class="form-label">Name</label>
              <input
                type="text"
                class="form-control"
                id="dog-name"
                name="name"
                v-model="dog.name"
              />
            </div>
            <div class="mb-3">
              <label for="dog-breed" class="form-label">Breed</label>
              <input
                class="form-control"
                list="dog-breed-list"
                id="dog-breed"
                placeholder="Type to search"
                name="breed"
                v-model="dog.breed"
              />
              <datalist id="dog-breed-list">
                <option value="Labrador Retriever"></option>
              </datalist>
            </div>
            <div class="mb-3">
              <label for="dog-age" class="form-label">Age</label>
              <select
                class="form-select"
                id="dog-age"
                name="age"
                v-model="dog.age"
              >
                <option value="" hidden>Select</option>
                <option value="Puppy">Puppy</option>
                <option value="Young">Young</option>
                <option value="Adult">Adult</option>
                <option value="Senior">Senior</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="dog-type" class="form-label">Size</label>
              <select
                class="form-select"
                id="dog-type"
                name="size"
                v-model="dog.size"
              >
                <option value="" hidden>Select</option>
                <option value="Small">Small (0-25 lbs)</option>
                <option value="Medium">Medium (26-60 lbs)</option>
                <option value="Large">Large (61-100 lbs)</option>
                <option value="Extra Large">
                  Extra Large (101 lbs or more)
                </option>
              </select>
            </div>
            <div class="mb-3">
              <label for="dog-gender" class="form-label">Gender</label>
              <select
                class="form-select"
                id="dog-gender"
                name="gender"
                v-model="dog.gender"
              >
                <option value="" hidden>Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="dog-goodWith" class="form-label">Good With</label>
              <select
                class="form-select"
                id="dog-goodWith"
                name="goodWith"
                v-model="dog.goodWith"
              >
                <option value="" hidden>Select</option>
                <option value="Kids">Kids</option>
                <option value="Cats">Cats</option>
                <option value="Other Dogs">Other Dogs</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="dog-careBehaviour" class="form-label"
                >Care & Behaviour</label
              >
              <select
                class="form-select"
                id="dog-careBehaviour"
                name="careBehaviour"
                v-model="dog.careBehaviour"
              >
                <option value="" hidden>Select</option>
                <option value="House-Trained">House-Trained</option>
                <option value="Special Needs">Special Needs</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="dog-coatLength" class="form-label">Coat Length</label>
              <select
                class="form-select"
                id="dog-coatLength"
                name="coatLength"
                v-model="dog.coatLength"
              >
                <option value="" disabled selected hidden>Select</option>
                <option value="Hairless">Hairless</option>
                <option value="Short">Short</option>
                <option value="Medium">Medium</option>
                <option value="Long">Long</option>
                <option value="Wire">Wire</option>
                <option value="Curly">Curly</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="dog-color" class="form-label">Color</label>
              <input
                class="form-control"
                list="dog-color-list"
                id="dog-color"
                placeholder="Type to search"
                name="color"
                v-model="dog.color"
              />
              <datalist id="dog-color-list">
                <option value="Labrador Retriever"></option>
              </datalist>
            </div>
            <div class="mb-3">
              <label for="dog-about" class="form-label">About</label>
              <textarea
                class="form-control"
                id="dog-about"
                rows="5"
                name="about"
                v-model="dog.about"
              ></textarea>
            </div>
            <div class="mb-3 text-end">
              <button class="cancel-btn fw-bold me-3">
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
  name: "dogupdatecomponent",
  data() {
    return {
      dog: {
        name: null,
        breed: null,
        age: null,
        size: null,
        gender: null,
        goodWith: null,
        careBehaviour: null,
        coatLength: null,
        color: null,
        about: null,
      },
    };
  },
  methods: {
    getDog() {
      const id = this.$route.params.id;
      Vue.axios.get("http://localhost:5000/api/dog/" + id).then((res) => {
        this.dog = res.data.results;
      });
    },
    updateDog() {
      const id = this.$route.params.id;
      Vue.axios
        .put("http://localhost:5000/api/dog/" + id, this.dog)
        .then(() => {
          this.$router.push('/petdisplay');
        });
    },
  },
  mounted() {
    this.getDog();
  },
};
</script>
<style>
html {
  background-color: #efeef1;
}
.dog-management-update-container {
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
.dog-image {
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