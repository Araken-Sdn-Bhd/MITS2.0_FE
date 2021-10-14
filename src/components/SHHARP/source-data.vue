<template>
  <div>
    <div v-show="showNav">
      <b-navbar toggleable="lg" type="light" class="nav-bg-colour">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="mx-auto stretch" justified>
            <router-link to="/risk-factors" class="nav-item nav-link my-auto" @click.native="test()">Risk Factors</router-link>
            <router-link to="/protective-factors" class="nav-item nav-link my-auto">Protective Factors</router-link>
            <router-link to="/self-harm-act-and-suicidal-intent" class="nav-item nav-link my-auto">The Self-harm Act and Suicidal Intent</router-link>
            <router-link to="/suicide-risk" class="nav-item nav-link my-auto">Suicide Risk</router-link>
            <router-link to="/hospital-management" class="nav-item nav-link my-auto">Hospital Management</router-link>
            <router-link to="/source-data-producer" class="nav-item nav-link my-auto">Source Data Producer</router-link>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <div class="container">
      <div class = "mt-4">
        <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
      </div>

    <!-- Modal -->
      <div>

        <b-modal id="modal-scrollable" scrollable size="lg" centered title="Scrollable Content" header-bg-variant="secondary"
         header-text-variant="light" footer-bg-variant="light" footer-text-variant="dark" body-bg-variant="light"
         header-class="justify-content-center align-content-around">

          <template #modal-header>
            <h5>Preview SHARRP Form</h5>
          </template>

          <template #default>
            <b-card class="mt-3" header="RISK FACTORS" style="min-width: 400px;" bg-variant="light" header-bg-variant="secondary" header-text-variant="light">
              <Risk :hide="true"></Risk>
            </b-card>

            <b-card class="mt-3" header="PROTECTIVE FACTORS" style="min-width: 400px;" bg-variant="light" header-bg-variant="secondary" header-text-variant="light">
              <Protective :hide="true"></Protective>
            </b-card>

            <b-card class="mt-3" header="HOSPITAL MANAGEMENT" style="min-width: 400px;" bg-variant="light" header-bg-variant="secondary" header-text-variant="light">
              <Hospital :hide="true"></Hospital>
            </b-card>

            <b-card class="mt-3" header="SOURCE DATA PRODUCER" style="min-width: 400px;" bg-variant="light" header-bg-variant="secondary" header-text-variant="light">
              <Source :hide="true"></Source>
            </b-card>
          </template>

          <template #modal-footer="{ ok, cancel}">
            <b-button size="sm" variant="danger" @click="cancel()">
              Cancel
            </b-button>
            <b-button size="sm" variant="success" @click="ok()">
              Submit
            </b-button>
          </template>

        </b-modal>
      </div>
    <!-- End of Modal -->

    </div>
   </div>
</template>

<script>
import Risk from './risk-factors'
import Protective from './protective-factors'
import Hospital from './hosp-manag'

