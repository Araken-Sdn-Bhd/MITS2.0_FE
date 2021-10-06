<template>
<div class="container">
  <h1 id="whodass">World Health Organization<br>Disability Assessment Schedule 2.0 (WHODAS 2.0)</h1>

  <div class = "container" id = "test">
    <h4>In the last 30 days, how much difficulty did you have in:
        <br><span class="hBM">Sepanjang 30 hari yang lalu, berapa banyak kesukaran yang anda telah alami dalam:</span>
    </h4>
    <div id="subques">
        <h5>PARTICIPATION IN SOCIETY</h5>
    </div>

    <div class ="row">
      <div class="col-md">
        <div class = "r">
            <p id = "num">1</p>
            <p class="indicator">None<br><span class="bm">Tiada</span></p>
        </div>
      </div>
      <div class="col-md">
        <div class = "r">
            <p id = "num">2</p>
            <p class="indicator">Mild<br><span class="bm">Ringan</span></p>
        </div>
      </div>
      <div class="col-md">
        <div class = "r">
            <p id = "num">3</p>
            <p class="indicator">Moderate<br><span class="bm">Sederhana</span></p>
        </div>
      </div>
      <div class="col-md">
        <div class = "r">
            <p id = "num">4</p>
            <p class="indicator">Severe<br><span class="bm">Teruk</span></p>
        </div>
      </div>
      <div class="col-md-auto">
        <div class = "r">
            <p id = "num">5</p>
            <p class="indicator">Extreme or cannot do<br><span class="bm">Melampau atau tidak dapat dilakukan</span></p>
        </div>
      </div>
    </div>

    <div class = "mt-4">
      <vue-form-generator :schema="s7_schema" :model="s7_model" :options="formOptions"></vue-form-generator>
    </div>

    <div class = "row justify-content-center" style="margin-top:100px">
        <p class = "page">1</p>
        <p class = "page">2</p>
        <p class = "page">3</p>
        <p class = "page">4</p>
        <p class = "page">5</p>
        <p class = "page">6</p>
        <p class = "page pactive">7</p>
    </div>
  </div>
</div>
</template>

<script>
import assessResults from '../Whodas/function_whodas.js'

