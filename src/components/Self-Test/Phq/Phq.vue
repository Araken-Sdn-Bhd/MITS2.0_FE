<template>
<div>
  <PortalHeader :testName="'Patient Health Questionnaire (PHQ-9)'"></PortalHeader>
  
  <div class="container">
    <div class = "container phq-container">
      <h4 class='text-center'>Over the last 2 weeks, how often have you been bothered by any of the following problems?
          <br><span class="hBM">Dalam tempoh 2 minggu yang lepas, berapa kerapkali anda terganggu oleh masalah  berikut?</span>
      </h4>
      <hr>
      <div class ="row justify-content-between">
        <div class="col-lg-auto">
          <div class = "r">
              <p class = "num">0</p>
              <p class="indicator">Not at all<br><span class="bm">Tidak pernah sama sekali</span></p>
          </div>
        </div>
        <div class="col-lg-auto">
          <div class = "r">
              <p class = "num">1</p>
              <p class="indicator">Several days<br><span class="bm">Beberapa hari</span></p>
          </div>
        </div>
        <div class="col-lg-auto">
          <div class = "r">
              <p class = "num">2</p>
              <p class="indicator">More than half the days<br><span class="bm">Lebih dari seminggu</span></p>
          </div>
        </div>
        <div class="col-lg-auto">
          <div class = "r">
              <p class = "num">3</p>
              <p class="indicator">Nearly everyday<br><span class="bm">Hampir setiap hari</span></p>
          </div>
        </div>
      </div>

      <div class = "mt-4">
        <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import PortalHeader from '../PortalHeader'

