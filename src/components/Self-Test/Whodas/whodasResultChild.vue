<template>
<div>
    <div class="container whodas-result">
        <div class ="domain">
            <h4 class='domain-text'>{{domain}}</h4>
            <div class="bm">{{domainBM}}</div>
        </div>
        <div class = "row justify-content-between">
            <div class = "col-md-auto">
                <div class = "score-box average">
                    <p class = "score avg">{{avg_domain_scr}}</p>
                    <h5 class="score-text avg">AVERAGE DOMAIN SCORE</h5>
                    <div class="bm">PURATA SKOR DOMAIN</div>
                </div>
            </div>
            <div class = "col-md">
                <div class = "score-box">
                    <p class = "score">{{domain_scr}}</p>
                    <h5 class="score-text">DOMAIN SCORE</h5>
                    <div class="bm white">SKOR DOMAIN</div>
                </div>
            </div>
            <div class = "col-md-auto">
                <div class = "score-box percentage">
                    <p class = "score">{{((domain_scr/max_score)*100).toFixed(1)}}%</p>
                    <h5 class="score-text">DOMAIN PERCENTAGE</h5>
                    <div class="bm white">PERATUSAN DOMAIN</div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  props: ['domain', 'domainBM', 'domain_scr', 'avg_domain_scr', 'level', 'colour', 'max_score', 'range', 'index'],
  data(){
      return {
      }
  },
}
</script>

<style scoped lang="css">
.domain-text{
    text-align: center;
    font-weight: bold;
}

.domain{
    background-color: #F0F0F0;
    padding: 20px 20px 20px 20px;
    margin-bottom: 40px;
}

.score{
    text-align: center;
    font-weight: bold;
    font-size: 80px;
    margin: 0px;
    color: white;
}

.score-text{
    text-align: center;
    font-weight: bold;
    color: white;
    font-size: 15px;
}

.avg{
    color:rgb(105, 105, 105);
}

.whodas-result {
    padding: 40px 40px 40px 40px;
    box-shadow: 0px 10px 15px #6b6b6b9c;
    border-radius: 20px;
    margin-bottom: 30px;
}

.score-box{
    background-color: #158470;
    border-radius: 10px;
    line-height: 1;
    padding: 20px 30px 20px 30px;
    border: solid 3px #158470;
}

.average{
    background-color: rgb(255, 255, 255);
    border: solid 3px rgb(105, 105, 105);
}
.percentage{
    background-color: #EC7557;
    border: solid 3px #EC7557;
}

.bm{
  font-style: italic;
  font-size: small;
  color: dimgrey;
  text-align: center;
}

.white{
    color: white;
}

@media (max-width: 1012px) {
    .whodas-result{
        padding: 20px 20px;
    }
    .domain{
        margin-bottom: 20px;
    }
    .score{
        font-size: 50px;
    }
    .score-box{
        padding: 10px;
    }

}

@media (max-width: 450px) {
    .whodas-result{
        width: 100%;
    }
    .domain{
        margin-bottom: 20px;
    }
    .score{
        font-size: 50px;
    }
    .score-box{
        padding: 10px;
        margin-bottom: 10px;
    }
}
@media (max-width: 766px){
    .score-box{
        margin-bottom: 10px;
    }
}

</style>
