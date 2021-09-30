<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2">
        <div class="container">
          <div class="row mb-4">
            <label for="dog-breed" class="form-label fw-bolder">Breed</label>
            <input
              class="form-select"
              list="dog-breed-list"
              id="dog-breed"
              placeholder="Any"
              name="breed"
              v-model="breed"
            />
            <datalist id="dog-breed-list">
              <option value="Labrador Retriever"></option>
              <option value="German Shepherd"></option>
              <option value="Golden Retriever"></option>
              <option value="French Bulldog"></option>
              <option value="Bulldogs"></option>
              <option value="Poodles"></option>
              <option value="Beagles"></option>
              <option value="Rottweilers"></option>
              <option value="Corgi"></option>
            </datalist>
          </div>
          <div class="row mb-4">
            <label for="" class="form-label fw-bolder">Age</label>
            <select class="form-select" v-model="age">
              <option value="">Any</option>
              <option value="Puppy">Puppy</option>
              <option value="Young">Young</option>
              <option value="Adult">Adult</option>
              <option value="Senior">Senior</option>
            </select>
          </div>
          <div class="row mb-4">
            <label for="" class="form-label fw-bolder">Size</label>
            <select class="form-select" v-model="size">
              <option value="">Any</option>
              <option value="Small">Small (0-25 lbs)</option>
              <option value="Medium">Medium (26-60 lbs)</option>
              <option value="Large">Large (61-100 lbs)</option>
              <option value="Extra Large">Extra Large (101 lbs or more)</option>
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
              <option value="Cats">Cats</option>
              <option value="Other Dogs">Other Dogs</option>
            </select>
          </div>
          <div class="row mb-4">
            <label for="" class="form-label fw-bolder">Care & Behaviour</label>
            <select class="form-select" v-model="careBehaviour">
              <option value="">Any</option>
              <option value="House-Trained">House-Trained</option>
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
              <option value="Wire">Wire</option>
              <option value="Curly">Curly</option>
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
              >Dog Name</label
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
          <div class="col mb-5" v-for="dog in filteredDog" v-bind:key="dog.id">
            <div class="card">
              <img src="../../../assets/dog.jpeg" alt="" class="card-image" />
              <div class="card-body">
                <h5 class="card-title">{{ dog.name }}</h5>
                <p class="card-text">{{ dog.breed }}</p>
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
  name: "dogdisplaycomponent",
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
    getDog() {
      Vue.axios.get("http://localhost:5000/api/dog/").then((res) => {
        this.list = res.data.results;
      });
    },
  },
  mounted() {
    this.getDog();
  },
  computed: {
    filteredDog: function () {
      return this.list.filter((dog) => {
        return (
          dog.name.toLowerCase().match(this.name.toLowerCase()) &&
          dog.breed.toLowerCase().match(this.breed.toLowerCase()) &&
          dog.size.toLowerCase().match(this.size.toLowerCase()) &&
          dog.age.toLowerCase().match(this.age.toLowerCase()) &&
          dog.gender.toLowerCase().match(this.gender.toLowerCase()) &&
          dog.goodWith.toLowerCase().match(this.goodWith.toLowerCase()) &&
          dog.careBehaviour
            .toLowerCase()
            .match(this.careBehaviour.toLowerCase()) &&
          dog.coatLength.toLowerCase().match(this.coatLength.toLowerCase()) &&
          dog.color.toLowerCase().match(this.color.toLowerCase())
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