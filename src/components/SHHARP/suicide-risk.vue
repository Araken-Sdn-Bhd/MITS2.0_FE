<template>
<div class="shharp">
    <div>
      <b-navbar toggleable="lg" type="light" class="nav-bg-colour">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="mx-auto stretch" justified>
            <router-link to="/risk-factors" class="nav-item nav-link my-auto">Risk Factors</router-link>
            <router-link to="/protective-factors" class="nav-item nav-link my-auto">Protective Factors</router-link>
            <router-link to="/self-harm-act-and-suicidal-intent" class="nav-item nav-link my-auto">The Self-harm Act and Suicidal Intent</router-link>
            <router-link to="/suicide-risk" class="nav-item nav-link my-auto">Suicide Risk</router-link>
            <router-link to="/hospital-management" class="nav-item nav-link my-auto">Hospital Management</router-link>
            <router-link to="/source-data-producer" class="nav-item nav-link my-auto">Source Data Producer</router-link>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div class = "risk">
        <p id="inst">Instruction: Please tick (/) in the box provided</p>
        <div class="row">
            <div class="col-md-3">
                <p id="level-txt">Level of suicide risk for current attempt</p>
            </div>
            <div class="col-md">
                <div class = "level">
                    <div class="row pl">
                        <div class="col-4">
                            <p id="risk-lvl-txt">Risk Level</p>
                        </div>
                        <div class="col">
                            <p id="risk-txt">Based on Risk Factor/Protective Factor/Suicidal Intent</p>
                        </div>
                    </div>
                    <hr>
                    <div class="pl">
                        <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  
</template>

<script>
export default {
    data(){
        return{
          model:{
              level: []
          },
          schema:{
              groups: [
                {
                    fields: [
                        {
                            type: "checklist",
                            values: [
                                {value: 1, name:"High"}
                                ],
                            listBox: true,
                            model: "level",
                            styleClasses: "col-4",
                            validator:'required',
                        },
                        {
                            type: "label",
                            label:'Psychiatric diagnoses with severe symptoms or acute precipitating events; protective factors not relevant; high suicidal intent',
                            styleClasses:'col-8'
                        },
                    ],
                },
                {
                    fields :[
                        {
                            type: "checklist",
                            values: [
                                {value: 2, name:"Moderate"}
                                ],
                            listBox: true,
                            model: "level",
                            styleClasses: "col-4",
                            validator:'required',
                        },
                        {
                            type: "label",
                            label:'Multiple risk factors, few protective factors, moderate suicidal intent',
                            styleClasses:'col-8'
                        },
                    ],
                },
                {
                    fields: [
                        {
                            type: "checklist",
                            values: [
                                {value: 3, name:"Low"}
                                ],
                            listBox: true,
                            model: "level",
                            styleClasses: "col-4",
                            validator:'required',
                        },
                        {
                            type: "label",
                            label:'Modifiable risk factors, strong protective factors, no or low suicidal intent',
                            styleClasses:'col-8'
                        },
                    ]
                },
                {
                    styleClasses: 'groupBtn',
                    fields: [
                        {
                            id: 'cnl',
                            type: 'submit',
                            label: '',
                            onSubmit: ()=>{
                                redirectToHome()
                            },
                            buttonText: 'Previous',
                            validateBeforeSubmit: false
                        },
                        {
                            type: 'submit',
                            label: '',
                            onSubmit(model){
                                sessionStorage.setItem("SR_data", JSON.stringify(model));
                            },
                            buttonText: 'Next',
                            validateBeforeSubmit:  true,
                        },
                    ]
                },
              ],
            },
            formOptions: {
                validateAfterLoad: false,
                validateAfterChanged: true,
                validateAsync: true,
            }  
        }
    },
    created(){
        if(sessionStorage.getItem("SR_data") != null){
            this.data = JSON.parse(sessionStorage.getItem("SR_data"));
            this.model.level = this.data.level

        }
    }
}
</script>

<style scoped>
h1{
  padding: 10px;
  margin-top: 20px;
}
#inst{
    margin-bottom: 30px;
    font-weight: bold;
    font-size: 20px;
}
.nav{
    width: 80%;
}
.shharp{
  border-radius: 10px;
  margin-bottom: 50px;
}
.requiredLabel{
  color: red;
}
.risk{
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 30px;
}
.level{
    border: 2px solid rgb(194, 194, 194);
    border-radius: 10px;
}
#level-txt{
    font-weight: bold;
}
#risk-lvl-txt{
    font-weight: bold;
    padding-top: 20px;
    padding-left: 20px;
    
}
#risk-txt{
    font-weight: bold;
    padding-top: 20px;
    margin-left: 12px;
}
hr{
    margin: 0px;
}
.nav-bg-colour{
  background: #B2BEB5;
}
.stretch{
  flex-grow: 1;
}
#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

.router-link-exact-active {
  color: whitesmoke !important;
  background: crimson;
  border-radius: .5rem;
}

@media (max-width: 472px){
    .shharp{
        width: 95%;
    }
    .risk{
        padding: 10px;
    }
}

</style>