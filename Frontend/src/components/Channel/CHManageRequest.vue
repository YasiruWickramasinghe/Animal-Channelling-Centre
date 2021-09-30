<template>
  <div>
    <div class="row">
      <div class="col-md-8">
        <ChHeader title="All Channel Request" />
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
    <div class="row">
      <table class="table table-success table-striped">
        <thead>
          <tr>
            <!-- <th scope="col">#</th> -->
            <th scope="col">O Name</th>
            <th scope="col">O Email</th>
            <th scope="col">O Phone</th>
            <th scope="col">Pet Name</th>
            <th scope="col">Pet Type</th>
            <th scope="col">Pet Age</th>
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
            <td>{{ appointment.ptype }}</td>
            <td>{{ appointment.page }}</td>
            <td>
              <div class="row">
                <div class="col-6">
                  <button type="button" class="btn btn-sm btn-success" @click.prevent="onApprove(appointment._id)"> <!--  ,appointment.slotid -->
                    Approve
                  </button>
                </div>
                <div class="col-6">
                  <button type="button" class="btn btn-sm btn-danger" @click.prevent="onDecline(appointment._id)">
                    Decline
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
  name: "ChManageReq",

  components: {
    ChHeader,
  },


  data() {
    return {
      Appointments: [],
      // cslot: {}, 
      search:'',

    };
  },
  created() {

    //get pending Appointment
    let apiURL = "http://localhost:5000/capp/pending/";
    axios
    .get(apiURL)
      .then((res) => {
        this.Appointments = res.data.data;
        //  let App = this.Appointments
        // console.log(App);
      })
      .catch((error) => {
        console.log(error);
      });


  },

  methods: {

    onApprove(id){ 



      //approved updated
      let apiURL = `http://localhost:5000/capp/update/${id}`

      let indexOfArrayItem = this.Appointments.findIndex((i) => i._id === id);

          this.$swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Appointment Approved',
                    showConfirmButton: false,
                    timer: 1500
                  })

      const data ={
          action:"Approved",      
      }

      axios.put(apiURL ,data)
      .then(() =>{

              this.Appointments.splice(indexOfArrayItem, 1);
      })
      .catch((error) => {

          console.log(error);

      });

  },

//shoud be  declined
      onDecline(id){

      let apiURL = `http://localhost:5000/capp/update/${id}`

      let indexOfArrayItem = this.Appointments.findIndex((i) => i._id === id);

          this.$swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Appointment Decline',
                    showConfirmButton: false,
                    timer: 1500
                  })

      const data ={
          action:"Declined",      
      }

      axios.put(apiURL ,data)
      .then(() =>{

              this.Appointments.splice(indexOfArrayItem, 1);
      })
      .catch((error) => {

          console.log(error);

        });
  }

},

computed:{
  filteredApp: function(){
    return this.Appointments.filter((appointment) =>{
      return appointment.firstname.match(this.search) || appointment.email.match(this.search) ||appointment.phone.match(this.search) ||appointment.pname.match(this.search) ||appointment.page.match(this.search) ||appointment.ptype.match(this.search)
    })
  }
}

}
</script>

<style scooped>

.ch_search_btn {
  background-color: #6504b5;
  color: #ffff;
}

</style>
