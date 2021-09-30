<template>
  <div>
    <div class="container">
      <div class="row">
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
                <b>{{ totalincome }}</b>
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
                <b>{{ veterinariancharge }}</b>
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
                <b>{{ hospitalcharges }}</b>
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
                <b>{{ medicinecharges }}</b>
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
                <b>{{ othercharges }}</b>
              </label>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-md-6 p-2">
              <label class="form-label text-start text-danger">
                <b>Balance :</b>
              </label>
            </div>
            <div class="col-md-6 p-2">
              <label class="form-label text-start text-danger">
                <b>{{ balance }}</b>
              </label>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-md-3 p-2"></div>
            <div class="col-md-6 p-2">
              <button type="button" class="btn btn-primary p-2 m-2">
                Download Report
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ChHeader from "../../components/Channel/Ch_Header.vue";
export default {
  name: "ChReportDetails",

  components: {
    ChHeader,
  },
  props: {
    totalincome: String,
    veterinariancharge: String,
    hospitalcharges: String,
    medicinecharges: String,
    othercharges: String,
    balance: String,
  },
};
</script>

<style></style>
