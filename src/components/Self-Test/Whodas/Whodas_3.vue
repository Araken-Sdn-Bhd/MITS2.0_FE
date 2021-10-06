<template>
<div class="container">
  <h1 id="whodass">World Health Organization<br>Disability Assessment Schedule 2.0 (WHODAS 2.0)</h1>

  <div class = "container" id = "test">
    <h4>In the last 30 days, how much difficulty did you have in:
        <br><span class="hBM">Sepanjang 30 hari yang lalu, berapa banyak kesukaran yang anda telah alami dalam:</span>
    </h4>
    <div id="subques">
        <h5>SELF CARE</h5>
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
      <vue-form-generator :schema="s3_schema" :model="s3_model" :options="formOptions"></vue-form-generator>
    </div>

    <div class = "row justify-content-center" style="margin-top:100px">
        <p class = "page">1</p>
        <p class = "page">2</p>
        <p class = "page pactive">3</p>
        <p class = "page">4</p>
        <p class = "page">5</p>
        <p class = "page">6</p>
        <p class = "page">7</p>
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
      s3_model: {
      Q1: '',
      Q2: '',
      Q3: '',
      Q4: '',
    },
      s3_schema: {
        fields: [
          {
          id: "whodass-radio",
          type: "radios",
          label: "<ol><li class='label-width'>Washing your whole body?<span class='requiredLabel'> *</span><br><span class='bm'>Mencuci seluruh badan anda?</span></li></ol>",
          model: "Q1",
          values: [1,2,3,4,5],
          required: 'true',
          validator: 'required',
          styleClasses: 'odd-row'
        },
        {
          id: "whodass-radio",
          type: "radios",
          label: "<ol start = '2'><li class='label-width'>Getting dressed?<span class='requiredLabel'> *</span><br><span class='bm'>Berpakaian?</span></li></ol>",
          model: "Q2",
          values: [1,2,3,4,5],
          required: 'true',
          validator: 'required',
          styleClasses: 'even-row'
        },
        {
          id: "whodass-radio",
          type: "radios",
          label: "<ol start = '3'><li class='label-width'>Eating?<span class='requiredLabel'> *</span><br><span class='bm'>Makan?</span></li></ol>",
          model: "Q3",
          values: [1,2,3,4,5],
          required: 'true',
          validator: 'required',
          styleClasses: 'odd-row'

        },
        {
          id: "whodass-radio",
          type: "radios",
          label: "<ol start = '4'><li class='label-width'>Staying by yourself for a few days?<span class='requiredLabel'> *</span><br><span class='bm'>Tinggal bersendirian untuk beberapa hari?</span></li></ol>",
          model: "Q4",
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
    if (sessionStorage.getItem("4_s3") != null) {
      this.data = JSON.parse(sessionStorage.getItem("4_s3"));
      this.s3_model = this.data.ans
    }
  },
  methods: {
    redirectToPrevious(){
      this.$router.push({path: '/whodas_2'})
    },
    async redirectToNext(){
      const url = 'http://127.0.0.1:8000/api/getTestRange?type=4'
      const response = await this.$axios.get(url);
      this.info = response.data;

      assessResults(this.s3_model, this.info, [10,11,12,13,14], "s3", "SELF-CARE", 20)
      this.$router.push({path: '/whodas_4'})
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

   