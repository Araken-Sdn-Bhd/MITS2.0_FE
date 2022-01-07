<template>
<div>
  <PortalHeader :testName="'World Health Organization Disability Assessment Schedule 2.0 (WHODAS 2.0)'"></PortalHeader>

    <div class="container mt-5 sub-heading" id="no-show">
        <h4 class='text-center'>Thank you for reaching out to MENTARI Self Test.</h4>
        <p class='bm'>Terima kasih kerana melayari ujian kendiri MENTARI.</p>
        
        <p class='mt-5'>Please note, <b>results are not a diagnosis</b>, only a health professional can give a diagnosis.</p>
        <p class='bm'>Sila ambil perhatian, <b>keputusan bukan diagnosis</b>, hanya pakar kesihatan yang boleh memberikan diagnosis.<p>
        
        <div class="row mt-5">
            <div class="col-md">
            </div>
            <div class="col-md">
                <h2 class='result-heading'>RESULT</h2>
                <p class="bm">KEPUTUSAN</p>
            </div>
            <div class="col-md">
                <b-button  @click="exportToPDF"><b-icon icon="printer" aria-hidden="true"></b-icon> Print</b-button>
            </div>
        </div>
    </div>
    <div class="container mt-5 mb-4 summary">
        <h2 class="gd-score" style="margin-bottom:0">Your Overall Score</h2>
        <div class="hBM">Skor Keseluruhan Anda</div>
        <h1 class = "score"><span class="gd">{{this.s1_data.score+this.s2_data.score+this.s3_data.score+this.s4_data.score+this.s5_data.score+this.s6_data.score+this.s7_data.score}}</span> / 180</h1>
    </div>

    <div class="container all-domain">
        <result :domain="'UNDERSTANDING AND COMMUNICATING'" :domainBM="'PEMAHAMAN DAN KOMUNIKASI'" :domain_scr="this.s1_data.score" :avg_domain_scr="this.s1_data.avg_score" :level="this.s1_data.level" :colour="this.s1_data.colour"  :max_score="24" :range="this.info" :index="[0,1,2,3,4]"></result>

        <result :domain="'GETTING AROUND'" :domainBM="'BERGERAK KE SANA SINI'" :domain_scr="this.s2_data.score" :avg_domain_scr="this.s2_data.avg_score" :level="this.s2_data.level" :colour="this.s2_data.colour"  :max_score="20" :range="this.info" :index="[5,6,7,8,9]"></result>

        <result :domain="'SELF CARE'" :domainBM="'PENJAGAAN DIRI'" :domain_scr="this.s3_data.score" :avg_domain_scr="this.s3_data.avg_score" :level="this.s3_data.level" :colour="this.s3_data.colour"  :max_score="16" :range="this.info" :index="[10,11,12,13,14]" ></result>

        <div class='page-break'></div>

        <result :domain="'GETTING ALONG WITH PEOPLE'" :domainBM="'BERMESRA DENGAN ORANG RAMAI'" :domain_scr="this.s4_data.score" :avg_domain_scr="this.s4_data.avg_score" :level="this.s4_data.level" :colour="this.s4_data.colour"  :max_score="20" :range="this.info" :index="[15,16,17,18,19]" id='sec-page'></result>

        <result :domain="'LIFE ACTIVITIES - HOUSEHOLD'" :domainBM="'AKTIVITI-AKTIVITI KEHIDUPAN - RUMAH TANGGA'" :domain_scr="this.s5_data.score" :avg_domain_scr="this.s5_data.avg_score" :level="this.s5_data.level" :colour="this.s5_data.colour"  :max_score="16" :range="this.info" :index="[20,21,22,23,24]"></result>

        <result :domain="'LIFE ACTIVITIES - SCHOOL / WORK'" :domainBM="'AKTIVITI-AKTIVITI KEHIDUPAN - SEKOLAH / KERJA'" :domain_scr="this.s6_data.score" :avg_domain_scr="this.s6_data.avg_score" :level="this.s6_data.level" :colour="this.s6_data.colour"  :max_score="16" :range="this.info" :index="[25,26,27,28,29]"></result>

        <result :domain="'PARTICIPATION IN SOCIETY'" :domainBM="'PENYERTAAN DALAM MASYARAKAT'" :domain_scr="this.s7_data.score" :avg_domain_scr="this.s7_data.avg_score" :level="this.s7_data.level" :colour="this.s7_data.colour"  :max_score="32" :range="this.info" :index="[30,31,32,33,34]"></result>
    </div>

    <div class = "button-footer">
            <button @click="redirectToWhodas" type="button" class="btn return-button">Return</button>
            <button  @click="redirectToReqAppt" type="button" class="btn request-button">Request Appointment</button>
    </div>
  </div>
</template>

<script>
import result from './whodasResultChild'
import PortalHeader from '../PortalHeader'

export default {
  components: {result, PortalHeader},
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
        document.title='WHODAS Result';
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
.sub-heading{
    text-align: center;
    padding: 2px;
    position: relative;
    width: 70%;
}

.text-center {
    text-align: center;
}

.page-break{
    page-break-after: always;
}

.result-heading {
    text-align: center;
    font-weight: bold;
}

.summary {
    padding: 30px;
    border-radius: 20px;
    border: 2px solid rgb(94, 94, 94);
    width: 50%;
    margin-bottom: 50px;
}

.gd-score{
    text-align: center;
    font-weight: bold;
}

.all-domain {
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

.button-footer{
    text-align: center;
    margin-bottom: 50px;
}

.return-button{
    margin: 10px;
    background-color: #33b76e;
    padding: 6px 12px;
    border: #33b76e;
    color: white;
    font-size: 14px;
    font-weight: 400;
}

.request-button{
    margin: 10px;
    background-color:#2e6da4;
    padding: 6px 12px;
    border: #2e6da4;
    color: white;
    font-size: 14px;
    font-weight: 400;
}

.hBM{
  font-style: italic;
  font-size: 20px;
  color: dimgrey;
  text-align: center;
}

.bm{
  font-style: italic;
  font-size: small;
  color: dimgrey;
  text-align: center;
}
@media print{
    .button-footer{
        display: none;
    }
    #sec-page{
        margin-top: 2cm;
    }
    #no-show {
        display: none;
    }
}

@media (max-width: 1024px) {
    .summary {
        padding: 20px 20px 50px 20px;
        border-radius: 20px;
        margin-bottom: 50px;
        width: 90%;
    }
    .all-domain{
        width: 100%;
    }
}
@media (max-width: 1012px) {
    .all-domain{
        width: 100%;;
    }
    .score {
        font-size: 40px;
    }
    .summary{
        padding: 20px
    }
    .gd-score{
        font-size: 30px;
    }
}
@media (max-width: 450px) {
    .all-domain{
        width: 100%
    }
    .score {
        font-size: 40px;
    }
    .summary{
        padding: 20px
    }
    .gd-score{
        font-size: 20px;
    }
}

</style>