export default {
  name: 'Source',
  props: ['hide'],
  components: { Risk, Protective, Hospital },
  data(){
    return{
      showNav: true,
      showButton: true,
      disable: false,
      model: {
        regOffName: '',
        designation: '',
        reportDate: null,
        hospitalName: '',
        psychiatristName: '',
        verificationDate: null
      },
      schema: {
        groups: [
            {
                styleClasses: ['row', 'odd-row'],
                fields: [
                  {
                    type: "input",
                    inputType: "text",
                    label: "Name of Registering Officer<span class='requiredLabel'> *</span>",
                    model: "regOffName",
                    validator: "string",
                    required: true,
                    styleClasses: "col-12 col-md-6",
                    disabled:()=>{
                      return this.disable
                    },
                  },
                  {
                    type: "input",
                    inputType: "text",
                    label: "Name of Hospital<span class='requiredLabel'> *</span>",
                    model: "hospitalName",
                    validator: "string",
                    required: true,
                    styleClasses: "col-12 col-md-6",
                    disabled:()=>{
                      return this.disable
                    },
                  },
                ]
            },
            {
                styleClasses: ['row'],
                fields: [
                  {
                    type: "input",
                    inputType: "text",
                    label: "Designation<span class='requiredLabel'> *</span>",
                    model: "designation",
                    validator: "string",
                    required: true,
                    styleClasses: "col-12 col-md-6",
                    disabled:()=>{
                      return this.disable
                    },
                  },
                  {
                    type: "input",
                    inputType: "text",
                    label: "Name of Psychiatrist<span class='requiredLabel'> *</span>",
                    model: "psychiatristName",
                    validator: "string",
                    required: true,
                    styleClasses: "col-12 col-md-6",
                    disabled:()=>{
                      return this.disable
                    },
                  },
                ]
            },
            {
                styleClasses: ['row', 'odd-row'],
                fields: [
                  {
                    type: "input",
                    inputType: "date",
                    label: "Date of Reporting<span class='requiredLabel'> *</span>",
                    model: "reportDate",
                    min: "1990-01-01",
                    required: true,
                    validator: "date",
                    format: "YYYY/MM/DD",
                    styleClasses: "col-12 col-md-6",
                    disabled:()=>{
                      return this.disable
                    },
                  },
                  {
                    type: "input",
                    inputType: "date",
                    label: "Date of Verification<span class='requiredLabel'> *</span>",
                    model: "verificationDate",
                    min: "1990-01-01",
                    required: true,
                    validator: "date",
                    format: "YYYY/MM/DD",
                    styleClasses: "col-12 col-md-6",
                    disabled:()=>{
                      return this.disable
                    },
                  },
                ]
            },
            {
                styleClasses: 'groupBtn',
                fields: [
                    {
                        id: 'cnl',
                        type: 'submit',
                        onSubmit: ()=>{
                          this.redirectToPrevious()
                        },
                        label: '',
                        buttonText: "Previous",
                        validateBeforeSubmit: false,
                        styleClasses: 'cancelBtn',
                        visible: ()=>{
                          return this.showButton
                        },
                    },
                    {
                      id: "smt",
                      type: 'submit',
                      onSubmit: ()=>{
                        this.submitForm()
                      },
                      label: '',
                      buttonText: "Preview",
                      validateBeforeSubmit: true,
                      visible: ()=>{
                          return this.showButton
                        },
                    }
                ]
            }
        ]
      },
      formOptions: {
        validateAfterLoad: false,
        validateAfterChanged: true,
        validateAsync: true,
        validationErrorClass: "error-field"
      }
    }
  },
  methods: {
    redirectToPrevious(){
      this.$router.push({path: '/hospital-management'})
    },
    submitForm(){
      let sourceData = {
        officer: this.model.regOffName,
        hospital: this.model.hospitalName,
        designation: this.model.designation,
        psychiatrist: this.model.psychiatristName,
        reportDate: this.model.reportDate,
        verificationDate: this.model.verificationDate
      }
      sessionStorage.setItem('sourceData', JSON.stringify(sourceData))

      this.$bvModal.show("modal-scrollable")
    }
  },
  created(){
    if(this.hide){
      this.showNav = false
    }
    if(this.hide){
      this.showButton = false
    }
    if(this.hide){
      this.disable = true
    }

    const sourceData = JSON.parse(sessionStorage.getItem("sourceData"))
    if(sourceData){
      this.model.regOffName = sourceData.officer,
      this.model.hospitalName = sourceData.hospital,
      this.model.designation = sourceData.designation,
      this.model.psychiatristName = sourceData.psychiatrist,
      this.model.reportDate = sourceData.reportDate,
      this.model.verificationDate = sourceData.verificationDate
    }
  }
}
</script>

<style>
.nav-bg-colour{
  background: #B2BEB5;
}
.stretch{
  flex-grow: 1;
}
#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
div.errors.help-block{
  display: none;
  width: 0px;
}
.error-field{
  background: #F9C1C6 !important;
}
.router-link-exact-active {
  color: whitesmoke !important;
  background: crimson;
  border-radius: .5rem;
}
.requiredLabel{
  color: red;
}
.odd-row{
background: rgb(240, 240, 240);
}
.form-group.required>label:after{
  display: none;
  width: 0px;
}
.requiredLabel{
  color: red;
}
</style>