export default {
  components: {PortalHeader},
  data(){
    return{
      rangeInfo: [],
      result_id : '',
      model: {
      Q1: '',
      Q2: '',
      Q3: '',
      Q4: '',
      Q5: '',
      Q6: '',
      Q7: '',
      Q8: '',
      Q9: ''
    },
      schema: {
        fields: [
          {
          type: "radios",
          label: "<ol><li class='label-width'>Little interest or pleasure in doing things.<span class='requiredLabel'> *</span><br><span class='bm'>Sedikit minat atau keseronokan dalam melakukan kerja-kerja.</span></li></ol>",
          model: "Q1",
          values: [0,1,2,3],
          required: 'true',
          validator: 'required',
          styleClasses: 'odd-row'
        },
        {
          type: "radios",
          label: "<ol start = '2'><li class='label-width'>Feeling down, depressed or hopeless.<span class='requiredLabel'> *</span><br><span class='bm'>Merasa murung, sedih atau tiada harapan.</span></li></ol>",
          model: "Q2",
          values: [0,1,2,3],
          required: 'true',
          validator: 'required',
          styleClasses: 'even-row'
        },
        {
          type: "radios",
          label: "<ol start = '3'><li class='label-width'>Trouble falling/staying asleep, sleeping too much.<span class='requiredLabel'> *</span><br><span class='bm'>Masalah hendak tidur / semasa tidur, tidur terlalu banyak.</span></li></ol>",
          model: "Q3",
          values: [0,1,2,3],
          required: 'true',
          validator: 'required',
          styleClasses: 'odd-row'

        },
        {
          type: "radios",
          label: "<ol start = '4'><li class='label-width'>Feeling tired or having little energy.<span class='requiredLabel'> *</span><br><span class='bm'>Merasa letih atau kurang bertenaga.</span></li></ol>",
          model: "Q4",
          values: [0,1,2,3],
          required: 'true',
          validator: 'required',
          styleClasses: 'even-row'
        },
        {
          type: "radios",
          label: "<ol start = '5'><li class='label-width'>Poor appetite or over eating.<span class='requiredLabel'> *</span><br><span class='bm'>Kurang selera atau terlalu banyak makan.</span></li></ol>",
          model: "Q5",
          values: [0,1,2,3],
          required: 'true',
          validator: 'required',
          styleClasses: 'odd-row'

        },
        {
          type: "radios",
          label: "<ol start = '6'><li class='label-width'>Feeling bad about yourself - or that you are a failure or have let yourself or your family down.<span class='requiredLabel'> *</span><br><span class='bm'>Mempunyai perasaan buruk terhadap diri sendiri - ataupun merasa gagal terhadap diri sendiri ataupun menghampakan diri atau keluarga.</span></li></ol>",
          model: "Q6",
          values: [0,1,2,3],
          required: 'true',
          validator: 'required',
          styleClasses: 'even-row'
        },
        {
          type: "radios",
          label: "<ol start = '7'><li class='label-width'>Trouble concentrating on things, such as reading the newspaper or watching television.<span class='requiredLabel'> *</span><br><span class='bm'>Masalah menumpukan perhatian terhadap perkara-perkara seperti membaca suratkhabar atau menonton televisyen.</span></li></ol>",
          model: "Q7",
          values: [0,1,2,3],
          required: 'true',
          validator: 'required',
          styleClasses: 'odd-row'
        },
        {
          type: "radios",
          label: "<ol start = '8'><li class='label-width'>Moving or speaking so slowly that people could have noticed. Or the opposite being so fidgety or restless that you have been moving around a lot more than usual.<span class='requiredLabel'> *</span><br><span class='bm'>Bergerak atau bercakap terlalu lambat sehingga disedari oleh orang lain. Ataupun bertentangan - terlalu resah atau gelisah sehingga anda bergerak lebih dari biasa.</span></li></ol>",
          model: "Q8",
          values: [0,1,2,3],
          required: 'true',
          validator: 'required',
          styleClasses: 'even-row'
        },
        {
          type: "radios",
          label: "<ol start = 9'><li class='label-width'>Thoughts that you would be better off dead or of hurting yourself in some way.<span class='requiredLabel'> *</span><br><span class='bm'>Berfikiran bahawa lebih baik jika anda telah mati atau ingin mencederakan diri anda dalam sesuatu cara.</span></li></ol>",
          model: "Q9",
          values: [0,1,2,3],
          required: 'true',
          validator: 'required',
          styleClasses: 'odd-row'
        },
        ],
        groups: [
          {
              styleClasses: 'groupBtn',
              fields: [
                {
                  id: 'rtn',
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
                  onSubmit:()=>{
                    this.redirectToResult()
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
  methods: {
    redirectToHome(){
      this.$router.push({path: '/phq'})
    },
    async redirectToResult(){
      var NAA = 0;
      let SD = 0;
      let MTHD = 0;
      let NE = 0;

      for (let x in this.model){
        if (this.model[x] == 0){
          NAA ++;
        }
        else if (this.model[x]  == 1){
          SD ++;
        }
        else if (this.model[x]  == 2){
          MTHD ++;
        }
        else{
          NE ++;
        }
      }
      var p_score = NAA*0 + SD*1 + MTHD*2 + NE*3;

      var p_level = '';
      var p_level_bm = '';
      var p_colour = '';
      var p_desc = '';
      var p_desc_bm = '';
      var p_high = '';

      const url = 'http://127.0.0.1:8000/api/getTestRange?type=1'
      const response = await this.$axios.get(url);
      this.rangeInfo = response.data.data;

      if (p_score >= this.rangeInfo[0].range_min_value && p_score < this.rangeInfo[0].range_max_value+1){
          p_level = this.rangeInfo[0].range_label;
          p_level_bm = this.rangeInfo[0].range_label_bm;
          p_colour = '#CDEE4A';
          p_desc = this.rangeInfo[0].range_description;
          p_desc_bm = this.rangeInfo[0].range_description_bm;
      }
      else if(p_score >= this.rangeInfo[1].range_min_value && p_score < this.rangeInfo[1].range_max_value+1){
          p_level = this.rangeInfo[1].range_label;
          p_level_bm = this.rangeInfo[1].range_label_bm;
          p_colour = '#EEE84A';
          p_desc = this.rangeInfo[1].range_description;
          p_desc_bm = this.rangeInfo[1].range_description_bm;
      }
      else if(p_score >= this.rangeInfo[2].range_min_value && p_score < this.rangeInfo[2].range_max_value+1){
          p_level = this.rangeInfo[2].range_label;
          p_level_bm = this.rangeInfo[2].range_label_bm;
          p_colour = '#EED14A';
          p_desc = this.rangeInfo[2].range_description;
          p_desc_bm = this.rangeInfo[2].range_description_bm;
      }
      else if(p_score >= this.rangeInfo[3].range_min_value && p_score < this.rangeInfo[3].range_max_value+1){
          p_level = this.rangeInfo[3].range_label;
          p_level_bm = this.rangeInfo[3].range_label_bm;
          p_colour = '#EE9B4A';
          p_desc = this.rangeInfo[3].range_description;
          p_desc_bm = this.rangeInfo[3].range_description_bm;
      }
      else if(p_score >= this.rangeInfo[4].range_min_value && p_score < this.rangeInfo[4].range_max_value+1){
          p_level = this.rangeInfo[4].range_label;
          p_level_bm = this.rangeInfo[4].range_label_bm;
          p_colour = '#EE5D4A';
          p_desc = this.rangeInfo[4].range_description;
          p_desc_bm = this.rangeInfo[4].range_description_bm;
      }

      let phq_data = {
        score: p_score,
        level: p_level,
        level_bm: p_level_bm,
        colour: p_colour,
        desc: p_desc,
        desc_bm: p_desc_bm,
        high: p_high
      }
      sessionStorage.setItem("1_data", JSON.stringify(phq_data));

      let test = JSON.parse(sessionStorage.getItem('1_data'));
      const testOnly = new FormData();
      testOnly.append("type", "1");
      testOnly.append("score", test.score);
      this.$axios
        .post('http://127.0.0.1:8000/api/postTest', testOnly)
        .then((response) =>{
            this.$router.push({path: '/phq-results', query: {id: response.data.id}})
        })
    },
  }
}
</script>

<style>
.phq-container {
  box-shadow: 0px 10px 15px #6b6b6b9c;
  padding: 40px 40px 100px 40px;
  border-radius: 20px;
  margin-bottom: 50px;
}

.text-center {
  text-align: center;
}


hr {
  margin: 40px 0px 40px 0px;
}

.num {
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
.label-width{
  width: 700px;
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
    .phq-container {
        padding: 40px 20px 100px 20px;
        margin-bottom: 50px;
    }
    .label-width{
      width:100%
    }
}
@media (min-width: 768px) and (max-width: 992px) {
    .phq-container {
        padding: 40px 20px 100px 20px;
        margin-bottom: 50px;
    }
    .label-width{
      width:320px
    }
}
@media (min-width: 992px) and (max-width: 1200px) {
    .phq-container {
        padding: 40px 20px 100px 20px;
        margin-bottom: 50px;
    }
    .label-width{
      width:500px
    }
}

</style>
