<template>
  <div>
    <div class="row">
      <div class="col-md-8">
        <ChHeader title="Manage Channelling Slot" />
      </div>
      <div class="col-md-3">
        <input type="text" v-model="search" placeholder="Search"/>
      </div>
      <div class="col-md-1">
          <button type="button" class="btn ch_search_btn" @click.prevent="filteredSlot()">
              <i class="bi bi-search"></i>
          </button>
    </div>
    </div>
    <div class="row">
      <table class="table table-success table-striped">
        <thead>
          <tr>
            <!-- <th scope="col">#</th> -->
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Room no</th>
            <!-- <th scope="col">Charge</th> -->
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="slot in filteredSlot" :key="slot._id">
            <!-- <th scope="row">{{id}}</th> -->
            <td>{{ slot.firstname }} {{ slot.lastname }}</td>
            <td>{{ slot.email }}</td>
            <td>{{ slot.phone }}</td>
            <td>{{ slot.date }}</td>
            <td>{{ slot.time }}</td>
            <td>{{ slot.roomno }}</td>
            <!-- <td>{{total}}</td> -->
            <td>
              <div class="row">
                <div class="col-6">
                  <router-link
                    :to="{ name: 'ChUpdateSlot', params: { id: slot._id } }"
                    class="btn btn-sm btn-success"
                    v-b-popover.hover="{ variant: 'info', content: 'Click to Here' }"
                  >
                    Update
                  </router-link>
                </div>
                <div class="col-6">
                  <button
                    @click.prevent="deleteSlot(slot._id)"
                    type="button"
                    class="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ChHeader from "../../components/Channel/Ch_Header.vue";

export default {
  name: "ChManageSlot",

  components: {
    ChHeader,
  },

  data() {
    return {
      Slots: [],
      search:'',
    };
  },
  created() {
    let apiURL = "http://localhost:5000/cslot/";
    axios
      .get(apiURL)
      .then((res) => {
        this.Slots = res.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  // computed:{
  //   total: function(){
  //     return parseInt(this.Slots.hcharge) + parseInt(this.Slots.vcharge);
  //   }
  // }
  methods: {
    deleteSlot(id) {
      let apiURL = `http://localhost:5000/cslot/delete/${id}`;

      let indexOfArrayItem = this.Slots.findIndex((i) => i._id === id);

                    this.$swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                  }).then((result) => {
                    if (result.isConfirmed) {

                      axios.delete(apiURL)
                      .then(() => {
                        this.Slots.splice(indexOfArrayItem, 1);
                      })
                      .catch((error) => {
                        console.log(error);
                      });

                      this.$swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                    }
                  })
    },
  },

  computed:{
  filteredSlot: function(){
    return this.Slots.filter((slot) =>{
      return slot.email.match(this.search) || slot.phone.match(this.search) || slot.date.match(this.search) || slot.time.match(this.search) || slot.roomno.match(this.search) || slot.firstname.match(this.search)
    })
  }
}
};
</script>

<style scooped>

.ch_search_btn {
  background-color: #6504b5;
  color: #ffff;
}

</style>
