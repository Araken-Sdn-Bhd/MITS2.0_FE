<template>
<div>
    <h4>In the last 30 days, how much difficulty did you have in:<br><span class="hBM">Sepanjang 30 hari yang lalu, berapa banyak kesukaran yang anda telah alami dalam:</span>
    </h4>
    <div id="subques">
        <h5>{{domain}}</h5>
        <div class="bm white">{{domainBM}}</div>
    </div>
    
    <div class ="row justify-content-between">
    <div class="col-md-auto">
        <div class = "r">
            <p id = "num">1</p>
            <p class="indicator">None<br><span class="bm">Tiada</span></p>
        </div>
    </div>
    <div class="col-md-auto">
        <div class = "r">
            <p id = "num">2</p>
            <p class="indicator">Mild<br><span class="bm">Ringan</span></p>
        </div>
    </div>
    <div class="col-md-auto">
        <div class = "r">
            <p id = "num">3</p>
            <p class="indicator">Moderate<br><span class="bm">Sederhana</span></p>
        </div>
    </div>
    <div class="col-md-auto">
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
</div>
  
</template>

<script scoped>
export default {
    props: ['domain', 'domainBM'],

}
</script>

<style>
h4 {
  text-align: center;
}

h5{
    color: white;
    font-weight: bold;
    text-align: center;
}
#subques{
    background-color: rgb(146, 145, 145);
    padding: 20px;
    margin-bottom: 30px;
    margin-top: 30px;
}
.r{
  display: inline-flex;
  width: 100%;
  align-items: center;
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
.indicator{
  margin: 10px 10px 0px 0px;
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
.white{
    color: white;
}
</style>