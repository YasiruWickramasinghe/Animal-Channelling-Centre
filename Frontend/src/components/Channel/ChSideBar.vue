<template>
  <div>
    <div
      class="d-flex flex-column flex-shrink-0 p-3 bg-light"
      style="width: 250px;"
    >
      <h3 class="Ch-Side-bar-Text"><b>Channelling Centre</b></h3>
      <hr />
      <ul class="nav nav-pills flex-column mb-auto">
        <!-- <li>
          <router-link
            :to="{ name: 'ChChannelHome' }"
            class="nav-link link-dark Ch-Side-bar"
            ><b>  Channel Home</b></router-link
          >
          <hr />
        </li> -->
        <li>
          <router-link
            :to="{ name: 'ChChannelReq' }"
            class="nav-link link-dark Ch-Side-bar"
            ><b>Channel Request</b></router-link
          >
          <hr />
        </li>
        <li>
          <router-link
            :to="{ name: 'ChAvaSlot' }"
            class="nav-link link-dark Ch-Side-bar"
            ><b>view Channel</b></router-link
          >
          <hr />
        </li>
        <li>
          <router-link
            :to="{ name: 'ChNewChannelform' }"
            class="nav-link link-dark Ch-Side-bar"
            ><b>Add Channel</b></router-link
          >
          <hr />
        </li>
        <li>
          <router-link
            :to="{ name: 'ChSlotManage' }"
            class="nav-link link-dark Ch-Side-bar"
            ><b>Manage Channel</b></router-link
          >
          <hr />
        </li>
        <li>
          <router-link
            :to="{ name: 'ChReport' }"
            class="nav-link link-dark Ch-Side-bar"
            ><b>Channel Report</b></router-link
          >
          <hr />
        </li>
        <!-- <li>
          <router-link
            :to="{ name: 'ChViewChannel' }"
            class="nav-link link-dark Ch-Side-bar"
            ><b>User pet card (Remove)</b></router-link
          >
          <hr />
        </li> -->
        <!-- <li>
          <router-link
            :to="{ name: 'ChApp' }"
            class="nav-link link-dark Ch-Side-bar"
            ><b>User Appointment (Remove)</b></router-link
          >
          <hr />
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChSideBar",
};
</script>

<style>
.Ch-Side-bar {
  transition: transform 0.4s;
}

.Ch-Side-bar:hover {
  transform: scale(1.2);
  color: #6504b5;
}

.Ch-Side-bar-Text {
  color: #6504b5;
}
</style>
