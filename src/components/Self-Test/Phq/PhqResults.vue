<template>
<div>
    <PortalHeader :testName="'Patient Health Questionnaire (PHQ-9)'"></PortalHeader>

    <div ref="document">
        <div class="container mt-5 sub-heading" id="no-show">
            <h4>Thank you for reaching out to MENTARI Self Test.</h4>
            <p class='bm'>Terima kasih kerana melayari ujian kendiri MENTARI.</p>
            
            <p class='mt-5'><b>Patient Health Questionnaire 9 (PHQ-9)</b> is one of the tools for assessing and monitoring depression severity. <br>Please note, <b>results are not a diagnosis</b>, only a health professional can give a diagnosis.</p>
            
            <p class='bm mt-3'><b>Patient Health Questionnaire 9 (PHQ-9)</b> adalah salah satu alat untuk menilai dan memantau keterukan kemurungan. <br>Sila ambil perhatian, <b>keputusan bukan diagnosis</b>, hanya pakar kesihatan yang boleh memberikan diagnosis.<p>
            
            <div class="row my-5">
                <div class="col-md">
                </div>
                <div class="col-md">
                    <h2><b>RESULT</b></h2>
                    <p class="bm">KEPUTUSAN</p>
                </div>
                <div class="col-md">
                    <b-button  @click="exportToPDF"><b-icon icon="printer" aria-hidden="true"></b-icon> Print</b-button>
                </div>
            </div>
        </div>
        <div class="container" id = "test" >
            <div class = "row">
                <div class = "col-md-auto">
                    <div id = "scoreBox">
                        <p id = "score">{{data.score}}</p>
                        <h5>SCORE</h5>
                        <p class="bm white">SKOR</p>
                    </div>
                </div>
                <div class = "col">
                    <div id = "diagBox" v-bind:style="{ 'background-color': data.colour }">
                        <h1 id="level">{{data.level}}</h1>
                        <p class="hBM white">{{data.level_bm}}</p>
                    </div>
                    <div class="progress" id = "scales">
                        <div class="progress-bar" id = "empty" role="progressbar" v-bind:style="{width: (((data.score-0.5)/27)*100)+'%'}" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                        <div class="progress-bar" id = "arrow" v-bind:style="{ 'border-bottom': '16px solid'+data.colour }" role="progressbar" style="width: 2%" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="progress" id = "meter">
                        <div class="progress-bar" id = "minimal" role="progressbar" v-bind:style="{width: (((info[0].range_max_value-info[0].range_min_value+1)/28)*100)+'%'}" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                        <div class="progress-bar" id = "mild" role="progressbar" v-bind:style="{width: (((info[1].range_max_value-info[1].range_min_value+1)/28)*100)+'%'}" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                        <div class="progress-bar" id = "moderate" role="progressbar" v-bind:style="{width: (((info[2].range_max_value-info[2].range_min_value+1)/28)*100)+'%'}" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                        <div class="progress-bar" id = "modSevere" role="progressbar" v-bind:style="{width: (((info[3].range_max_value-info[3].range_min_value+1)/28)*100)+'%'}" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                        <div class="progress-bar" id = "severe" role="progressbar" v-bind:style="{width: (((info[4].range_max_value-info[4].range_min_value+1)/28)*100)+'%'}" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
            <div class ="row justify-content-between" id="labelLegend">
                <div class="col-sm-auto">
                    <div class = "labelRound">
                        <p class = "num" id="minimal"></p>
                        <p>{{info[0].range_label}}<br><span class="bm">{{info[0].range_label_bm}}</span></p>
                    </div>
                </div>
                <div class="col-sm-auto">
                    <div class = "labelRound">
                        <p class = "num" id="mild"></p>
                        <p>{{info[1].range_label}}<br><span class="bm">{{info[1].range_label_bm}}</span></p>
                    </div>
                </div>
                <div class="col-sm-auto">
                    <div class = "labelRound">
                        <p class = "num" id="moderate"></p>
                        <p>{{info[2].range_label}}<br><span class="bm">{{info[2].range_label_bm}}</span></p>
                    </div>
                </div>
                <div class="col-sm-auto">
                    <div class = "labelRound">
                        <p class = "num" id="modSevere"></p>
                        <p>{{info[3].range_label}}<br><span class="bm">{{info[3].range_label_bm}}</span></p>
                    </div>
                </div>
                <div class="col-sm-auto">
                    <div class = "labelRound">
                        <p class = "num" id="severe"></p>
                        <p>{{info[4].range_label}}<br><span class="bm">{{info[4].range_label_bm}}</span></p>
                    </div>
                </div>
            </div>
                <!--<div class="col-md-auto">
                    <table id="labelLegend" class="table table-sm table-hover">
                        <tbody>
                            <tr>
                                <td id = "minimal"></td>
                                <td>{{info[0].range_label}}<br><span class="bm">Minimum</span></td>
                            </tr>
                            <tr>
                                <td id = "mild"></td>
                                <td>{{info[1].range_label}}<br><span class="bm">Ringan</span></td>
                            </tr>
                            <tr>
                                <td id = "moderate"></td>
                                <td>{{info[2].range_label}}<br><span class="bm">Sederhana</span></td>
                            </tr>
                            <tr>
                                <td id = "modSevere"></td>
                                <td>{{info[3].range_label}}<br><span class="bm">Sederhana Teruk</span></td>
                            </tr>
                            <tr>
                                <td id = "severe"></td>
                                <td>{{info[4].range_label}}<br><span class="bm">Teruk</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>-->
        <!--</div>-->
            <div class = "my-5">
                <p class='result-txt mb-3'>Result and Recommendations</p>
                <div id = "diagText" class='mb-5' v-html="data.desc"></div>

                <p class='result-txt mb-3'><i>Keputusan dan Cadangan</i></p>
                <div id = "diagTextBM" v-html="data.desc_bm"></div>
            </div>
        </div>
        <div v-if="showTimestamp" class="container d-flex flex-row-reverse"><p class="font-italic">{{this.timestamp}}</p></div>
        </div>
        <div id = "buttons">
            <button @click="redirectToPhq" id = "returnBtn" type="button" class="btn">Return</button>
            <button  @click="redirectToReqAppt" id = "reqBtn" type="button" class="btn">Request Appointment</button>
        </div>
