<template>
<div>
  <PortalHeader :testName="'World Health Organization Disability Assessment Schedule 2.0 (WHODAS 2.0)'"></PortalHeader>
  
  <div class="container">
    <div class = "container" id = "test">
      <Head :domain="'UNDERSTANDING AND COMMUNICATING'" :domainBM="'PEMAHAMAN DAN KOMUNIKASI'"></Head>
      
      <div class = "mt-4">
        <vue-form-generator :schema="s1_schema" :model="s1_model" :options="formOptions"></vue-form-generator>
      </div>

      <div class = "row justify-content-center" style="margin-top:100px">
          <p class = "page pactive">1</p>
          <p class = "page">2</p>
          <p class = "page">3</p>
          <p class = "page">4</p>
          <p class = "page">5</p>
          <p class = "page">6</p>
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
      s1_model: {
        Q1: '',
        Q2: '',
        Q3: '',
        Q4: '',
        Q5: '',
        Q6: '',
    },
      s1_schema: {
        fields: [
          {
          id: "whodass-radio",
          type: "radios",
          label: "<ol><li class='label-width'>Concentrating on doing something for ten minutes?<span class='requiredLabel'> *</span><br><span class='bm'>Menumpu perhatian dalam melakukan sesuatu selama sepuluh minit?</span></li></ol>",
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
          label: "<ol start = '2'><li class='label-width'>Remembering to do important things?<span class='requiredLabel'> *</span><br><span class='bm'>Ingat untuk melakukan perkara-perkara penting?</span></li></ol>",
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
          label: "<ol start = '3'><li class='label-width'>Analyzing and finding solutions to problems in day-to-day life?<span class='requiredLabel'> *</span><br><span class='bm'>Menganalisa dan mencari penyelesaian kepada masalah dalam kehidupan seharian?</span></li></ol>",
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
          label: "<ol start = '4'><li class='label-width'>Learning a new task, for example, learning how to get to a new place?<span class='requiredLabel'> *</span><br><span class='bm'>Belajar satu tugasan baharu, contohnya, belajar bagaimana untuk pergi ke tempat baharu?</span></li></ol>",
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
        {
          id: "whodass-radio",
          type: "radios",
          label: "<ol start = '5'><li class='label-width'>Generally understanding what people say?<span class='requiredLabel'> *</span><br><span class='bm'>Secara umum, memahami apa yang dinyatakan orang?</span></li></ol>",
          model: "Q5",
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
          label: "<ol start = '6'><li class='label-width'>Starting and maintaining a conversation?<span class='requiredLabel'> *</span><br><span class='bm'>Memulakan dan mengekalkan sebuah perbualan?</span></li></ol>",
          model: "Q6",
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
                  id: "rtn",
                  type: 'submit',
                  label: '',
                  onSubmit: ()=>{
                    this.redirectToHome()
                  },
                  buttonText: 'Return',
                  validateBeforeSubmit: false
                },
                {
                  type: 'submit',
                  label: '',
                  onSubmit:() =>{
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
      },
    }
    
  },
  created(){
    if (sessionStorage.getItem("4_s1") != null) {
      this.data = JSON.parse(sessionStorage.getItem("4_s1"));
      this.s1_model = this.data.ans
    }
  },
  methods: {
    async redirectToNext(){
      const url = 'http://127.0.0.1:8000/api/getTestRange?type=4'
      const response = await this.$axios.get(url);
      this.info = response.data;

      assessResults(this.s1_model, this.info, [0,1,2,3,4], "s1", 24)
      this.$router.push({path: '/whodas_2'})
    },
  },
 
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
