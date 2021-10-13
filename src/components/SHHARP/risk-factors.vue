<template>
  <div>
    <div v-show="showNav">
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
        <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  props: ['hide'],
  data(){
    return{
      showNav: true,
      showButton: true,
      disable: false,
      model: {
        q1: '',
        q1ICD: '',
        q1Specify: '',
        q2: '',
        q3: '',
        q3Specify: '',
        q4: '',
        q4Specify: '',
        q5: '',
        q6: '',
        q6ICD: '',
        q6Specify: '',
        q7: '',
        q7Specify: '',
        q8: '',
        q8Specify: '',
        q9: '',
        q10: '',
        q10Specify: '',
        q11: '',
        q12: '',
      },
      schema: {
        groups: [
            {
              styleClasses: ["row", 'odd-row'],
              fields: [
                {
                  type: "radios",
                  label: "<ol start = '1'><li class='label-width'>Presence of psychiatric disorder<span class='requiredLabel'> *</span></li></ol>",
                  model: "q1",
                  values: [
                    {name: "No", value: 0},
                    {name: "Yes", value: 1}
                  ],
                  required: true,
                  validator: 'required',
                  styleClasses: ['col-md-7', 'odd-row', 'mb-0'],
                  disabled:()=>{
                    return this.disable
                  },
                },
                {
                  type: "vueMultiSelect",
                  placeholder: "Select diagnosis (can select more than 1)",
                  model: "q1Specify",
                  required: true,
                  validator: "required",
                  values: [
                    "one",
                    "two",
                    "three",
                    "four",
                    "five",
                    "six",
                    "seven",
                    "eight"
                  ],
                  selectOptions: {
                    multiple: true,
                    closeOnSelect: false,
                    searchable: true,
                    showLabels: false,
                    clearOnSelect: true,
                    limit: 3,
                    maxHeight: 200
                  },
                  styleClasses: ['col-md-5', 'mb-0'],
                  visible: function(model) {
                    return model && model.q1 == 1;
                  },
                  disabled:()=>{
                    return this.disable
                  },
                }
              ]
            },
            {
              styleClasses: ["row", 'even-row'],
              fields: [
                {
                  type: "radios",
                  label: "<ol start = '2'><li class='label-width'>Hopelessness or despair<span class='requiredLabel'> *</span></li></ol>",
                  model: "q2",
                  values: [
                    {name: "No", value: 0},
                    {name: "Yes", value: 1}
                  ],
                  required: true,
                  validator: 'required',
                  styleClasses: ['col-md-7', 'even-row', 'mb-0'],
                  disabled:()=>{
                    return this.disable
                  },
                },
              ]
            },
            {
              styleClasses: ["row", 'odd-row'],
              fields: [
                {
                  type: "radios",
                  label: "<ol start = '3'><li class='label-width'> Previous suicide attempt <span class='requiredLabel'> *</span></li></ol>",
                  model: "q3",
                  values: [
                    {name: "No", value: 0},
                    {name: "Yes", value: 1}
                  ],
                  required: true,
                  validator: 'required',
                  styleClasses: ['col-md-7', 'odd-row', 'mb-0'],
                  disabled:()=>{
                    return this.disable
                  },
                },
                {
                  type: "input",
                  inputType: "number",
                  placeholder: "Please specify (times)",
                  model: "q3Specify",
                  min: 0,
                  required: true,
                  validator: "number",
                  styleClasses: ['col-md-5', 'mb-0'],
                  visible: function(model) {
                    return model && model.q3 == 1;
                  },
                  disabled:()=>{
                    return this.disable
                  },
                },
              ]
            },
            {
              styleClasses: ["row", 'even-row'],
              fields: [
                {
                  type: "radios",
                  label: "<ol start = '4'><li class='label-width'>Presence of substance use/abuse<span class='requiredLabel'> *</span></li></ol>",
                  model: "q4",
                  values: [
                    {name: "No", value: 0},
                    {name: "Yes", value: 1}
                  ],
                  required: true,
                  validator: 'required',
                  styleClasses: ['col-md-7', 'even-row', 'mb-0'],
                  disabled:()=>{
                    return this.disable
                  },
                },
                {
                  type: "vueMultiSelect",
                  placeholder: "Please specify",
                  model: "q4Specify",
                  required: true,
                  validator: "required",
                  values: [
                    {name: "Alcohol", value: 0},
                    {name: "Opioids", value: 1},
                    {name: "Cannabinoids", value: 2},
                    {name: "Sedatives or hypnotics", value: 3},
                    {name: "Cocaine", value: 4},
                    {name: "Other stimulants (including amphetamine-type)", value: 5},
                    {name: "Hallucinogens", value: 6},
                    {name: "Volatile solvents", value: 7}
                  ],
                  selectOptions: {
                    multiple: false,
                    closeOnSelect: true,
                    maxHeight: 200,
                    showLabels: false,
                    key: "value",
                    label: "name"
                  },
                  styleClasses: ['col-md-5', 'mb-0'],
                  visible: function(model) {
                    return model && model.q4 == 1;
                  },
                  disabled:()=>{
                    return this.disable
                  },
                },
              ]
            },
            {
              styleClasses: ["row", 'odd-row'],
              fields: [
                {
                  type: "radios",
                  label: "<ol start = '5'><li class='label-width'>Family history of suicidal behaviour<span class='requiredLabel'> *</span></li></ol>",
                  model: "q5",
                  values: [
                    {name: "No", value: 0},
                    {name: "Yes", value: 1}
                  ],
                  required: true,
                  validator: 'required',
                  styleClasses: ['col-md-7', 'odd-row', 'mb-0'],
                  disabled:()=>{
                    return this.disable
                  },
                },
              ]
            },
            {
              styleClasses: ["row", 'even-row'],
              fields: [
                {
                  type: "radios",
                  label: "<ol start = '6'><li class='label-width'>Family history of psychiatric disorder<span class='requiredLabel'> *</span></li></ol>",
                  model: "q6",
                  values: [
                    {name: "No", value: 0},
                    {name: "Yes", value: 1}
                  ],
                  required: true,
                  validator: 'required',
                  styleClasses: ['col-md-7', 'even-row', 'mb-0'],
                  disabled:()=>{
                    return this.disable
                  },
                },
                {
                  type: "vueMultiSelect",
                  placeholder: "Select diagnosis (can select more than 1)",
                  model: "q6Specify",
                  required: true,
                  validator: "required",
                  values: [
                    "one",
                    "two",
                    "three",
                    "four",
                    "five",
                    "six",
                    "seven",
                    "eight"
                  ],
                  selectOptions: {
                    multiple: true,
                    closeOnSelect: false,
                    searchable: true,
                    showLabels: false,
                    clearOnSelect: true,
                    closeOnSelect: false,
                    limit: 3,
                    maxHeight: 200
                  },
                  styleClasses: ['col-md-5', 'mb-0'],
                  visible: function(model) {
                    return model && model.q6 == 1;
                  },
                  disabled:()=>{
                    return this.disable
                  },
                }
              ]
            },
            {
              styleClasses: ["row", 'odd-row'],
              fields: [
                {
                  type: "radios",
                  label: "<ol start = '7'><li class='label-width'>Family histroy of substance abuse<span class='requiredLabel'> *</span></li></ol>",
                  model: "q7",
                  values: [
                    {name: "No", value: 0},
                    {name: "Yes", value: 1}
                  ],
                  required: true,
                  validator: 'required',
                  styleClasses: ['col-md-7', 'odd-row', 'mb-0'],
                  disabled:()=>{
                    return this.disable
                  },
                },
                {
                  type: "vueMultiSelect",
                  placeholder: "Please specify",
                  model: "q7Specify",
                  required: true,
                  validator: "required",
                  values: [
                    {name: "Alcohol", value: 0},
                    {name: "Opioids", value: 1},
                    {name: "Cannabinoids", value: 2},
                    {name: "Sedatives or hypnotics", value: 3},
                    {name: "Cocaine", value: 4},
                    {name: "Other stimulants (including amphetamine-type)", value: 5},
                    {name: "Hallucinogens", value: 6},
                    {name: "Volatile solvents", value: 7}
                  ],
                  selectOptions: {
                    multiple: false,
                    closeOnSelect: true,
                    maxHeight: 200,
                    showLabels: false,
                    label: "name",
                    key: "value"
                  },
                  styleClasses: ['col-md-5', 'mb-0'],
                  visible: function(model) {
                    return model && model.q7 == 1;
                  },
                  disabled:()=>{
                    return this.disable
                  },
                },
              ]
            },
            {
              styleClasses: ["row", 'even-row'],
              fields: [
                {
                  type: "radios",
                  label: "<ol start = '8'><li class='label-width'>Stressful life events<span class='requiredLabel'> *</span></li></ol>",
                  model: "q8",
                  values: [
                    {name: "No", value: 0},
                    {name: "Yes", value: 1}
                  ],
                  required: true,
                  validator: 'required',
                  styleClasses: ['col-md-7', 'even-row', 'mb-0'],
                  disabled:()=>{
                    return this.disable
                  },
                },
                {
                  type: "vueMultiSelect",
                  placeholder: "Please specify",
                  model: "q8Specify",
                  required: true,
                  validator: "required",
                  values: [
                    {name: "Intimate relationship problems", value: 0},
                    {name: "Other relationship problems", value: 1},
                    {name: "Death of loved one", value: 2},
                    {name: "Job-related problems", value: 3},
                    {name: "Financial problems", value: 4},
                    {name: "Academic-related problems", value: 5},
                    {name: "Criminals/Legal problems", value: 6}
                  ],
                  selectOptions: {
                    multiple: false,
                    closeOnSelect: true,
                    maxHeight: 200,
                    showLabels: false,
                    label: "name",
                    key: "value"
                  },
                  styleClasses: ['col-md-5', 'mb-0'],
                  visible: function(model) {
                    return model && model.q8 == 1;
                  },
                  disabled:()=>{
                    return this.disable
                  },
                },
              ]
            },
            {
              styleClasses: ["row", 'odd-row'],
              fields: [
                {
                  type: "radios",
                  label: "<ol start = '9'><li class='label-width'>Isolation, rejection, or feelings of shame<span class='requiredLabel'> *</span></li></ol>",
                  model: "q9",
                  values: [
                    {name: "No", value: 0},
                    {name: "Yes", value: 1}
                  ],
                  required: true,
                  validator: 'required',
                  styleClasses: ['col-md-7', 'odd-row', 'mb-0'],
                  disabled:()=>{
                    return this.disable
                  },
                },
              ]
            },
            {
              styleClasses: ["row", 'even-row'],
              fields: [
                {
                  type: "radios",
                  label: "<ol start = '10'><li class='label-width'>Chronic physical illness or condition<span class='requiredLabel'> *</span></li></ol>",
                  model: "q10",
                  values: [
                    {name: "No", value: 0},
                    {name: "Yes", value: 1}
                  ],
                  required: true,
                  validator: 'required',
                  styleClasses: ['col-md-7', 'even-row', 'mb-0'],
                  disabled:()=>{
                    return this.disable
                  },
                },
                {
                  type: "vueMultiSelect",
                  placeholder: "Please specify (can choose more than 1)",
                  model: "q10Specify",
                  required: true,
                  validator: "required",
                  values: [
                    "one",
                    "two",
                    "three",
                    "four",
                    "five",
                    "six",
                    "seven",
                    "eight"
                  ],
                  selectOptions: {
                    multiple: true,
                    closeOnSelect: false,
                    searchable: true,
                    showLabels: false,
                    clearOnSelect: true,
                    closeOnSelect: false,
                    limit: 3,
                    maxHeight: 200
                  },
                  styleClasses: ['col-md-5', 'mb-0'],
                  visible: function(model) {
                    return model && model.q10 == 1;
                  },
                  disabled:()=>{
                    return this.disable
                  },
                }
              ]
            },
            {
              styleClasses: ["row", 'odd-row'],
              fields: [
                {
                  type: "radios",
                  label: "<ol start = '11'><li class='label-width'>History of physical, sexual or emotional abuse<span class='requiredLabel'> *</span></li></ol>",
                  model: "q11",
                  values: [
                    {name: "No", value: 0},
                    {name: "Yes", value: 1}
                  ],
                  required: true,
                  validator: 'required',
                  styleClasses: ['col-md-7', 'odd-row', 'mb-0'],
                  disabled:()=>{
                    return this.disable
                  },
                },
              ]
            },
            {
              styleClasses: ["row", 'even-row'],
              fields: [
                {
                  type: "radios",
                  label: "<ol start = '12'><li class='label-width'>Access to lethal methods/weapons<span class='requiredLabel'> *</span></li></ol>",
                  model: "q12",
                  values: [
                    {name: "No", value: 0},
                    {name: "Yes", value: 1}
                  ],
                  required: true,
                  validator: 'required',
                  styleClasses: ['col-md-7', 'even-row', 'mb-0'],
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
                      type: 'submit',
                      onSubmit: ()=>{
                        this.redirectToNext()
                      },
                      label: '',
                      buttonText: "Next",
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
    redirectToNext(){
      let riskFactors = {
        q1: this.model.q1,
        q1ICD: this.model.q1ICD,
        q1Specify: this.model.q1Specify,
        q2: this.model.q2,
        q3: this.model.q3,
        q3Specify: this.model.q3Specify,
        q4: this.model.q4,
        q4Specify: this.model.q4Specify,
        q5: this.model.q5,
        q6: this.model.q6,
        q6ICD: this.model.q6ICD,
        q6Specify: this.model.q6Specify,
        q7: this.model.q7,
        q7Specify: this.model.q7Specify,
        q8: this.model.q8,
        q8Specify: this.model.q8Specify,
        q9: this.model.q9,
        q10: this.model.q10,
        q10Specify: this.model.q10Specify,
        q11: this.model.q11,
        q12: this.model.q12
      }
      sessionStorage.setItem('riskFactors', JSON.stringify(riskFactors))

      this.$router.push({path: '/protective-factors'})
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

    const riskFactors = JSON.parse(sessionStorage.getItem("riskFactors"))
    if (riskFactors){
        this.model.q1 = riskFactors.q1,
        this.model.q1ICD = riskFactors.q1ICD,
        this.model.q1Specify = riskFactors.q1Specify,
        this.model.q2 = riskFactors.q2,
        this.model.q3 = riskFactors.q3,
        this.model.q3Specify = riskFactors.q3Specify,
        this.model.q4 = riskFactors.q4,
        this.model.q4Specify = riskFactors.q4Specify,
        this.model.q5 = riskFactors.q5,
        this.model.q6 = riskFactors.q6,
        this.model.q6ICD = riskFactors.q6ICD,
        this.model.q6Specify = riskFactors.q6Specify,
        this.model.q7 = riskFactors.q7,
        this.model.q7Specify = riskFactors.q7Specify,
        this.model.q8 = riskFactors.q8,
        this.model.q8Specify = riskFactors.q8Specify,
        this.model.q9 = riskFactors.q9,
        this.model.q10 = riskFactors.q10,
        this.model.q10Specify = riskFactors.q10Specify,
        this.model.q11 = riskFactors.q11,
        this.model.q12 = riskFactors.q12
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
  background: #F9C1C6 !important;
}
.form-group.required>label:after{
  display: none;
  width: 0px;
}
.requiredLabel{
  color: red;
}
.col-md-4{
  flex-flow: column-reverse;
}
ol, ul, dl {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}
.vue-form-generator .field-wrap{
  align-items: center;
}
@media (max-width: 320px) {
    .label-width{
      width:260px
    }
}
@media (min-width: 321px) and (max-width: 766px) {
    .label-width{
      width:300px
    }
}
@media (min-width: 767px) and (max-width: 1200px) {
    .label-width{
      width:360px
    }
}
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
