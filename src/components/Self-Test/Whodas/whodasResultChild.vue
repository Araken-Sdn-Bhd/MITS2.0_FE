<template>
<div>
    <div class="container test">
        <h3 id ="domain">{{domain}}</h3>
        <div class = "row">
            <div class = "col-md-auto">
                <div class = "scoreBox">
                    <p class = "score">{{domain_scr}}</p>
                    <h5 class="scoretxt">DOMAIN<br>SCORE</h5>
                </div>
            </div>
            <div class = "col-md-auto">
                <div class = "scoreBox average">
                    <p class = "score avg">{{avg_domain_scr}}</p>
                    <h5 class="scoretxt avg">AVERAGE<br>DOMAIN SCORE</h5>
                </div>
            </div>
            <div class = "col">
                <div id = "diagBox" v-bind:style="{ 'background-color': colour }">
                    <h1>{{level}}</h1>
                </div>
                <div class="progress" id = "scales">
                    <div class="progress-bar" id = "empty" role="progressbar" v-bind:style="{width: ((domain_scr-(0.035*max_score))/max_score)*100+'%'}" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    <div class="progress-bar" id = "arrow" v-bind:style="{ 'border-bottom': '16px solid'+colour }" role="progressbar" style="width: 3.5%" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress" id = "meter">
                    <div class="progress-bar" id = "none" role="progressbar" style="width: 2%" aria-valuenow="2" aria-valuemin="0" aria-valuemax="100"></div>
                    <div class="progress-bar" id = "none" role="progressbar" v-bind:style="{width: ((range.data[index[0]].range_max_value-range.data[index[0]].range_min_value+1)/max_score)*100+'%'}" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                    <div class="progress-bar" id = "mild" role="progressbar" v-bind:style="{width: ((range.data[index[1]].range_max_value-range.data[index[1]].range_min_value+1)/max_score)*100+'%'}" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                    <div class="progress-bar" id = "moderate" role="progressbar" v-bind:style="{width: ((range.data[index[2]].range_max_value-range.data[index[2]].range_min_value+1)/max_score)*100+'%'}" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                    <div class="progress-bar" id = "severe" role="progressbar" v-bind:style="{width: ((range.data[index[3]].range_max_value-range.data[index[3]].range_min_value+1)/max_score)*100+'%'}" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                    <div class="progress-bar" id = "extreme" role="progressbar" v-bind:style="{width: ((range.data[index[4]].range_max_value-range.data[index[4]].range_min_value+1)/max_score)*100+'%'}" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                    <div class="progress-bar" id = "extreme" role="progressbar" style="width: 2%" aria-valuenow="2" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div id="meterTextBox">
                    <div class = "meterText" v-bind:style="{width: ((range.data[index[0]].range_max_value-range.data[index[0]].range_min_value+1)/max_score)*100+'%'}">
                        {{range.data[index[0]].range_label}}
                    </div>
                    <div class = "meterText" v-bind:style="{width: ((range.data[index[1]].range_max_value-range.data[index[1]].range_min_value+1)/max_score)*100+'%'}">
                        {{range.data[index[1]].range_label}}
                    </div>
                    <div class = "meterText" v-bind:style="{width: ((range.data[index[2]].range_max_value-range.data[index[2]].range_min_value+1)/max_score)*100+'%'}">
                        {{range.data[index[2]].range_label}}
                    </div>
                    <div class = "meterText" v-bind:style="{width: ((range.data[index[3]].range_max_value-range.data[index[3]].range_min_value+1)/max_score)*100+'%'}">
                        {{range.data[index[3]].range_label}}
                    </div>
                    <div class = "meterText" v-bind:style="{width: ((range.data[index[4]].range_max_value-range.data[index[4]].range_min_value+1)/max_score)*100+'%'}">
                        {{range.data[index[4]].range_label}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  props: ['domain', 'domain_scr', 'avg_domain_scr', 'level', 'colour', 'max_score', 'range', 'index'],
  data(){
      return {
      }
  },
}
</script>

<style scoped lang="css">
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
}

h3 {
    text-align: center;
    font-weight: bold;
}

#domain{
    background-color: #F0F0F0;
    padding: 20px 20px 20px 20px;
    margin-bottom: 40px;
}

h5{
    text-align: center;
    font-weight: bold;
    color: white;
}

.score{
    text-align: center;
    font-weight: bold;
    font-size: 80px;
    margin: 0px;
    color: white;
}

.scoretxt{
    font-size: 15px;
}

.avg{
    color:rgb(105, 105, 105);
}

.test {
    padding: 40px 40px 40px 40px;
    box-shadow: 0px 10px 15px #6b6b6b9c;
    border-radius: 20px;
    margin-bottom: 30px;
}

.scoreBox{
    background-color: rgb(105, 105, 105);
    border-radius: 10px;
    line-height: 1;
    padding: 20px 30px 20px 30px;
    border: solid 3px rgb(105, 105, 105);
}

.average{
    background-color: rgb(255, 255, 255);
    border: solid 3px rgb(105, 105, 105);
}

#diagBox{
    background-color: #CDEE4A;
    border-radius: 10px;
    margin-bottom: 0px;
    padding: 45px 30px 45px 30px;
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
	border-bottom: 15px solid #CDEE4A;
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

#none{
    background-color: #CDEE4A;
    text-align: start;
    padding-left: 5px;
}

#mild{
    background-color: #EEE84A;
}

#moderate{
    background-color: #EED14A;
}

#severe{
    background-color: #EE9B4A;
}

#extreme{
    background-color: #EE5D4A;
    text-align: end;
    padding-right: 5px;
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

@media (max-width: 1012px) {
    .test{
        padding: 20px 10px;
    }
    #domain{
        margin-bottom: 20px;
    }
    .score{
        font-size: 50px;
    }
    .scoretxt{
        font-size: 10px;
    }
    .scoreBox{
        padding: 10px;
    }
    #diagBox{
        padding: 20px;
    }
    .meterText{
        font-size: 12px;
    }

}

@media (max-width: 450px) {
    .test{
        width: 100%;
    }
    #meterTextBox{
        margin-bottom: 30px;
    }
    #domain{
        margin-bottom: 20px;
    }
    h3 {
        font-size: 90%;
    }
    h1{
        font-size: 30px;
    }
    .score{
        font-size: 50px;
    }
    .scoretxt{
        font-size: 10px;
    }
    .scoreBox{
        padding: 10px;
        margin-bottom: 10px;
    }
    #diagBox{
        padding: 20px;
    }
    .meterText{
        font-size: 8px;
    }
}
@media (max-width: 766px){
    .scoreBox{
        margin-bottom: 10px;
    }
}

</style>
