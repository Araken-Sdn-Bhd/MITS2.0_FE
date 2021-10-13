<template>
<div>
  <PortalHeader :testName="'World Health Organization Disability Assessment Schedule 2.0 (WHODAS 2.0)'"></PortalHeader>

  <div class="container">
    <div class = "container" id = "test">
      <Head :domain="'LIFE ACTIVITIES - SCHOOL / WORK'" :domainBM="'AKTIVIT-AKTIVITI KEHIDUPAN - SEKOLAH / KERJA'"></Head>
      
      <div class = "mt-4">
        <vue-form-generator :schema="s6_schema" :model="s6_model" :options="formOptions"></vue-form-generator>
      </div>

      <div class = "row justify-content-center" style="margin-top:100px">
          <p class = "page">1</p>
          <p class = "page">2</p>
          <p class = "page">3</p>
          <p class = "page">4</p>
          <p class = "page">5</p>
          <p class = "page pactive">6</p>
          <p class = "page">7</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import assessResults from '../Whodas/function_whodas.js'
import PortalHeader from '../PortalHeader'
import Head from './Whodas_head'


export default {
  components: {PortalHeader, Head},
  data(){
    return{
      data: {},
      info : null,
      s6_model: {
      Q1: '',
      Q2: '',
      Q3: '',
      Q4: '',
    },
      s6_schema: {
        fields: [
          {
          id: "whodass-radio",
          type: "radios",
          label: "<ol><li class='label-width'>Your day-to-day work/school?<span class='requiredLabel'> *</span><br><span class='bm'>Kerja/persekolahan harian anda?</span></li></ol>",
          model: "Q1",
          values: [{value:0, name:1},
                  {value:1, name:2},
                  {value:2, name:3},
                  {value:3, name:4},
                  {value:4, name:5}],
          required: 'true',
          validator: 'required',
          styleClasses: 'odd-row'
        },
        {
          id: "whodass-radio",
          type: "radios",
          label: "<ol start = '2'><li class='label-width'>Doing your most important work/school tasks well?<span class='requiredLabel'> *</span><br><span class='bm'>Melakukan kerja/tugasan sekolah anda yang paling penting dengan baik?</span></li></ol>",
          model: "Q2",
          values: [{value:0, name:1},
                  {value:1, name:2},
                  {value:2, name:3},
                  {value:3, name:4},
                  {value:4, name:5}],
          required: 'true',
          validator: 'required',
          styleClasses: 'even-row'
        },
        {
          id: "whodass-radio",
          type: "radios",
          label: "<ol start = '3'><li class='label-width'>Getting all of the work donethat you need to do?<span class='requiredLabel'> *</span><br><span class='bm'>Menyiapkan semua kerja yang anda perlu lakukan?</span></li></ol>",
          model: "Q3",
          values: [{value:0, name:1},
                  {value:1, name:2},
                  {value:2, name:3},
                  {value:3, name:4},
                  {value:4, name:5}],
          required: 'true',
          validator: 'required',
          styleClasses: 'odd-row'

        },
        {
          id: "whodass-radio",
          type: "radios",
          label: "<ol start = '4'><li class='label-width'>Getting your work done as quickly as needed?<span class='requiredLabel'> *</span><br><span class='bm'>Menyelesaikan kerja anda secepat seperti yang diperlukan?</span></li></ol>",
          model: "Q4",
          values: [{value:0, name:1},
                  {value:1, name:2},
                  {value:2, name:3},
                  {value:3, name:4},
                  {value:4, name:5}],
          required: 'true',
          validator: 'required',
          styleClasses: 'even-row'
        },
        ],
        groups: [
          {
              styleClasses: 'groupBtn',
              fields: [
                {
                  type: 'submit',
                  label: '',
                  onSubmit: ()=>{
                    this.redirectToPrevious()
                  },
                  buttonText: 'Previous',
                  validateBeforeSubmit: false
                },
                {
                  type: 'submit',
                  label: '',
                  onSubmit: ()=>{
                    this.redirectToNext()
                  },
                  buttonText: 'Next',
                  validateBeforeSubmit:  true,
                }
              ]
            }
          ]
      },
      formOptions: {
        validateAfterLoad: false,
        validateAfterChanged: true,
        validateAsync: false,
        validationErrorClass: "error-field"
      }
    }
  },
  created(){
    if (sessionStorage.getItem("4_s6") != null) {
      this.data = JSON.parse(sessionStorage.getItem("4_s6"));
      this.s6_model = this.data.ans
    }
  },
  methods: {
    redirectToPrevious(){
      this.$router.push({path: '/whodas_5'})
    },
    async redirectToNext(){
      const url = 'http://127.0.0.1:8000/api/getTestRange?type=4'
      const response = await this.$axios.get(url);
      this.info = response.data;

      assessResults(this.s6_model, this.info, [25,26,27,28,29], "s6", 16)
      this.$router.push({path: '/whodas_7'})
    },
  }
}
</script>

<style>
#test {
  box-shadow: 0px 10px 15px #6b6b6b9c;
  padding: 40px 40px 40px 40px;
  border-radius: 20px;
  margin-bottom: 50px;
}
.page{
  text-align: center;
  padding: 6px 12px;
  background: rgb(241, 241, 241);
  border-radius: 7px;
  border-color: grey;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  width: 30px;
  margin: 5px 5px
}
.pactive{
  background:#337ab7;
  color: white;
}
.label-width{
  width: 650px;
}
div.errors.help-block{
  display: none;
  width: 0px;
}
.error-field{
  background: #F9C1C6;
}
.form-group.required>label:after{
  display: none;
  width: 0px;
}
.requiredLabel{
  color: red;
}

@media (max-width: 768px) {
    #test {
        padding: 40px 20px 100px 20px;
        margin-bottom: 50px;
    }
    .label-width{
      width:100%
    }
}
@media (min-width: 768px) and (max-width: 992px) {
    #test {
        padding: 40px 20px 100px 20px;
        margin-bottom: 50px;
    }
    .label-width{
      width:320px
    }
}
@media (min-width: 992px) and (max-width: 1200px) {
    #test {
        padding: 40px 20px 100px 20px;
        margin-bottom: 50px;
    }
    .label-width{
      width:500px
    }
}
</style>
