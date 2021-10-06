<template>
  <div>

    <div class="container" id="title-print">
        <div class="row" style="margin-bottom: 30px">
            <div class="col-md">
            </div>
            <div class="col-md">
                <h3>DIAGNOSIS</h3>
            </div>
            <div class="col-md">
                <b-button @click="exportToPDF" size="sm" class="my-1"><b-icon icon="printer" aria-hidden="true"></b-icon> Print</b-button>
            </div>
        </div>
    </div>
    <div ref="document">
      <result :name="this.data.stress.name" :score="this.data.stress.score" :level="this.data.stress.level" :desc="this.data.stress.desc" :colour="this.data.stress.colour" :width="this.data.stress.width" :text="this.data.stress.text" :label="this.data.stress.label"></result>
      <div class="break"></div>
      <result :name="this.data.anxiety.name" :score="this.data.anxiety.score" :level="this.data.anxiety.level" :desc="this.data.anxiety.desc" :colour="this.data.anxiety.colour" :width="this.data.anxiety.width" :text="this.data.anxiety.text" :label="this.data.anxiety.label"></result>
      <div class="break"></div>
      <result :name="this.data.depression.name" :score="this.data.depression.score" :level="this.data.depression.level" :desc="this.data.depression.desc" :colour="this.data.depression.colour" :width="this.data.depression.width" :text="this.data.depression.text" :label="this.data.depression.label"></result>
    </div>

    <div class="btnGroup">
      <button @click="redirectToDass" id = "returnBtn" type="button" class="btn">Return</button>
      <button  @click="redirectToReqAppt" id = "reqBtn" type="button" class="btn">Request Appointment</button>
    </div>
  </div>
</template>

<script>
import result from './dassResultChild'
import html2pdf from 'html2pdf.js'

export default {
  components: {result},
  data(){
    return{
      data: {}
    }
  },
  methods: {
			exportToPDF () {
				html2pdf(this.$refs.document, {
					margin: [0.5, 0, 0.5, 0],
					filename: 'DASS Test Result.pdf',
					image: { type: 'jpeg', quality: 1.0 },
					html2canvas: { dpi: 192, letterRendering: true, scale: 2, windowWidth: 400 },
					jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
          pageBreak: {mode: ['css', 'avoid-all'] }
				})
			},
      redirectToReqAppt(){
        this.$router.push({path: '/reqApp', query: {type: 2, id: this.$route.query.id}})
      },
      redirectToDass(){
        this.$router.push({path: '/dass'})
      }
	},
  created(){
    this.data = JSON.parse(sessionStorage.getItem("dassData"))
  }
}
</script>

<style scoped>
h2{
  text-align: center;
  margin-bottom: 10px;
}
#title-print{
    text-align: center;
    padding: 2px;
    position: relative;
    width: 70%;
}
.btnGroup{
  margin-top: 2%;
  display: flex;
  justify-content: space-evenly;
}
#returnBtn:hover {
  opacity: 0.6;
}
#reqBtn:hover {
  opacity: 0.6;
}
.break{
  page-break-after: always;
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
</style>
