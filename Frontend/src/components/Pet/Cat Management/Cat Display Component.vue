<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2">
        <div class="container">
          <div class="row mb-4">
            <label for="cat-breed" class="form-label fw-bolder">Breed</label>
            <input
              class="form-select"
              list="cat-breed-list"
              id="cat-breed"
              placeholder="Any"
              name="breed"
              v-model="breed"
            />
            <datalist id="cat-breed-list">
              <option value="Labrador Retriever"></option>
            </datalist>
          </div>
          <div class="row mb-4">
            <label for="" class="form-label fw-bolder">Age</label>
            <select class="form-select" v-model="age">
              <option value="">Any</option>
              <option value="Kitten">Kitten</option>
              <option value="Young">Young</option>
              <option value="Adult">Adult</option>
              <option value="Senior">Senior</option>
            </select>
          </div>
          <div class="row mb-4">
            <label for="" class="form-label fw-bolder">Size</label>
            <select class="form-select" v-model="size">
              <option value="">Any</option>
              <option value="Small">Small (0-6 lbs)</option>
              <option value="Medium">Medium (7-11 lbs)</option>
              <option value="Large">Large (12-16 lbs)</option>
              <option value="Extra Large">Extra Large (17 lbs or more)</option>
            </select>
          </div>
          <div class="row mb-4">
            <label for="" class="form-label fw-bolder">Gender</label>
            <select class="form-select" v-model="gender">
              <option value="">Any</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div class="row mb-4">
            <label for="" class="form-label fw-bolder">Good With</label>
            <select class="form-select" v-model="goodWith">
              <option value="">Any</option>
              <option value="Kids">Kids</option>
              <option value="Dogs">Dogs</option>
              <option value="Other Cats">Other Cats</option>
            </select>
          </div>
          <div class="row mb-4">
            <label for="" class="form-label fw-bolder">Care & Behaviour</label>
            <select class="form-select" v-model="careBehaviour">
              <option value="">Any</option>
              <option value="House-Trained">House-Trained</option>
              <option value="Declawed">Declawed</option>
              <option value="Special Needs">Special Needs</option>
            </select>
          </div>
          <div class="row mb-4">
            <label for="" class="form-label fw-bolder">Coat Length</label>
            <select class="form-select" v-model="coatLength">
              <option value="">Any</option>
              <option value="Hairless">Hairless</option>
              <option value="Short">Short</option>
              <option value="Medium">Medium</option>
              <option value="Long">Long</option>
            </select>
          </div>
          <div class="row mb-4">
            <label for="" class="form-label fw-bolder">Color</label>
            <select class="form-select" v-model="color">
              <option value="">Any</option>
            </select>
          </div>
          <div class="row text-start mb-4">
            <label for="" class="form-label fw-bolder text-center"
              >Cat Name</label
            >
            <div class="col p-0">
              <input
                class="form-control search-input"
                placeholder="Search"
                type="text"
                v-model="name"
              />
            </div>
            <div class="col p-0">
              <button type="button" class="btn search-btn">
                <i class="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="row row-cols-5">
          <!-- Display Card -->
          <div class="col mb-5" v-for="cat in filteredCat" v-bind:key="cat.id">
            <div class="card">
              <img src="../../../assets/dog.jpeg" alt="" class="card-image" />
              <div class="card-body">
                <h5 class="card-title">{{ cat.name }}</h5>
                <p class="card-text">{{ cat.breed }}</p>
              </div>
            </div>
          </div>
          <!-- Display Card End -->
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
  name: "catdisplaycomponent",
  data() {
    return {
      list: [],
      name: "",
      breed: "",
      size: "",
      age: "",
      gender: "",
      goodWith: "",
      careBehaviour: "",
      coatLength: "",
      color: "",
    };
  },
  methods: {
    getCat() {
      Vue.axios.get("http://localhost:5000/api/cat/").then((res) => {
        this.list = res.data.results;
      });
    },
  },
  mounted() {
    this.getCat();
  },
  computed: {
    filteredCat: function () {
      return this.list.filter((cat) => {
        return (
          cat.name.toLowerCase().match(this.name.toLowerCase()) &&
          cat.breed.toLowerCase().match(this.breed.toLowerCase()) &&
          cat.size.toLowerCase().match(this.size.toLowerCase()) &&
          cat.gender.toLowerCase().match(this.gender.toLowerCase()) &&
          cat.age.toLowerCase().match(this.age.toLowerCase()) &&
          cat.goodWith.toLowerCase().match(this.goodWith.toLowerCase()) &&
          cat.careBehaviour
            .toLowerCase()
            .match(this.careBehaviour.toLowerCase()) &&
          cat.coatLength.toLowerCase().match(this.coatLength.toLowerCase()) &&
          cat.color.toLowerCase().match(this.color.toLowerCase())
        );
      });
    },
  },
};
</script>
<style>
.search-input {
  width: 225px;
  border-radius: 10px 0px 0px 10px;
}
.search-btn {
  border: 1px solid #6504b5;
  border-radius: 0px 10px 10px 0;
  background-color: #6504b5;
  color: #ffff;
}
.card-image {
  height: 250px;
  border-radius: 10px 10px 0 0;
}
.card {
  border-radius: 10px;
  width: 250px;
}
</style>