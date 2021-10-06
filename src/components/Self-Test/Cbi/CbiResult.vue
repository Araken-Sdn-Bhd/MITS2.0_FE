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
      <result :name="this.data.personal.name" :score="this.data.personal.score" :level="this.data.personal.level" :desc="this.data.personal.desc" :colour="this.data.personal.colour" :text="this.data.personal.text" :width="this.data.personal.width" :label="this.data.personal.label"></result>
      <!-- <div class="break"></div> -->
      <result :name="this.data.work.name" :score="this.data.work.score" :level="this.data.work.level" :desc="this.data.work.desc" :colour="this.data.work.colour" :text="this.data.work.text" :width="this.data.work.width" :label="this.data.work.label"></result>
      <!-- <div class="break"></div> -->
      <result :name="this.data.client.name" :score="this.data.client.score" :level="this.data.client.level" :desc="this.data.client.desc" :colour="this.data.client.colour" :text="this.data.client.text" :width="this.data.client.width" :label="this.data.client.label"></result>
      <div v-if="showTimestamp" class="container d-flex flex-row-reverse"><p class="font-italic">{{this.timestamp}}</p></div>
    </div>

    <div class="btnGroup">
      <button @click="redirectToCbi" id = "returnBtn" type="button" class="btn">Return</button>
      <button  @click="redirectToReqAppt" id = "reqBtn" type="button" class="btn">Request Appointment</button>
    </div>
  </div>
</template>

<script>
import result from './cbiResultChild'
import html2pdf from 'html2pdf.js'

export default {
  components: {result},
  data(){
    return{
      data: {},
      timestamp: '',
      showTimestamp: false
    }
  },
  methods: {
			// exportToPDF () {
			// 	html2pdf(this.$refs.document, {
			// 		margin: [0.5, 0, 0.5, 0],
			// 		filename: 'CBI Test Result.pdf',
			// 		image: { type: 'jpeg', quality: 1.0 },
			// 		html2canvas: { dpi: 192, letterRendering: true, scale: 2, windowWidth: 400 },
			// 		jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
      //     pageBreak: {mode: ['css', 'avoid-all'] }
			// 	})
			// },
      async exportToPDF () {
        let componentToPrint = this.$refs.document
        let body = document.body
        let html = document.documentElement
        let height = Math.max(body.scrollHeight, body.offsetHeight,
                       html.clientHeight, html.scrollHeight, html.offsetHeight)
        let heightCM = (height / 35.35)
        this.timestamp = "Printed on: " + new Date().toLocaleString('en-GB')
        this.showTimestamp = true
				await html2pdf(componentToPrint, {
					margin: 0.5,
					filename: 'CBI Test Result.pdf',
					image: { type: 'jpeg', quality: 1.0 },
					html2canvas: { dpi: 192, letterRendering: true, scale: 2, windowWidth: 2000},
					jsPDF: { unit: 'cm', orientation: 'portrait', format: [heightCM, 60] },
          // pageBreak: {mode: ['css', 'avoid-all'] }
				})
         this.showTimestamp = false
			},
      redirectToReqAppt(){
        this.$router.push({path: '/reqApp', query: {type: 3, id: this.$route.query.id}})
      },
      redirectToCbi(){
        this.$router.push({path: '/cbi'})
      }
	},
  created(){
    this.data = JSON.parse(sessionStorage.getItem("cbiData"))
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
