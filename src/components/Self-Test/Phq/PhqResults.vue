<template>
<div>
    <div ref="document">
        <div class="container" id="title-print">
            <div class="row" style="margin-bottom: 30px">
                <div class="col-md">
                </div>
                <div class="col-md">
                    <h3>DIAGNOSIS</h3>
                </div>
                <div class="col-md">
                    <b-button  id="print" @click="exportToPDF"><b-icon icon="printer" aria-hidden="true"></b-icon> Print</b-button>
                </div>
            </div>
        </div>
        <div class="container" id = "test" >
            <div class = "row">
                <div class = "col-md-auto">
                    <div id = "scoreBox">
                        <p id = "score">{{data.score}}</p>
                        <h5>SCORE</h5>
                    </div>
                </div>
                <div class = "col">
                    <div id = "diagBox" v-bind:style="{ 'background-color': data.colour }">
                        <h1>{{data.level}}</h1>
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
                        <div class="progress-bar" id = "Severe" role="progressbar" v-bind:style="{width: (((info[4].range_max_value-info[4].range_min_value+1)/28)*100)+'%'}" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div>
                        <div class = "meterText" v-bind:style="{width: (((info[0].range_max_value-info[0].range_min_value+1)/28)*100)+'%'}">
                            {{info[0].range_label}}
                        </div>
                        <div class = "meterText" v-bind:style="{width: (((info[1].range_max_value-info[1].range_min_value+1)/28)*100)+'%'}">
                            {{info[1].range_label}}
                        </div>
                        <div class = "meterText" v-bind:style="{width: (((info[2].range_max_value-info[2].range_min_value+1)/28)*100)+'%'}">
                            {{info[2].range_label}}
                        </div>
                        <div class = "meterText" v-bind:style="{width: (((info[3].range_max_value-info[3].range_min_value+1)/28)*100)+'%'}">
                            {{info[3].range_label}}
                        </div>
                        <div class = "meterText" v-bind:style="{width: (((info[4].range_max_value-info[4].range_min_value+1)/28)*100)+'%'}" >
                            {{info[4].range_label}}
                        </div>
                    </div>
                </div>
            </div>
            <div class = "row mt-5">
                <p id = "diagText">{{data.desc}}</p>
            </div>
            <div class = "mb-5">
                <p id = "alertText">{{data.high}}</p>
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
import html2pdf from 'html2pdf.js'

export default {
    data(){
        return{
            data : {},
            info: []
        }
    },
    mounted(){
        this.$axios
            .get('http://127.0.0.1:8000/api/getTestRange?type=1')
            .then(response => (this.info = response.data.data))
    },
    methods: {
        exportToPDF () {
            document.title='PHQ Test Result';
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
#title-print{
    text-align: center;
    padding: 2px;
    position: relative;
    width: 70%;
}

h1{
    text-align: center;
    font-weight: bold;
    color: white;
    padding: 45px 30px 45px 30px;
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
    padding: 30px 40px 30px 40px
}

#diagBox{
    background-color: #CDEE4A;
    border-radius: 10px;
    margin-bottom: 0px
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
	border-left: 10px solid transparent;
	border-right: 10px solid transparent;
	border-bottom: 16px solid #CDEE4A;
    background-color: transparent;
}

#meter{
    height: 25px;
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
    text-align: start;
    padding-left: 10px;
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

#Severe{
    background-color: #EE5D4A;
    text-align: end;
    padding-right: 10px;
}

#diagText{
    text-align: center;
    font-size: 20px;
    color: black;
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

@media print{
    #buttons{
        display: none;
    }
    #print{
        display: none;
    }
}

@media (max-width: 766px) {
    #test {
    padding: 20px 20px 50px 20px;
    border-radius: 20px;
    margin-bottom: 50px;
    width: 90%
    }
    #diagBox{
    background-color: #CDEE4A;
    border-radius: 10px;
    margin-bottom: 0px;
    margin-top: 20px
    }
    .meterText{
    font-size: 10px;
    margin-top: 5px;
    line-height: 1.2;
    }

@media (max-width: 472px){
    #score{
    text-align: center;
    font-weight: bold;
    font-size: 90px;
    margin: 0px;
    color: white;
    }
}


}
</style>
