<template>
  <div>
    <div class="row">
      <div class="col-md-8">
        <ChHeader title="Available Channels" />
      </div>
      <div class="col-md-3">
          <input type="text" v-model="search" placeholder="Search"/>
      </div>
      <div class="col-md-1">
          <button type="button" class="btn ch_search_btn">
              <i class="bi bi-search"></i>
          </button>
    </div>
    </div>
    <br/>
    <div class="row">
      <div class="col-md-3">
        <label class="form-label text-start text-primary">
                <h6><b>DATE&nbsp;:&nbsp;</b></h6>
        </label>
        <label class="form-label text-start text-danger">
                <h6><b> {{  cslot.date   }}</b></h6>
        </label>
      </div>
      <div class="col-md-6">
        <label class="form-label text-start text-primary">
                <h4><b> Veterinarian:  {{  cslot.firstname  }}</b></h4>
        </label>
      </div>
      <div class="col-md-3">
        <label class="form-label text-start text-primary">
                <h6><b>TIME&nbsp;:&nbsp;</b></h6>
        </label>
        <label class="form-label text-start text-danger">
                <h6><b> {{  cslot.time  }}</b></h6>
        </label>
      </div>
      
    </div> 
    <br/>
    <div class="row">
      <table class="table table-success table-striped">
        <thead>
          <tr>
            <!-- <th scope="col">#</th> -->
            <th scope="col">O Name</th>
            <th scope="col">O Email</th>
            <th scope="col">O Phone</th>
            <th scope="col">Pet Name</th>
            <th scope="col">Pet Age</th>
            <!-- <th scope="col">Date</th>
            <th scope="col">Time</th> -->
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="appointment in filteredApp" :key="appointment._id">
            <!-- <th scope="row">{{id}}</th> -->
            <td>{{ appointment.firstname }} {{ appointment.lastname }}</td>
            <td>{{ appointment.email }}</td>
            <td>{{ appointment.phone }}</td>
            <td>{{ appointment.pname }}</td>
            <td>{{ appointment.page }}</td>
            <!-- <td>{{ appointment.date }}</td>
            <td>{{ appointment.time }}</td> -->
            <td>
              <div class="row">
                <div class="col-6">
                   <button
                    @click.prevent="deleteApp(appointment._id)"
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
  name: "ChManageAva",

  components: {
    ChHeader,
  },

  props: {
    id: String,
  },


    data() {
    return {
      Appointments: [],
      cslot: {},
      search:'',
    };
  },

  created() {
    let apiURL = `http://localhost:5000/capp/slotapp/${this.id}`;
    axios
    .get(apiURL)
      .then((res) => {
        this.Appointments = res.data.data;
        // console.log(Appointments);
      })
      .catch((error) => {
        console.log(error);
      });

    let apiURL2 = `http://localhost:5000/cslot/${this.id}`;
    axios
    .get(apiURL2).then((res) => {
      this.cslot = res.data.cslot;
      // console.log(this.cslot);
    })
    .catch((error) => {
        console.log(error);
      });

  },
    methods: {
    deleteApp(id) {
      let apiURL = `http://localhost:5000/capp/delete/${id}`;

      let indexOfArrayItem = this.Appointments.findIndex((i) => i._id === id);

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
                        this.Appointments.splice(indexOfArrayItem, 1);
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
  filteredApp: function(){
    return this.Appointments.filter((appointment) =>{
      return appointment.firstname.match(this.search) || appointment.email.match(this.search) ||appointment.phone.match(this.search) ||appointment.pname.match(this.search) ||appointment.page.match(this.search)
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
