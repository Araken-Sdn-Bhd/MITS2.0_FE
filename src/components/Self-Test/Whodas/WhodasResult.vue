<template>
<div>
    <div class="container" id="printBtn">
        <b-button id="print" @click="exportToPDF"><b-icon icon="printer" aria-hidden="true"></b-icon> Print</b-button>
    </div>
    <div ref="document"> 
        <div class="container" id="summary">
            <h2 id="gd_score">Your General Disability Score</h2>
            <h1 class = "score"><span class="gd">{{this.s1_data.score+this.s2_data.score+this.s3_data.score+this.s4_data.score+this.s5_data.score+this.s6_data.score+this.s7_data.score}}</span> / 180</h1>
        </div>
        <div id="diagtxt">
            <h3>DIAGNOSIS</h3>
        </div>
        
        <!----------Understanding & Communicating---------->
        <div class="container" id="tests">
        <result :domain="this.s1_data.domain" :domain_scr="this.s1_data.score" :avg_domain_scr="this.s1_data.avg_score" :level="this.s1_data.level" :colour="this.s1_data.colour"  :max_score="this.s1_data.max_score" :range="this.info" :index="[0,1,2,3,4]"></result>

        <!----------Getting Around---------->
        <result :domain="this.s2_data.domain" :domain_scr="this.s2_data.score" :avg_domain_scr="this.s2_data.avg_score" :level="this.s2_data.level" :colour="this.s2_data.colour"  :max_score="this.s2_data.max_score" :range="this.info" :index="[5,6,7,8,9]"></result>

        <!----------Self-care---------->
        <result :domain="this.s3_data.domain" :domain_scr="this.s3_data.score" :avg_domain_scr="this.s3_data.avg_score" :level="this.s3_data.level" :colour="this.s3_data.colour"  :max_score="this.s3_data.max_score" :range="this.info" :index="[10,11,12,13,14]"></result>
        <div class="break"></div>

        <!----------Getting along ---------->
        <result :domain="this.s4_data.domain" :domain_scr="this.s4_data.score" :avg_domain_scr="this.s4_data.avg_score" :level="this.s4_data.level" :colour="this.s4_data.colour"  :max_score="this.s4_data.max_score" :range="this.info" :index="[15,16,17,18,19]"  id="secPage"></result>

        <result :domain="this.s5_data.domain" :domain_scr="this.s5_data.score" :avg_domain_scr="this.s5_data.avg_score" :level="this.s5_data.level" :colour="this.s5_data.colour"  :max_score="this.s5_data.max_score" :range="this.info" ></result>

        <result :domain="this.s6_data.domain" :domain_scr="this.s6_data.score" :avg_domain_scr="this.s6_data.avg_score" :level="this.s6_data.level" :colour="this.s6_data.colour"  :max_score="this.s6_data.max_score" :range="this.info" :index="[25,26,27,28,29]"></result>

        <result :domain="this.s7_data.domain" :domain_scr="this.s7_data.score" :avg_domain_scr="this.s7_data.avg_score" :level="this.s7_data.level" :colour="this.s7_data.colour"  :max_score="this.s7_data.max_score" :range="this.info" :index="[30,31,32,33,34]"></result>
        <div class="break"></div>
        </div>
    </div>

    <div id = "buttons">
            <button @click="redirectToWhodas" id = "returnBtn" type="button" class="btn">Return</button>
            <button  @click="redirectToReqAppt" id = "reqBtn" type="button" class="btn">Request Appointment</button>
    </div>
  </div>
</template>

<script>
import result from './whodasResultChild'
import html2pdf from 'html2pdf.js'

export default {
  components: {result},
  data(){
    return{
        info: [],
        s1_data: {},
        s2_data: {},
        s3_data: {},
        s4_data: {},
        s5_data: {},
        s6_data: {},
        s7_data: {}
    }
  },
  methods: {
    exportToPDF () {
        document.title='WHODAS Test Result';
        window.print();
    },
    redirectToReqAppt(){
        this.$router.push({path: '/reqApp', query: {type: 4, id: this.$route.query.id}})
    },
    redirectToWhodas(){
        this.$router.push({path: '/whodas_7'})
    }
},
mounted(){
    this.$axios
        .get('http://127.0.0.1:8000/api/getTestRange?type=4')
        .then(response => (this.info = response.data))
},
created(){
    this.s1_data = JSON.parse(sessionStorage.getItem("4_s1"))
    this.s2_data = JSON.parse(sessionStorage.getItem("4_s2"))
    this.s3_data = JSON.parse(sessionStorage.getItem("4_s3"))
    this.s4_data = JSON.parse(sessionStorage.getItem("4_s4"))
    this.s5_data = JSON.parse(sessionStorage.getItem("4_s5"))
    this.s6_data = JSON.parse(sessionStorage.getItem("4_s6"))
    this.s7_data = JSON.parse(sessionStorage.getItem("4_s7"))
  }
}
</script>

<style scoped lang="css">
.break{
  page-break-after: always;
}
#diagtxt{
    text-align: center;
    margin-top: 50px;
    margin-bottom: 40px;
}

#printBtn{
    text-align: center;
    margin-bottom: 30px;
}

h3 {
    text-align: center;
    font-weight: bold;
}

h5{
    text-align: center;
    font-weight: bold;
    color: white;
}

#summary {
    padding: 30px;
    border-radius: 20px;
    border: 2px solid rgb(94, 94, 94);
    margin-bottom: 40px;
    width: 50%;
}

#gd_score{
    text-align: center;
    font-weight: bold;
}

#tests {
    border-radius: 20px;
    margin-bottom: 40px;
    width: 80%
}

.score{
    text-align: center;
    font-weight: bold;
    font-size: 90px;
    margin: 0px;
    color: rgb(189, 189, 189);
}

.gd{
    color: rgb(56, 56, 56);
}

#buttons{
    text-align: center;
    margin-bottom: 50px;
}

#returnBtn{
    margin: 10px;
    background-color: #33b76e;
    padding: 6px 12px;
    border: #33b76e;
    color: white;
    font-size: 14px;
    font-weight: 400;
}

#reqBtn{
    margin: 10px;
    background-color:#2e6da4;
    padding: 6px 12px;
    border: #2e6da4;
    color: white;
    font-size: 14px;
    font-weight: 400;
}
@media print{
    #buttons{
        display: none;
    }
    #print{
        display: none;
    }
    #summary{
        margin-top: 3cm;
    }
    #secPage{
        margin-top: 3cm;
    }
}

@media (max-width: 1024px) {
    #summary {
        padding: 20px 20px 50px 20px;
        border-radius: 20px;
        margin-bottom: 50px;
        width: 90%;
    }
    #tests{
        width: 100%;
    }
}
@media (max-width: 1012px) {
    #tests{
        width: 100%;;
    }
    .score {
        font-size: 40px;
    }
    #summary{
        padding: 20px
    }
    #gd_score{
        font-size: 30px;
    }
}
@media (max-width: 450px) {
    #tests{
        width: 100%
    }
    .score {
        font-size: 40px;
    }
    #summary{
        padding: 20px
    }
    #gd_score{
        font-size: 20px;
    }
}

</style>
