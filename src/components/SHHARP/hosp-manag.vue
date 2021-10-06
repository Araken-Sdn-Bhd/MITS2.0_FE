<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="light" class="nav-bg-colour">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="mx-auto stretch" justified>
            <router-link to="/risk-factors" class="nav-item nav-link my-auto">Risk Factors</router-link>
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
          <vue-form-generator :schema="schema" :model="model" :options="formOptions" id="my-node"></vue-form-generator>
          <br><p>{{model}}</p>
      </div>
    </div>

  </div>
</template>

<script>

export default {
data(){
  return{
    model: {
      referral: '',
      referralSpecify: '',
      arrivalMode: '',
      arrivalSpecify: '',
      firstAssessmentDate: '',
      firstAssessmentTime: '',
      physicalConseq: '',
      physicalConseqSpecify: '',
      admission: '',
      admissionSpecify: '',
      dischargeStatus: '',
      dischargeDate: '',
      noOfDays: null,
      mainDiagnosis: '',
      externalDiagnosis: '',
      PSYMx: '',
      PSYMxSpecify: '',
    },
    schema : {
        groups: [
            {
              styleClasses: ['row', 'odd-row'],
                fields: [
                  {
                    type: "vueMultiSelect",
                    placeholder: "Please select",
                    label: "Referral or Contact point<span class='requiredLabel'> *</span>",
                    model: "referral",
                    required: true,
                    validator: "required",
                    values: [
                      {name: "ED", value: 1},
                      {name: "Ward", value: 2},
                      {name: "Clinic", value: 3},
                      {name: "Mentari", value: 4},
                      {name: "Others (Specify)", value: 99}
                    ],
                    selectOptions: {
                      multiple: false,
                      closeOnSelect: true,
                      maxHeight: 200,
                      showLabels: false,
                      key: "value",
                      label: "name"
                    },
                    styleClasses: ["col-12 col-md-6", "mb-0"],
                  },
                  {
                        type: "input",
                        inputType: "text",
                        label: "",
                        placeholder: "Please specify",
                        model: "referralSpecify",
                        validator: "string",
                        required: true,
                        styleClasses: ["col-12 col-md-6", "mb-0"],
                        visible: function(model) {
                          return model && model.referral.value == 99;
                        }
                  },
                ]
            },
            {
              styleClasses: ['row'],
                fields: [
                  {
                    type: "vueMultiSelect",
                    placeholder: "Please select",
                    label: "Mode of Arrival<span class='requiredLabel'> *</span>",
                    model: "arrivalMode",
                    required: true,
                    validator: "required",
                    selectOptions: {
                      multiple: false,
                      closeOnSelect: true,
                      maxHeight: 200,
                      showLabels: false,
                      key: "value",
                      label: "name"
                    },
                    styleClasses: ["col-12 col-md-6", "mb-0"],
                    values: [
                      {name: "Self", value: 1},
                      {name: "Family", value: 2},
                      {name: "Ambulance", value: 3},
                      {name: "Police", value: 4},
                      {name: "Others (Specify)", value: 99}
                    ],
                  },
                  {
                        type: "input",
                        inputType: "text",
                        label: "",
                        placeholder: "Please specify",
                        model: "arrivalSpecify",
                        validator: "string",
                        required: true,
                        styleClasses: ["col-12 col-md-6", "mb-0"],
                        visible: function(model) {
                          return model && model.arrivalMode.value == 99;
                        }
                  },
                ]
            },
            {
              styleClasses: ['row', "align-items-center", 'odd-row'],
                fields: [
                  {
                      type: "label",
                      label: "First psychiatry assessment after current attempt",
                      styleClasses: ["col-12 col-md-2", "mb-0"]
                  },
                  {
                      type: "input",
                      inputType: "date",
                      label: "Date<span class='requiredLabel'> *</span>",
                      model: "firstAssessmentDate",
                      required: true,
                      validator: "date",
                      format: "YYYY/MM/DD",
                      styleClasses: ["col-12 col-md-5", "mb-0"]
                  },
                  {
                      type: "input",
                      inputType: "time",
                      label: "Time<span class='requiredLabel'> *</span>",
                      model: "firstAssessmentTime",
                      required: true,
                      validator: "required",
                      styleClasses: ["col-12 col-md-5", "mb-0"]
                  },
                ]
            },
            {
              styleClasses: ['row', "align-items-end"],
                fields: [
                  {
                      type: "radios",
                      label: "Physical consequences of current attempt<span class='requiredLabel'> *</span>",
                      model: "physicalConseq",
                      values: [
                        {name: "No significant physical harm, no medical treatment required", value: 0},
                        {name: "Medical attention/surgery required, but no danger to life", value: 1},
                        {name: "Medical attention/surgery required, had/has danger to life", value: 2},
                        {name: "Lethal", value: 3},
                        {name: "Aborted (specify)", value: 99}
                        ],
                      required: true,
                      validator: 'required',
                      styleClasses: ["col-12 col-md-6", "mb-0"]
                  },
                  {
                        type: "input",
                        inputType: "text",
                        label: "",
                        placeholder: "Please specify",
                        model: "physicalConseqSpecify",
                        validator: "string",
                        required: true,
                        styleClasses: ["col-12 col-md-6", "mb-0"],
                        visible: function(model) {
                          return model && model.physicalConseq == 99;
                        }
                  },
                ]
            },
            {
              styleClasses: ['row', 'odd-row'],
                fields: [
                  {
                      type: "radios",
                      label: "Is patient admitted for current attempt?<span class='requiredLabel'> *</span>",
                      model: "admission",
                      values: [
                        {name: "No", value: 0},
                        {name: "Yes", value: 1}
                      ],
                      required: true,
                      validator: 'required',
                      styleClasses: ["col-12 col-md-6", "mb-0"]
                  },
                  {
                        type: "input",
                        inputType: "text",
                        label: "",
                        placeholder: "Please specify the first admitting ward",
                        model: "admissionSpecify",
                        validator: "string",
                        required: true,
                        styleClasses: ["col-12 col-md-6", "mb-0"],
                        visible: function(model) {
                          return model && model.admission == 1;
                        }
                  },
                ]
            },
            {
              styleClasses: ['row'],
                fields: [
                  {
                      type: "radios",
                      label: "Status on discharge<span class='requiredLabel'> *</span>",
                      model: "dischargeStatus",
                      values: [
                        {name: "Dead", value: 0},
                        {name: "Alive", value: 1}
                        ],
                      required: true,
                      validator: 'required',
                      styleClasses: ["col-12 col-md-6", "mb-0"]
                  },
                ]
            },
            {
              styleClasses: ['row', "align-items-center", 'odd-row'],
                fields: [
                  {
                      type: "label",
                      label: "Discharge details",
                      styleClasses: ["col-12 col-md-2"]
                  },
                  {
                      type: "input",
                      inputType: "date",
                      label: "Date<span class='requiredLabel'> *</span>",
                      model: "dischargeDate",
                      required: true,
                      validator: "date",
                      format: "YYYY/MM/DD",
                      styleClasses: ["col-12 col-md-5", "mb-0"]
                  },
                  {
                      type: "input",
                      inputType: "number",
                      label: "Number of days in ward<span class='requiredLabel'> *</span>",
                      model: "noOfDays",
                      min: 0,
                      required: true,
                      validator: "number",
                      styleClasses: ["col-12 col-md-5", "mb-0"]
                  },
                ]
            },
            {
              styleClasses: ['row', "align-items-center"],
                fields: [
                  {
                      type: "label",
                      label: "Discharge Diagnosis (ICD)",
                      styleClasses: ["col-12 col-md-2", "mb-0"]
                  },
                  {
                        type: "input",
                        inputType: "text",
                        label: "Main diagnosis<span class='requiredLabel'> *</span>",
                        placeholder: "Please specify",
                        model: "mainDiagnosis",
                        validator: "string",
                        required: true,
                        styleClasses: ["col-12 col-md-5", "mb-0"],
                  },
                  {
                        type: "input",
                        inputType: "text",
                        label: "External causes<span class='requiredLabel'> *</span>",
                        placeholder: "Please specify",
                        model: "externalDiagnosis",
                        validator: "string",
                        required: true,
                        styleClasses: ["col-12 col-md-5", "mb-0"],
                  },

                ]
            },
            {
              styleClasses: ['row', 'odd-row', "align-items-end"],
                fields: [
                  {
                    type: "checklist",
                    label: "PSY Mx on Discharge<span class='requiredLabel'> *</span>",
                    model: "PSYMx",
                    required: true,
                    validator: "array",
                    values: [
                      {name: "Transferred to PSY ward", value: 1},
                      {name: "Given appt to PSY clinic", value: 2},
                      {name: "Referred to counsellor", value: 3},
                      {name:"Discharge without any PSY follow-up", value: 4},
                      {name: "Refer community PSY services", value: 5},
                      {name: "Others (Specify)", value: 99}
                    ],
                    styleClasses: ['col-12 col-md-6', 'mb-0'],
                  },
                  {
                        type: "input",
                        inputType: "text",
                        placeholder: "Please specify",
                        model: "PSYMxSpecify",
                        validator: "string",
                        required: true,
                        styleClasses: ["col-12 col-md-6", "mb-0"],
                        visible: function(model) {
                          return model && model.PSYMx.includes(99);
                        }
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
                        styleClasses: 'cancelBtn'
                    },
                    {
                        type: 'submit',
                        onSubmit: ()=>{
                          this.redirectToNext()
                        },
                        label: '',
                        buttonText: "Next",
                        validateBeforeSubmit: true,
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
      this.$router.push({path: '/suicide-risk'})
    },
    redirectToNext(){
      let hospitalManagement = {
        referral: this.model.referral,
        referralSpecify: this.model.referralSpecify,
        arrivalMode: this.model.arrivalMode,
        arrivalSpecify: this.model.arrivalSpecify,
        firstAssessmentDate: this.model.firstAssessmentDate,
        firstAssessmentTime: this.model.firstAssessmentTime,
        physicalConseq: this.model.physicalConseq,
        physicalConseqSpecify: this.model.physicalConseqSpecify,
        admission: this.model.admission,
        admissionSpecify: this.model.admissionSpecify,
        dischargeStatus: this.model.dischargeStatus,
        dischargeDate: this.model.dischargeDate,
        noOfDays: this.model.noOfDays,
        mainDiagnosis: this.model.mainDiagnosis,
        externalDiagnosis: this.model.externalDiagnosis,
        PSYMx: this.model.PSYMx,
        PSYMxSpecify: this.model.PSYMxSpecify
      }
      sessionStorage.setItem('hospitalManagement', JSON.stringify(hospitalManagement))

      this.$router.push({path: '/source-data-producer'})
    }
  },
  created(){
    const hospitalManagement = JSON.parse(sessionStorage.getItem("hospitalManagement"))
    if (hospitalManagement){
      this.model.referral = hospitalManagement.referral,
      this.model.referralSpecify = hospitalManagement.referralSpecify,
      this.model.arrivalMode = hospitalManagement.arrivalMode,
      this.model.arrivalSpecify = hospitalManagement.arrivalSpecify,
      this.model.firstAssessmentDate = hospitalManagement.firstAssessmentDate,
      this.model.firstAssessmentTime = hospitalManagement.firstAssessmentTime,
      this.model.physicalConseq = hospitalManagement.physicalConseq,
      this.model.physicalConseqSpecify = hospitalManagement.physicalConseqSpecify,
      this.model.admission = hospitalManagement.admission,
      this.model.admissionSpecify = hospitalManagement.admissionSpecify,
      this.model.dischargeStatus = hospitalManagement.dischargeStatus,
      this.model.dischargeDate = hospitalManagement.dischargeDate,
      this.model.noOfDays = hospitalManagement.noOfDays,
      this.model.mainDiagnosis = hospitalManagement.mainDiagnosis,
      this.model.externalDiagnosis = hospitalManagement.externalDiagnosis,
      this.model.PSYMx = hospitalManagement.PSYMx,
      this.model.PSYMxSpecify = hospitalManagement.PSYMxSpecify
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
.router-link-exact-active {
  color: whitesmoke !important;
  background: crimson;
  border-radius: .5rem;
}
div.errors.help-block{
  display: none;
  width: 0px;
}
.error-field{
  background: #F9C1C6;
}
/* #app > div:nth-child(2) > div.container > div > div > fieldset:nth-child(4) > div > div > div{
  display:grid;
} */
#app > div:nth-child(2) > div.container > div > div > fieldset:nth-child(4) > div.form-group.valid.required.col-12.col-md-6.field-radios > div > div > label{
  display: block;
}
div.form-group.valid.required.d-block.col-12.col-md-6.field-radios > div{
  display: flex !important;
}
.vue-form-generator .field-checklist .dropList, .vue-form-generator .field-checklist .listbox{
  border: none;
  background: rgb(240, 240, 240);
}
#app > div:nth-child(2) > div.container > div > div > fieldset:nth-child(1) > div.form-group.valid.required.col-12.col-md-6.field-input > label:after{
  display: none;
  width: 0;
}
#app > div:nth-child(2) > div.container > div > div > fieldset:nth-child(2) > div.form-group.valid.required.col-12.col-md-6.field-input > label:after{
  display: none;
  width: 0;
}
#app > div:nth-child(2) > div.container > div > div > fieldset:nth-child(5) > div.form-group.valid.required.col-12.col-md-6.field-input > label:after{
  display: none;
  width: 0;
}
#app > div:nth-child(2) > div.container > div > div > fieldset:nth-child(9) > div.form-group.valid.required.col-12.col-md-6.field-input > label:after{
  display: none;
  width: 0;
}
#app > div:nth-child(2) > div.container > div > div > fieldset:nth-child(4) > div.form-group.valid.required.col-12.col-md-6.field-input > label:after{
  display: none;
  width: 0;
}
.odd-row{
background: rgb(240, 240, 240);
}
#app > div:nth-child(2) > div.container > div > div > fieldset.valid.row.odd-row.align-items-end > div.form-group.valid.required.col-md-6.mb-0.field-checklist > div > div{
  width: 100%;
}
.form-group.required>label:after{
  display: none;
  width: 0px;
}
.requiredLabel{
  color: red;
}
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
