<template>
  <div>
    <b-container fluid class="mt-2 mb-3">
      <b-row class="justify-content-md-center">
        <b-col class="col-md-8">
          <b-img fluid center :src="allLogo" alt="Logo"></b-img>
        </b-col>
      </b-row>
    </b-container>
    <h1 id="testName">{{testName}}</h1>
  </div>
</template>

<script>
export default {
  props: ['testName'],
  data(){
    return{
        allLogo: require('@/assets/images/all.png')
    }
  }
}
</script>

<style>
#testName{
  margin-bottom: 50px;
  margin-top: 50px;
  color: #595142;
  font-family: "Roboto", Sans-serif;
  font-size: 53px;
  font-weight: 600;
  text-align: center;
  font-size: 4vw;
  padding: 50px;
  background-color: #F7F6F1;
}
@media (max-width: 760px) {
   #testName{
     font-size: 8vw;
   }
}
</style>
