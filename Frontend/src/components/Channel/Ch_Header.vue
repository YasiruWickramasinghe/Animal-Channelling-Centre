<template>
  <div>
    <div class="container-fluid">
      <div class="row shadow py-1 mb-3 rounded channel-header">
        <div class="header mb-1 mt-1 p-1">
          <h3>
            <b>{{ title }}</b>
          </h3>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "ChHeader",

  props: {
    title: String,
  },
};
</script>

<style scoped>
.channel-header {
  background-color: #6504b5;
  color: white;
}
</style>
