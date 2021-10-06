<template>
  <div>
    <div class="cart">
      <h2>{{name}}</h2>
      <div class="panel">
        <div class="score-board">
        <p class="score-value">{{score}}</p>
        <p class="score">SCORE</p>
      </div>
      <div class="meter">
        <div class="meter-title-container">
          <p class="meter-title">{{computedTitle}}</p>
        </div>
        <div class="arrow-up"></div>
        <div class="bar">
          <div class="normal">
            <p>Normal</p>
          </div>
          <div class="mild">
            <p>Mild</p>
          </div>
          <div class="moderate">
            <p>Moderate</p>
          </div>
          <div class="severe">
            <p>Severe</p>
          </div>
          <div class="extremely-severe">
            <p>Extremely Severe</p>
          </div>
        </div>
      </div>
      </div>
      <p class="interpretation">Your score suggests that you may not need depression treatment.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'score', 'level'],
  data(){
    return{
      title: '',
    }
  },
  computed: {
    computedTitle(){
      return this.title
    }
  },
  updated(){
    console.log(level)
    this.title = level
  }

}
</script>

<style scoped>
h2{
  background: #F0F0F0;
  border-radius: 5px;
  padding: 1%;
  text-align: center;
}
.cart{
  margin: 2% 5% 5% 5%;
  border-radius: 25px;
  padding: 10px 20px 10px 20px;
  box-shadow: 5px 5px 10px #888888;
}
.score-board{
  background: #696969;
  width: 20%;
  color: white;
  border-radius: 15px;
  padding: 2% 1% 1.5% 1%;
  min-width: 20%;
  margin-right: 2%;
  text-align: center;
}
.score-value{
  font-family: fantasy;
  font-size: 7vw;
  padding-bottom: 0%;
  margin: 0.5% 1% 0.5% 1%;
}
.score{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1.2vw;
  padding-top: 0%;
  margin: 0.5% 1% 0.5% 1%;
}
.panel{
  display: flex;
}
.meter{
  width: 80%;
  display: flex;
  flex-direction: column;
}
.meter-title-container{
  background-color: #B4C424;
  border-radius: 10px;
  color: white;
  height: 80%;
}
.meter-title{
  font-size: 3vw;
  text-align: center;
}
.bar{
  width: 100%;
  height: 20%;
  border-radius: 10px;
  background-color: #b3b3b3;
  color: white;
  text-align: center;
  font-size: 0.9vw;
}
.normal{
  width: 20%;
  height: 100%;
  float: left;
  background-color: #B4C424;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.mild{
  width: 20%;
  height: 100%;
  float: left;
  background-color: #FFD700;
}
.moderate{
  width: 20%;
  height: 100%;
  float: left;
  background: #FFA500;

}
.severe{
  width: 20%;
  height: 100%;
  float: left;
  background: #FF4500;
}
.extremely-severe{
  width: 20%;
  height: 100%;
  float: left;
  background: #8B0000;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  font-size: 0.8vw;
}
.interpretation{
  font-size: 1.5vw;
  margin-top: 3%;
  text-align: center;
}
.arrow-up {
  margin-left: 7%;
  width: 3%;
  height: 0;
  padding-left:3%;
  padding-bottom: 3%;
  overflow: hidden;
}
.arrow-up:after {
  content: "";
  display: block;
  width: 0;
  height: 0;
  margin-left:-250px;
  border-left: 250px solid transparent;
  border-right: 250px solid transparent;
  border-bottom: 250px solid #B4C424;
}
</style>
