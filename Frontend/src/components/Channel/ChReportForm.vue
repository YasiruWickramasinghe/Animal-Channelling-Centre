<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 m-2 container center card rounded shadow-lg border border-primary form-card">
            <ChHeader title="Channel Report Form " />
        <form @submit.prevent="onSubmit">
            <div class="form-group row">
            <div class="col-md-4 p-2">
              <label><b>Start Date :</b></label>
            </div>
            <div class="col-md-7 p-2">
              <input
                type="date"
                placeholder="Enter First Name"
                class="form-control"
                v-model="cpay.startdate"
                required
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-md-4 p-2">
              <label><b>End Date :</b></label>
            </div>
            <div class="col-md-7 p-2">
              <input
                type="date"
                placeholder="Enter First Name"
                class="form-control"
                v-model="cpay.enddate"
                required
              />
            </div>
          </div>
          <div class="row">
            <label class="form-label text-start fs-5">
              <b>Charging Details</b>
            </label>
            <hr />
          </div>

          <div class="row">
            <div class="col-md-4 p-2">
              <label class="form-label text-start">
                <b>Medicine Charges :</b>
              </label>
            </div>
            <div class="col-md-7 p-2">
              <input
                type="text"
                class="form-control"
                id="example"
                placeholder="Enter Medicine Charges"
                v-model="cpay.mcharge"
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 p-2">
              <label class="form-label text-start">
                <b>Other Charges :</b>
              </label>
            </div>
            <div class="col-md-7 p-2">
              <input
                type="text"
                class="form-control"
                id="example"
                placeholder="Enter Charges"
                v-model="cpay.ocharge"
                required
              />
            </div>
          </div>
          <br />
          <div class="form-group">
            <button class="btn btn-success btn-block" @click.prevent="onSubmit()">Generate Report</button>
          </div>
        </form>
        </div>
        <div class="col-md-5 m-2 container center card rounded shadow-lg border border-primary form-card">
        <div class="row" ref="content" >
        <ChHeader title="Report Details" />
        <form>
          <div class="row">
            <div class="col-md-6 p-2">
              <label class="form-label text-start">
                <b>Total Income :</b>
              </label>
            </div>
            <div class="col-md-6 p-2">
              <label class="form-label text-start">
                <b>{{ tcharge }}</b>
              </label>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 p-2">
              <label class="form-label text-start">
                <b>Veterinarian Charge :</b>
              </label>
            </div>
            <div class="col-md-6 p-2">
              <label class="form-label text-start">
                <b>{{ vcharge }}</b>
              </label>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 p-2">
              <label class="form-label text-start">
                <b>Hospital Charges :</b>
              </label>
            </div>
            <div class="col-md-6 p-2">
              <label class="form-label text-start">
                <b>{{ hcharge }}</b>
              </label>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 p-2">
              <label class="form-label text-start">
                <b>Medicine Charges :</b>
              </label>
            </div>
            <div class="col-md-6 p-2">
              <label class="form-label text-start">
                <b>{{ cpay.mcharge }}</b>
              </label>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 p-2">
              <label class="form-label text-start">
                <b>Other Chargese :</b>
              </label>
            </div>
            <div class="col-md-6 p-2">
              <label class="form-label text-start">
                <b>{{ cpay.ocharge }}</b>
              </label>
            </div>
          </div>
          <hr />
          <hr />
          <div class="row">
            <div class="col-md-3 p-2"></div>
            <div class="col-md-6 p-2">
              <button type="button" class="btn btn-primary p-2 m-2" @click="download">
                Download Report
              </button>
            </div>
          </div>
        </form>
      </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import axios from "axios";
import ChHeader from "../../components/Channel/Ch_Header.vue";

export default {
  name: "ChReportForm",
  components: {
    ChHeader,
  },
    data() {
    return {
      cpay: {
        startdate: "",
        enddate: "",
        ocharge: "",
        mcharge: ""

      },
    Ccal: [],

    };
  },

  
  created() {

  },

    methods: {

  download() {
  const doc = new jsPDF();
  const contentHtml = this.$refs.content.innerHTML;
  doc.fromHTML(contentHtml, 15, 15, {
    width: 170
  });
  doc.save("sample.pdf");
 },

 downloadWithCSS() {
   const doc = new jsPDF();
   /** WITH CSS */
   var canvasElement = document.createElement('canvas');
    html2canvas(this.$refs.content, { canvas: canvasElement 
      }).then(function (canvas) {
    const img = canvas.toDataURL("image/jpeg", 0.8);
    doc.addImage(img,'JPEG',20,20);
    doc.save("sample.pdf");
   });
 },

    //get month  pay
    onSubmit(){    
    
      let startdate = this.cpay.startdate
      let enddate = this.cpay.enddate


      let apiURL = `http://localhost:5000/cpay/month/${startdate}&${enddate}`;
      // console.log(apiURL)
      axios.get(apiURL).then((res) => {
        this.Ccal = res.data.data;
        // console.log(this.Ccal);
      });


  },


},

  computed: {


        hcharge: function(){

          console.log(this.Ccal)

            let sum = 0;
            this.Ccal.forEach(element => {

              // let hcharge = parseInt(element.hcharge);

              sum += parseInt(element.hcharge);
              
            });
            return sum

          },
          vcharge: function(){

          console.log(this.Ccal)

            let sum = 0;
            this.Ccal.forEach(element => {

              // let hcharge = parseInt(element.hcharge);

              sum += parseInt(element.vcharge);
              
            });
            return sum

          },
          tcharge: function(){

              return parseInt(this.vcharge) + parseInt(this.hcharge);
          },
   },

  

};
</script>

<style></style>
