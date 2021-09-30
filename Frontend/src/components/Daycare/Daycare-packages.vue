<template>
  <div class="daycare-reg">
    <div class="container-fluid ">
      <div class="row shadow py-1 mb-3 rounded daycare-header">
        <div class="header mb-3 mt-1 p-2">
          <h1><b>Daycare Packages 🎁</b></h1>
        </div>
      </div>
    </div>
    <div class="container p-3">
      <div class="row">
        <div class="package-card col d-flex justify-content-evenly m-3">
          <div class="card p-3 m-4" style="background-color:#483C46">
            <div class="card-body">
              <h1 class="card-title"><i>Premium</i> 💎</h1>
              <br />
              <br />
              <ul class="card-text m-3">
                <li>5 hours group play</li>
                <li>Healthy pet guaranteed</li>
                <li>Activity training</li>
                <li>Free clinic session</li>
                <li>1 swimming session daily</li>
                <li>Meals : Meats and pedigree</li>
              </ul>
              <a href="/daycare-reg">
                <button type="button" class="btn btn-dark">Choose 👉</button>
              </a>
            </div>
          </div>
        </div>
        <div class="package-card col d-flex justify-content-evenly m-3">
          <div class="card p-3 m-4" style="background-color:#F4743B">
            <div class="card-body">
              <h1 class="card-title"><i>Medi Plus</i> ➕</h1>
              <br />
              <br />
              <ul class="card-text m-3">
                <li>1 hours group play</li>
                <li>Healthy pet guaranteed</li>
                <li>Wash session daily</li>
                <li>Clinic charges 50%</li>
                <li>Meals : Pedigree</li>
              </ul>
              <a href="/daycare-reg">
                <button type="button" class="btn btn-dark">Choose 👉</button>
              </a>
            </div>
          </div>
        </div>
        <div class="package-card col d-flex justify-content-evenly m-3">
          <div class="card p-3 m-4" style="background-color:#3C6E71">
            <div class="card-body">
              <h1 class="card-title"><i>Lite</i> ⚡</h1>
              <br />
              <br />
              <ul class="card-text m-3">
                <li>Healthy pet guaranteed</li>
                <li>Wash session daily</li>
                <li>Meals : Pedigree</li>
              </ul>
              <a href="/daycare-reg">
                <button type="button" class="btn btn-dark">Choose 👉</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "daycare-packs",
};
</script>
<style scoped>
.daycare-header {
  background-color: #6504b5;
  color: white;
}
.package-card {
  width: 500px;
  height: 500px;
  border-style: solid;
  border-width: 5px;
  transition: transform 0.2s;
  border-radius: 10px;
  border-color: #6504b5;
  color: white;
}
.package-card:hover {
  transform: scale(1.1);
}
</style>
