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
      <div class = "mt-4 d-flex justify-content-center">
          <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
      </div>
    </div>

  </div>
</template>

<script>

export default {
data(){
    return{
      model: {
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: '',
        q6: '',
      },
      schema: {
        fields: [
          {
            type: "radios",
            label: "<ol start = '1'><li class='label-width'>Ability to cope with stress/tolerate frustrations<span class='requiredLabel'> *</span></li></ol>",
            model: "q1",
            values: [
              {name: "No", value: 0},
              {name: "Yes", value: 1}
            ],
            required: true,
            validator: 'required',
            styleClasses: ['odd-row', 'mb-0']
          },
          {
            type: "radios",
            label: "<ol start = '2'><li class='label-width'>Strongly held religious/cultural beliefs<span class='requiredLabel'> *</span></li></ol>",
            model: "q2",
            values: [
              {name: "No", value: 0},
              {name: "Yes", value: 1}
            ],
            required: true,
            validator: 'required',
            styleClasses: ['even-row', 'mb-0']
          },
          {
            type: "radios",
            label: "<ol start = '3'><li class='label-width'>Realistic life goals or future plans<span class='requiredLabel'> *</span></li></ol>",
            model: "q3",
            values: [
              {name: "No", value: 0},
              {name: "Yes", value: 1}
            ],
            required: true,
            validator: 'required',
            styleClasses: ['odd-row', 'mb-0']
          },
          {
            type: "radios",
            label: "<ol start = '4'><li class='label-width'>Responsibility to children/beloved pets<span class='requiredLabel'> *</span></li></ol>",
            model: "q4",
            values: [
              {name: "No", value: 0},
              {name: "Yes", value: 1}
            ],
            required: true,
            validator: 'required',
            styleClasses: ['even-row', 'mb-0']
          },
          {
            type: "radios",
            label: "<ol start = '5'><li class='label-width'>Social support<span class='requiredLabel'> *</span></li></ol>",
            model: "q5",
            values: [
              {name: "No", value: 0},
              {name: "Yes", value: 1}
            ],
            required: true,
            validator: 'required',
            styleClasses: ['odd-row', 'mb-0']
          },
          {
            type: "radios",
            label: "<ol start = '6'><li class='label-width'>Positive therapeutic relationship<span class='requiredLabel'> *</span></li></ol>",
            model: "q6",
            values: [
              {name: "No", value: 0},
              {name: "Yes", value: 1}
            ],
            required: true,
            validator: 'required',
            styleClasses: ['even-row', 'mb-0']
          }
        ],
        groups: [
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
      this.$router.push({path: '/risk-factors'})
    },
    redirectToNext(){
      let protectiveFactors = {
        q1: this.model.q1,
        q2: this.model.q2,
        q3: this.model.q3,
        q4: this.model.q4,
        q5: this.model.q5,
        q6: this.model.q6
      }
      sessionStorage.setItem('protectiveFactors', JSON.stringify(protectiveFactors))

      this.$router.push({path: '/self-harm-act-and-suicidal-intent'})
    }
  },
  created(){
    const protectiveFactors = JSON.parse(sessionStorage.getItem("protectiveFactors"))
    if(protectiveFactors){
      this.model.q1 = protectiveFactors.q1,
      this.model.q2 = protectiveFactors.q2,
      this.model.q3 = protectiveFactors.q3,
      this.model.q4 = protectiveFactors.q4,
      this.model.q5 = protectiveFactors.q5,
      this.model.q6 = protectiveFactors.q6
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
ol, ul, dl {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}
.vue-form-generator .field-wrap{
  align-items: center;
}
</style>