export default {
  data(){
    return{
      data: {},
      info : null,
      s7_model: {
      Q1: '',
      Q2: '',
      Q3: '',
      Q4: '',
      Q5: '',
      Q6: '',
      Q7: '',
      Q8: '',
    },
      s7_schema: {
        fields: [
          {
          id: "whodass-radio",
          type: "radios",
          label: "<ol><li class='label-width'>How much of a problem did you have in joining in community activities(for example, festivities, religious, or other activities) in the same way as anyone else can?<span class='requiredLabel'> *</span><br><span class='bm'>Berapa banyak masalah yang anda alami dalam menyertai aktiviti-aktiviti komuniti (contohnya, perayaan, keagamaan atau aktiviti lain) dengan cara yang sama seperti orang lain?</span></li></ol>",
          model: "Q1",
          values: [1,2,3,4,5],
          required: 'true',
          validator: 'required',
          styleClasses: 'odd-row'
        },
        {
          id: "whodass-radio",
          type: "radios",
          label: "<ol start = '2'><li class='label-width'>How much of a problem did you have because of barriers or hindrances around you?<span class='requiredLabel'> *</span><br><span class='bm'>Berapa banyak masalah yang anda alami disebabkan oleh halangan atau rintangan dalam dunia di sekeliling anda?</span></li></ol>",
          model: "Q2",
          values: [1,2,3,4,5],
          required: 'true',
          validator: 'required',
          styleClasses: 'even-row'
        },
        {
          id: "whodass-radio",
          type: "radios",
          label: "<ol start = '3'><li class='label-width'>How much of a problem did you have living with dignity because of the attitudes and actions of others?<span class='requiredLabel'> *</span><br><span class='bm'>Berapa banyak masalah yang anda alami untuk hidup dengan maruah diri disebabkan sikap dan tindakan orang lain?</span></li></ol>",
          model: "Q3",
          values: [1,2,3,4,5],
          required: 'true',
          validator: 'required',
          styleClasses: 'odd-row'

        },
        {
          id: "whodass-radio",
          type: "radios",
          label: "<ol start = '4'><li class='label-width'>How much time did you spend on your health condition or its consequences?<span class='requiredLabel'> *</span><br><span class='bm'>Berapa banyak anda telah dipengaruhi secara emosi oleh keadaan kesihatan anda?</span></li></ol>",
          model: "Q4",
          values: [1,2,3,4,5],
          required: 'true',
          validator: 'required',
          styleClasses: 'even-row'
        },
        {
          id: "whodass-radio",
          type: "radios",
          label: "<ol start = '5'><li class='label-width'>How much have you been emotionally affected by your health condition?<span class='requiredLabel'> *</span><br><span class='bm'>Berapa banyak anda telah dipengaruhi secara emosi oleh keadaan kesihatan anda?</span></li></ol>",
          model: "Q5",
          values: [1,2,3,4,5],
          required: 'true',
          validator: 'required',
          styleClasses: 'odd-row'

        },
        {
          id: "whodass-radio",
          type: "radios",
          label: "<ol start = '6'><li class='label-width'>How much has your health been a drain on the financial resources of you or your family?<span class='requiredLabel'> *</span><br><span class='bm'>Berapa banyak sumber kewangan anda atau keluarga anda telah dihabiskan disebabkan kedaan kesihatan anda?</span></li></ol>",
          model: "Q6",
          values: [1,2,3,4,5],
          required: 'true',
          validator: 'required',
          styleClasses: 'even-row'
        },
        {
          id: "whodass-radio",
          type: "radios",
          label: "<ol start = '7'><li class='label-width'>How much of a problem did your family have because of your health problems?<span class='requiredLabel'> *</span><br><span class='bm'>Berapa banyak masalah yang dialami keluarga anda disebabkan masalah-masalah kesihatan anda?</span></li></ol>",
          model: "Q7",
          values: [1,2,3,4,5],
          required: 'true',
          validator: 'required',
          styleClasses: 'odd-row'

        },
        {
          id: "whodass-radio",
          type: "radios",
          label: "<ol start = '8'><li class='label-width'>How much of a problem did you have in doing things by yourself for relaxation or pleasure?<span class='requiredLabel'> *</span><br><span class='bm'>Berapa banyak masalah yang anda telah alami dalam melakukan perkara-perkara secara sendiri untuk beristirehat atau berseronok?</span></li></ol>",
          model: "Q8",
          values: [1,2,3,4,5],
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
                    this.redirectToResults()
                  },
                  buttonText: 'Submit',
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
    if (sessionStorage.getItem("4_s7") != null) {
      this.data = JSON.parse(sessionStorage.getItem("4_s7"));
      this.s7_model = this.data.ans
    }
  },
  methods: {
    redirectToPrevious(){
      this.$router.push({path: '/whodas_6'})
    },
    async redirectToResults(){
      const url = 'http://127.0.0.1:8000/api/getTestRange?type=4'
      const response = await this.$axios.get(url);
      this.info = response.data;

      assessResults(this.s7_model, this.info, [30,31,32,33,34], "s7", "PARTICIPATION IN SOCIETY", 40)

      var s1 = JSON.parse(sessionStorage.getItem("4_s1"))
      var s2 = JSON.parse(sessionStorage.getItem("4_s2"))
      var s3 = JSON.parse(sessionStorage.getItem("4_s3"))
      var s4 = JSON.parse(sessionStorage.getItem("4_s4"))
      var s5 = JSON.parse(sessionStorage.getItem("4_s5"))
      var s6 = JSON.parse(sessionStorage.getItem("4_s6"))
      var s7 = JSON.parse(sessionStorage.getItem("4_s7"))

      const testOnly = new FormData();
      testOnly.append("type", 4);
      testOnly.append("score", s1.score+'-'+s2.score+'-'+s3.score+'-'+s4.score+'-'+s5.score+'-'+s6.score+'-'+s7.score);
      this.$axios
        .post('http://127.0.0.1:8000/api/postTest', testOnly)
        .then((response) =>{
            this.$router.push({path: '/whodas-result', query: {id: response.data.id}})
        })
    },
  }
}
</script>

<style>
#whodass{
  text-align: center;
  font-weight: bold;
  margin-bottom: 50px;
}

#subques{
    background-color: rgb(146, 145, 145);
    padding: 20px 20px 10px 20px;
    margin-bottom: 30px;
    margin-top: 30px;
}

h4 {
  text-align: center;
}

h5{
    color: white;
    font-weight: bold;
    text-align: center;
}

hr {
  margin: 40px 0px 40px 0px;
}

#num {
  margin-right: 20px;
  margin-left: 10px;
  text-align: center;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  border-color: grey;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;

}
#test {
  box-shadow: 0px 10px 15px #6b6b6b9c;
  padding: 40px 40px 40px 40px;
  border-radius: 20px;
  margin-bottom: 50px;
}
.r{
  display: inline-flex;
  width: 100%;
  align-items: center;
}
.indicator{
  margin: 10px 10px 0px 0px;
}
.hBM{
  font-style: italic;
  font-size: 20px;
  color: dimgrey;
}
.bm{
  font-style: italic;
  font-size: small;
  color: dimgrey;
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