</div>
</template>

<script>
import PortalHeader from '../PortalHeader'

export default {
    components: {PortalHeader},
    data(){
        return{
            data : {},
            info: [],
        }
    },
    mounted(){
        this.$axios
            .get('http://127.0.0.1:8000/api/getTestRange?type=1')
            .then(response => (this.info = response.data.data))
    },
    methods: {
        exportToPDF () {
            document.title='PHQ Result';
            window.print();
	    },

        redirectToReqAppt(){
            this.$router.push({path: '/reqApp', query: {type: 1, id: this.$route.query.id}})
        },
        redirectToPhq(){
            this.$router.push({path: '/phq'})
        }
    },
    created(){
        this.data = JSON.parse(sessionStorage.getItem("1_data"))
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css" media="print">
.sub-heading{
    text-align: center;
    padding: 2px;
    position: relative;
    width: 70%;
}

h1{
    text-align: center;
    font-weight: bold;
    color: white;
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
p{
    margin-bottom: 0;
}

#score{
    text-align: center;
    font-weight: bold;
    font-size: 90px;
    margin: 0px;
    color: white;
}

#test {
    box-shadow: 0px 10px 15px #6b6b6b9c;
    padding: 40px 40px 10px 40px;
    border-radius: 20px;
    margin-bottom: 40px;
    width: 70%
}

#scoreBox{
    background-color: rgb(105, 105, 105);
    border-radius: 10px;
    line-height: 1;
    padding: 30px 40px 40px 40px
}

#diagBox{
    background-color: #CDEE4A;
    border-radius: 10px;
    margin-bottom: 0px;
    padding: 45px 20px 45px 20px;
}
#level{
    margin-bottom: 0;
}


/* Score meter */
#empty {
    background-color: transparent;
    color: black;
    word-wrap: normal;
}

#scales {
    background-color: transparent;
    margin: 0 auto;
    width: 96%;
    border-radius: 0px;
}

#arrow {
	width: 0;
	height: 0;
	border-left: 8px solid transparent;
	border-right: 8px solid transparent;
	border-bottom: 16px solid #CDEE4A;
    background-color: transparent;
}

#meter{
    height: 20px;
    border-radius: 20px;
}

.meterText{
    float:left;
    text-align: center;
    font-size: 12px;
    color: black;
    line-height: 1.2;
    vertical-align: top;
    margin-top: 5px;
}

#minimal{
    background-color: #CDEE4A;
}

#mild{
    background-color: #EEE84A;
}

#moderate{
    background-color: #EED14A;
}

#modSevere{
    background-color: #EE9B4A;
}

#severe{
    background-color: #EE5D4A;
}

#labelLegend{
    margin-top: 15px;
    padding-right: 15px;
    padding-left: 15px;
}

#diagText{
}

#diagTextBM{
    color: dimgrey;
    font-style: italic;
}

#alertText{
    text-align: center;
    font-size: 20px;
    color: red;
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
.bm{
  font-style: italic;
  font-size: small;
  color: dimgrey;
  text-align: center;
}
.hBM{
  font-style: italic;
  font-size: 20px;
  color: dimgrey;
  text-align: center;
}
.white{
    color: white;
}
.num {
  margin-right: 20px;
  padding: 10px 15px;
  background: #eee;
  border-radius: 5px;
}
.labelRound{
  display: inline-flex;
  width: 100%;
  align-items: center;
}
.result-txt {
    font-size: 25px;
    font-weight: bold;
    color: #158470;
}

@media print{
    #buttons{
        display: none;
    }
    #print{
        display: none;
    }
    #no-show{
        display: none;
    }
}

@media (max-width: 1200px) {
    #test {
        padding: 20px;
        border-radius: 20px;
        margin-bottom: 50px;
        width: 90%
    }
    #scoreBox{
    margin-bottom: 15px;
    }
    #diagBox{
    margin-bottom: 0px;
    }
    .meterText{
    font-size: 10px;
    margin-top: 5px;
    line-height: 1.2;
    }
    #level{
        font-size: 40px;
    }
    #meter{
        height: 15px;
    }
    #labelLegend{
        margin-top: 15px;
    }
}

@media (max-width: 472px){
    #score{
    text-align: center;
    font-weight: bold;
    font-size: 90px;
    margin: 0px;
    color: white;
    }
    #level{
        font-size: 30px;
    }
    #meter{
        height: 15px;
    }
    #labelLegend{
        margin-top: 15px;
    }
}
</style>
