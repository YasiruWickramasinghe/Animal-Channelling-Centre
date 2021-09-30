<template>
  <div class="row">
    <div class="row">
    <div class="col-9">
      <input
        type="text"
        class="form-control"
        id="example"
        placeholder="SEARCH"
        required
      />
    </div>
    <div class="col p-0">
          <button type="button" class="btn ch_search_btn">
              <i class="bi bi-search"></i>
          </button>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChSearch",
};
</script>



<style scoped>
.ch_search_btn {
  background-color: #6504b5;
  color: #ffff;
}

</style>
