<template>
<div class="container shharp">
  <h1 id="demo">Demographic</h1>
    <div class = "mt-4">
        <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
    </div>
</div>
</template>

<script>
export default {
  data(){
    return{
      data : {},
      model: {
          fullName: '',
          nric_type:'',
          nric_num:'',
          nric_specify:'',
          nric_specify_num:'',
          mrn: '',
          dob: '',
          age: '',
          employment: '',
          sex: '',
          citizen: '',
          citizen_specify:'',
          ethnic: '',
          ethnic_specify:'',
          income: '',
          religion: '',
          religion_specify:'',
          marital: '',
          marital_specify: '',
          education: '',
          education_specify: '',
    },
      schema: {
        fields: [
        {
            type: "input",
            inputType: "text",
            label: "Patient's Name (As in NRIC)",
            model: "fullName",
            validator: "string",
            required: true,
        },
        {
            type: "select",
            label: "NRIC Type",
            model: "nric_type",
            values: [
                    {id:1,name:"Old IC"},
                    {id:2,name:"New IC"},
                    {id:3,name:"Army"},
                    {id:4,name:"Police"},
                    {id:5,name:"Mother's IC"},
                    {id:6,name:"Father's IC"},
                    {id:7,name:"Work Permit"},
                    {id:8,name:"Passport"},
                    {id:9,name:"Birth Certificate"},
                    {id:10,name:"Pension Card"},
                    {id:99,name:"Others (Please Specify)"}
                    ],
            selectOptions : {
                hideNoneSelectedText: true,
            },
            styleClasses : "col-md-7",
            validator: "required",
            required: true
        },
        {
            type: "cleave",
            label: "&nbsp",
            model: "nric_num",
            cleaveOptions: {
              blocks: [20],
              numericOnly: true,
            },
            placeholder:"Please Insert No.",
            visible: function(model) {
              if(model.nric_type != 99){
                return model && model.nric_type;
              }
            },
            styleClasses : "col-md-5",
            required: true
        },
        {
            type: "input",
            inputType: "text",
            label: "&nbsp",
            model: "nric_specify",
            validator: "string",
            placeholder: "Please Specify",
            styleClasses : "col-md-2",
            visible: function(model) {
              return model && model.nric_type == 99;
            },
            required: true
        },
        {
            type: "input",
            label: "&nbsp",
            inputType: "text",
            model: "nric_specify_num",
            placeholder:"Please Insert No.",
            visible: function(model) {
              if(model.nric_specify && model.nric_type == 99 ){
                return model && model.nric_specify;
              }
              else if(model.nric_type == 99){
                return false;
              }
            },
            styleClasses : "col-md-3",
            validator: "string",
            required: true
        },
        {
            type: "cleave",
            label: "Hospital's MRN",
            model: "mrn",
            cleaveOptions: {
                blocks: [8],
                numericOnly: true
            },
            styleClasses : "col-md-7",
        },
        {
            type: "input",
            inputType: "date",
            label: "Date of Birth",
            model: "dob",
            validator: "date",
            format: "YYYY-MM-DD",
            styleClasses : "col-md-7",
            onChanged: function(model) {
              var d = new Date();
                model.age = d.getFullYear() - model.dob.substring(0, 4);
            }
        },
        {
          type: "input",
          inputType: "number",
          label: "Age",
          model: "age",
          validator: "number",
          styleClasses : "col-md-7"
        },
        {
          type: "select",
          label: "Employment Status",
          model: "employment",
          values: [
                  {id:1, name:"Disable permanently sick"},
                  {id:2, name:"Employee"},
                  {id:3, name:"Employer"},
                  {id:4, name:"Homemaker"},
                  {id:5, name:"Own account worker"},
                  {id:6, name:"Retired"},
                  {id:7, name:"Student"},
                  {id:8, name:"Unemployed"},
                  {id:9, name:"Unpaid family worker"},
                  {id:10, name:"Armed services"},
                  ],
          selectOptions : {
              hideNoneSelectedText: true,
          },
          styleClasses : "col-md-6",
          validator: "required",
          styleClasses : "col-md-7",
        },
        {
          type: "radios",
          label: "Sex",
          model: "sex",
          values: [
            {value:1, name:"Male"},
            {value:2, name:"Female"},
          ],
          validator: 'required',
          styleClasses : "col-md-7",
        },
        {
          type: "select",
          label: "Citizen",
          model: "citizen",
          values: [
                  {id:1, name:"Citizen"},
                  {id:2, name:"Permanent Resident"},
                  {id:3, name:"Non-Citizen (Please specify country of origin)"},
                  ],
          selectOptions : {
              hideNoneSelectedText: true,
          },
          styleClasses : "col-md-7",
          validator: "required",
        },
        {
          type: "select",
          label: "Country of origin",
          model: "citizen_specify",
          values: [
                  {id:"AF", name:"Afghanistan"},
                  {id:"AX", name:"Åland Islands"},
                  {id:"AL", name:"Albania"},
                  {id:"DZ", name:"Algeria"},
                  {id:"AS", name:"American Samoa"},
                  {id:"AD", name:"Andorra"},
                  {id:"AO", name:"Angola"},
                  {id:"AI", name:"Anguilla"},
                  ],
          selectOptions : {
              hideNoneSelectedText: true,
          },
          styleClasses : "col-md-5",
          validator: "required",
          visible: function(model) {
            return model && model.citizen == 3;
          }
        },
        {
          type: "select",
          label: "Ethnic Group",
          model: "ethnic",
          values: [
                  {id:1,name:"Malay"},
                  {id:2,name:"Indian"},
                  {id:3,name:"Chinese"},
                  {id:4,name:"Orang Asli"},
                  {id:5,name:"Bumiputera Sabah"},
                  {id:6,name:"Bumiputera Sarawak"},
                  {id:99,name:"Others (Please specify)"},
                  ],
          selectOptions : {
              hideNoneSelectedText: true,
          },
          validator: "required",
          styleClasses : "col-md-7",
        },
        {
            type: "input",
            inputType: "text",
            label: "&nbsp",
            model: "ethnic_specify",
            validator: "string",
            placeholder: "Please Specify",
            styleClasses : "col-md-5",
            visible: function(model) {
              return model && model.ethnic == 99;
            }
        },
        {
          type: "select",
          label: "Household Income Status",
          model: "income",
          values: [
                  {id:1, name:"Less than RM 2,000"},
                  {id:2, name:"RM 2,000 - RM 3,999"},
                  {id:3, name:"RM 4,000 - RM 5,999"},
                  {id:4, name:"RM 6,000 - RM 7,999"},
                  {id:5, name:"RM 8,000 - RM 9,999"},
                  {id:6, name:"RM 10,000 - RM 11,999"},
                  {id:7, name:"RM 12,000 - RM 13,999"},
                  {id:8, name:"RM 14,000 - RM 15,999"},
                  {id:9, name:"RM 16,000 - RM 17,999"},
                  {id:10, name:"RM 18,000 - RM 19,999"},
                  {id:11, name:"RM 20,000 and above"},
                  ],
          selectOptions : {
              hideNoneSelectedText: true,
          },
          styleClasses : "col-md-7",
          validator: "required",
        },
        {
          type: "select",
          label: "Religion",
          model: "religion",
          values: [
                  {id:1,name:"Islam"},
                  {id:2,name:"Christianity"},
                  {id:3,name:"Buddhism"},
                  {id:4,name:"Hinduism"},
                  {id:5,name:"Sikhism"},
                  {id:6,name:"Atheist"},
                  {id:7,name:"Taoism"},
                  {id:8,name:"Confucianism"},
                  {id:9,name:"Bahaism"},
                  {id:10,name:"Animism"},
                  {id:99,name:"Others (Please specify)"},
                  ],
          selectOptions : {
              hideNoneSelectedText: true,
          },
          styleClasses : "col-md-7",
          validator: "required",
        },
        {
            type: "input",
            inputType: "text",
            label: "&nbsp",
            model: "religion_specify",
            validator: "string",
            placeholder: "Please Specify",
            styleClasses : "col-md-5",
            visible: function(model) {
              return model && model.religion == 99;
            }
        },
        {
          type: "select",
          label: "Marital Status",
          model: "marital",
          values: [
                  {id:1,name:"Single"},
                  {id:2,name:"Married"},
                  {id:3,name:"Windowed"},
                  {id:4,name:"Divorced"},
                  {id:5,name:"De-facto"},
                  {id:99,name:"Others (Please specify)"}
                  ],
          selectOptions : {
              hideNoneSelectedText: true,
          },
          validator: "required",
          styleClasses : "col-md-7",
        },
        {
            type: "input",
            inputType: "text",
            label: "&nbsp",
            model: "marital_specify",
            validator: "string",
            placeholder: "Please Specify",
            styleClasses : "col-md-5",
            visible: function(model) {
              return model && model.marital == 99;
            }
        },
        {
          type: "select",
          label: "Highest Education",
          model: "education",
          values: [
                  {id:1,name:"None"},
                  {id:2,name:"Primary education"},
                  {id:3,name:"Secondary education"},
                  {id:4,name:"Tertiary"},
                  {id:99,name:"Others (Please specify)"},
                  ],
          selectOptions : {
              hideNoneSelectedText: true,
          },
          validator: "required",
          styleClasses : "col-md-7",
        },
        {
            type: "input",
            inputType: "text",
            label: "&nbsp",
            model: "education_specify",
            validator: "string",
            placeholder: "Please Specify",
            styleClasses : "col-md-5",
            visible: function(model) {
              return model && model.education == 99;
            }
        },
        ],
        groups : [
          {
            styleClasses: 'groupBtn',
              fields: [
                {
                  type: 'submit',
                  label: '',
                  onSubmit: (model)=>{
                    sessionStorage.setItem("DM_data", JSON.stringify(model));
                  },
                  buttonText: 'Submit',
                  validateBeforeSubmit: true
                },
              ]
          }
        ]
      },
      formOptions: {
        validateAfterLoad: false,
        validateAfterChanged: true,
        validateAsync: false,
      },
    }

  },
  methods: {
    redirectToPrevious(){
      this.$router.push({path: '/whodas_3'})
    },
    redirectToNext(){
      this.$router.push({path: '/whodas_5'})
    },
  },
  created(){
    if (sessionStorage.getItem("DM_data") != null) {
      this.data = JSON.parse(sessionStorage.getItem("DM_data"));
      
      this.model.fullName = this.data.fullName
      this.model.nric_type = this.data.nric_type
      this.model.nric_num = this.data.nric_num
      this.model.nric_specify = this.data.nric_specify
      this.model.nric_specify_num = this.data.nric_specify_num
      this.model.mrn = this.data.mrn
      this.model.dob = this.data.dob
      this.model.age = this.data.age
      this.model.employment = this.data.employment
      this.model.sex = this.data.sex
      this.model.citizen = this.data.citizen
      this.model.citizen_specify = this.data.citizen_specify
      this.model.ethnic = this.data.ethnic
      this.model.ethnic_specify = this.data.ethnic_specify
      this.model.income = this.data.income
      this.model.religion = this.data.religion
      this.model.religion_specify = this.data.religion_specify
      this.model.marital = this.data.marital
      this.model.marital_specify = this.data.marital_specify
      this.model.education = this.data.education
      this.model.education_specify = this.data.education_specify
  }
}
}
</script>

<style scoped>
#demo{
  padding: 10px;
  margin-top: 20px;
}
.shharp{
  width: 80%;
  border: 2px solid rgb(194, 194, 194);
  border-radius: 10px;
  padding-bottom: 90px;
  margin-bottom: 50px;
}
.requiredLabel{
  color: red;
}

@media (max-width: 472px){
    #demo{
      font-size: 3p0px;
    }
}
</style>
