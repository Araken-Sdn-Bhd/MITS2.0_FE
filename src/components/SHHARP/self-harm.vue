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
    <div class="inner-shharp">
        <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
    </div>
</div>
  
</template>

<script>
export default {
    data(){
        return{
          model:{
              secA:{
                  date: '',
                  time: '',
                  occurance: '',
                  occur_other: ''
              },
              secB:{
                  method: '',
                  m1_select: '',
                  m1_specify:'',
                  m99_specify: ''
              },
              secC:{
                  idea: '',
                  idea_specify:'',
              },
              secD:{
                  intent:'',
                  yes:'',
                  y99_specify:''
              },
              secE: [],
              secE_score:''
          },
          schema:{
              groups: [
                {
                    legend: "Section A: CURRENT SELF-HARM ACT (within past 2 weeks from time of presentation)",
                    fields: [
                        {
                            type: "input",
                            inputType: "date",
                            label: "Date",
                            model: "secA.date",
                            format: "YYYY-MM-DD",
                            styleClasses: "col-sm-6",
                            required: true,
                            validator: "required"
                        },
                        {
                            type: "input",
                            inputType: "time",
                            label: "Time",
                            model: "secA.time",
                            styleClasses: "col-sm-6",
                            required: true,
                            validator: "required"
                        },
                        {
                            type: "select",
                            label: "Place of Occurance",
                            model: "secA.occurance",
                            values:[
                                {name: "Home", id: 1 },
                                {name: "Residential instituition", id: 2},
                                {name: "School & public admin area", id: 3},
                                {name: "Sports & athletics area", id: 4},
                                {name: "Street & highway", id: 5},
                                {name: "Trade & service area", id: 6},
                                {name: "Industrial & construction area", id: 7},
                                {name: "Farm / plantation", id: 8},
                                {name: "Others specified areas", id: 99}
                            ],
                            selectOptions : {
                            hideNoneSelectedText: true,
                            },
                            styleClasses: "col-sm-6",
                            required: true,
                            validator: "required"
                        },
                        {
                            type: "input",
                            inputType: "text",
                            label: "&nbsp",
                            model: "secA.occur_other",
                            placeholder: "Other specified areas",
                            styleClasses: "col-sm-3",
                            visible: function(model){
                                return model && model.secA.occurance == 99;
                            },
                            required: true,
                            validator: "string"
                        },
                        
                    ]
                },
                {
                    legend: "Section B: METHOD OF SELF-HARM (please document the recent method only)",
                    fields: [
                        {
                            type: "label",
                            label: 'Instruction: Please tick (/) in the box provided'
                        },
                        {
                            type: "checklist",
                            values: [
                                {value: 1, name:"Overdose / Poisoning"}
                                ],
                            listBox: true,
                            model: "secB.method",
                            styleClasses: "col-sm-4"
                        },
                        {
                            type: "select",
                            model: "secB.m1_select",
                            values:[
                                {name: "Medications, specify", id: 1 },
                                {name: "Illicit substances, specify", id: 2},
                                {name: "Chemicals (including pesticides), specify", id: 3},
                            ],
                            selectOptions : {
                                hideNoneSelectedText: true,
                            },
                            styleClasses: "col-sm-4",
                            visible: function(model){
                                return model && model.secB.method.includes(1);
                            }
                        },
                        {
                            type: "input",
                            inputType: "text",
                            model: "secB.m1_specify",
                            placeholder: "Please specify",
                            styleClasses: "col-sm-3",
                            visible: function(model) {
                                if(model.secB.method.includes(1)){
                                    return model && model.secB.m1_select == 1 || model.secB.m1_select == 2 || model.secB.m1_select == 3;
                                }
                            },
                            required: true,
                            validator: "string"
                        },
                        {
                            type: "checklist",
                            values: [
                                {value: 2, name:"Hanging / suffocation"}
                                ],
                            listBox: true,
                            model: "secB.method",
                            styleClasses: "col-sm-4"
                        },
                        {
                            type: "checklist",
                            values: [
                                {value: 3, name:"Drowning"}
                                ],
                            listBox: true,
                            model: "secB.method",
                            styleClasses: "col-sm-4"
                        },
                        {
                            type: "checklist",
                            values: [
                                {value: 4, name:"Firearms or explosives"}
                                ],
                            listBox: true,
                            model: "secB.method",
                            styleClasses: "col-sm-4"
                        },
                        {
                            type: "checklist",
                            values: [
                                {value: 5, name:"Fire / flames"}
                                ],
                            listBox: true,
                            model: "secB.method",
                            styleClasses: "col-sm-4"
                        },
                        {
                            type: "checklist",
                            values: [
                                {value: 6, name:"Cutting or Piercing"}
                                ],
                            listBox: true,
                            model: "secB.method",
                            styleClasses: "col-sm-4"
                        },
                        {
                            type: "checklist",
                            values: [
                                {value: 7, name:"Jumping from height"}
                                ],
                            listBox: true,
                            model: "secB.method",
                            styleClasses: "col-sm-4"
                        },
                        {
                            type: "checklist",
                            values: [
                                {value: 99, name:"Others, specify"}
                                ],
                            listBox: true,
                            model: "secB.method",
                            styleClasses: "col-sm-4"
                        },
                        {
                            type: "input",
                            inputType: "text",
                            model: "secB.m99_specify",
                            placeholder: "Please specify",
                            styleClasses: "col-sm-4",
                            visible: function(model){
                                return model && model.secB.method.includes(99);
                            },
                            required: true,
                            validator: "string"
                        },
                    ]
                },
                {
                    legend: "Section C: HOW DID PATIENT GET IDEA ABOUT METHOD",
                    fields: [
                        {
                            type: "label",
                            label: "Instruction: Please tick (/) in the box provided",
                        },
                        {
                            type: "checklist",
                            values: [
                                {value: 1, name:"Family, friend, peer group"}
                                ],
                            listBox: true,
                            model: "secC.idea",
                            styleClasses: "col-sm-4"
                        },
                        {
                            type: "checklist",
                            values: [
                                {value: 2, name:"Internet (website, social media platform, app, blog, forum, video/photosharing)"}
                                ],
                            listBox: true,
                            model: "secC.idea",
                            styleClasses: "col-sm-4"
                        },
                        {
                            type: "checklist",
                            values: [
                                {value: 3, name:"Printed media (newspaper, books, magazine, etc)"}
                                ],
                            listBox: true,
                            model: "secC.idea",
                            styleClasses: "col-sm-4"
                        },
                        {
                            type: "checklist",
                            values: [
                                {value: 4, name:"Broadcast media (television, radio)"}
                                ],
                            listBox: true,
                            model: "secC.idea",
                            styleClasses: "col-sm-4"
                        },
                        {
                            type: "checklist",
                            values: [
                                {value: 99, name:"Specify patient actual words"}
                                ],
                            listBox: true,
                            model: "secC.idea",
                            styleClasses: "col-sm-4"
                        },
                        {
                            type: "input",
                            inputType: "text",
                            model: "secC.idea_specify",
                            placeholder:"Specify patient actual words",
                            styleClasses: "col-sm-4",
                            visible: function(model){
                                return model && model.secC.idea.includes(99);
                            },
                            required: true,
                            validator: "string"
                        }
                    ]
                },
                {
                    legend: "Section D: SUICIDAL INTENT",
                    fields: [
                        {
                            type: "radios",
                            label: "&nbsp Was there an intent?",
                            model: "secD.intent",
                            values:[
                                {value:1, name:"No"},
                                {value:2, name:"Yes"},
                                {value:3, name:"Undetermined"},
                            ],
                            required: true,
                            validator: "required"
                        },
                        {
                            type: "label",
                            label: "Instruction: Please tick (/) in the box<br>If yes, mode of expression (can tick more than 1)",
                            visible: function(model){
                                return model && model.secD.intent == 2;
                            },
                        },
                        {
                            type: "checklist",
                            values: [
                                {value: 1, name:"Verbal"}
                                ],
                            listBox: true,
                            model: "secD.yes",
                            styleClasses: "col-sm-4",
                            visible: function(model){
                                return model && model.secD.intent == 2;
                            }
                        },
                        {
                            type: "checklist",
                            values: [
                                {value: 2, name:"Messaging"}
                                ],
                            listBox: true,
                            model: "secD.yes",
                            styleClasses: "col-sm-4",
                            visible: function(model){
                                return model && model.secD.intent == 2;
                            }

                        },
                        {
                            type: "checklist",
                            values: [
                                {value: 3, name:"Rehearsing"}
                                ],
                            listBox: true,
                            model: "secD.yes",
                            styleClasses: "col-sm-4",
                            visible: function(model){
                                return model && model.secD.intent == 2;
                            }
                        },
                        {
                            type: "checklist",
                            values: [
                                {value: 4, name:"Not expressed"}
                                ],
                            listBox: true,
                            model: "secD.yes",
                            styleClasses: "col-sm-4",
                            visible: function(model){
                                return model && model.secD.intent == 2;
                            }
                        },
                        {
                            type: "checklist",
                            values: [
                                {value: 5, name:"Handwritten"}
                                ],
                            listBox: true,
                            model: "secD.yes",
                            styleClasses: "col-sm-4",
                            visible: function(model){
                                return model && model.secD.intent == 2;
                            }
                        },
                        {
                            type: "checklist",
                            values: [
                                {value: 6, name:"Social Media"}
                                ],
                            listBox: true,
                            model: "secD.yes",
                            styleClasses: "col-sm-4",
                            visible: function(model){
                                return model && model.secD.intent == 2;
                            }
                        },
                        {
                            type: "checklist",
                            values: [
                                {value: 7, name:"Efforts to learn more"}
                                ],
                            listBox: true,
                            model: "secD.yes",
                            styleClasses: "col-sm-4",
                            visible: function(model){
                                return model && model.secD.intent == 2;
                            }
                        },
                        {
                            type: "checklist",
                            values: [
                                {value: 99, name:"Others, specify"}
                                ],
                            listBox: true,
                            model: "secD.yes",
                            styleClasses: "col-sm-4",
                            visible: function(model){
                                return model && model.secD.intent == 2;
                            }
                        },
                        {
                            type: "input",
                            inputType: "text",
                            model: "secD.y99_specify",
                            placeholder: "Please specify",
                            styleClasses: "col-sm-4",
                            visible: function(model){
                                if(model.secD.intent == 2){
                                    return model && model.secD.yes.includes(99);
                                }
                            },
                            required: true,
                            validator: "string"
                        },
                    ]
                },
                {
                    legend: "Section E: LEVEL OF SUICIDAL INTENT (Beck's Suicide Intent Scale)",
                    fields: [
                        {
                            type: "radios",
                            label: "<ol><li>Isolation</li></ol>",
                            model: "secE[0]",
                            values:[
                                {value:0, name:"Somebody present"},
                                {value:1, name:"Somebody nearby, or in visual or vocal contact"},
                                {value:2, name:"No one nearby or in visual or vocal contact"},
                            ],
                            required: true,
                            validator: "required",
                        },
                        {
                            type: "radios",
                            label: "<ol  start='2'><li>Timing</li></ol>",
                            model: "secE[1]",
                            values:[
                                {value:0, name:"Intervention is probable"},
                                {value:1, name:"Intervention is not likely"},
                                {value:2, name:"Intervention is highly unlikely"},
                            ],
                            required: true,
                            validator: "required",
                            styleClasses: "line-top"
                        },
                        {
                            type: "radios",
                            label: "<ol start='3'><li>Precautions against discovery / intervention</li></ol>",
                            model: "secE[2]",
                            values:[
                                {value:0, name:"No precautions"},
                                {value:1, name:"Passive precautions (eg; alone in room with unlocked door"},
                                {value:2, name:"Active precautions (as locked door)"},
                            ],
                            required: true,
                            validator: "required",
                            styleClasses: "line-top"
                        },
                        {
                            type: "radios",
                            label: "<ol  start='4'><li>Acting to get help during / after attempt</li></ol>",
                            model: "secE[3]",
                            values:[
                                {value:0, name:"Notified potential helper regarding attempt"},
                                {value:1, name:"Contacted but did not specifically notify regarding attempt"},
                                {value:2, name:"Did not contact or notify potential helper"},
                            ],
                            required: true,
                            validator: "required",
                            styleClasses: "line-top"
                        },
                        {
                            type: "radios",
                            label: "<ol start='5'><li>Final acts in anticipating of death (will, gifts, insurance)</li></ol>",
                            model: "secE[4]",
                            values:[
                                {value:0, name:"None"},
                                {value:1, name:"Thought about or made some arrangements"},
                                {value:2, name:"Made definite plans or completed arrangements"},
                            ],
                            required: true,
                            validator: "required",
                            styleClasses: "line-top"
                        },
                        {
                            type: "radios",
                            label: "<ol start='6'><li>Active preparation for attempt</li></ol>",
                            model: "secE[5]",
                            values:[
                                {value:0, name:"None"},
                                {value:1, name:"Minimal to moderate"},
                                {value:2, name:"Extensive"},
                            ],
                            required: true,
                            validator: "required",
                            styleClasses: "line-top"
                        },
                        {
                            type: "radios",
                            label: "<ol start='7'><li>Suicide note</li></ol>",
                            model: "secE[6]",
                            values:[
                                {value:0, name:"Absence of note"},
                                {value:1, name:"Note written, but torn up; note thought about"},
                                {value:2, name:"Presence of note"},
                            ],
                            required: true,
                            validator: "required",
                            styleClasses: "line-top"
                        },
                        {
                            type: "radios",
                            label: "<ol start='8'><li>Overt communication of intent before the attempt</li></ol>",
                            model: "secE[7]",
                            values:[
                                {value:0, name:"None"},
                                {value:1, name:"Equivocal communication"},
                                {value:2, name:"Unequivocal communication"},
                            ],
                            required: true,
                            validator: "required",
                            styleClasses: "line-top"
                        },
                        {
                            type: "radios",
                            label: "<ol start='9'><li>Allged purpose of attempt</li></ol>",
                            model: "secE[8]",
                            values:[
                                {value:0, name:"To manipulate environment, get attention, get revenge"},
                                {value:1, name:"Components of above and below"},
                                {value:2, name:"To escape, surcease, solve problems"},
                            ],
                            required: true,
                            validator: "required",
                            styleClasses: "line-top"
                        },
                        {
                            type: "radios",
                            label: "<ol start='10'><li>Expectations of fatality</li></ol>",
                            model: "secE[9]",
                            values:[
                                {value:0, name:"Thought that death was unlikely"},
                                {value:1, name:"Thought that death was possible but not probable"},
                                {value:2, name:"Thought that death was probable or certain"},
                            ],
                            required: true,
                            validator: "required",
                            styleClasses: "line-top"
                        },
                        {
                            type: "radios",
                            label: "<ol start='11'><li>Conception of method's lethality</li></ol>",
                            model: "secE[10]",
                            values:[
                                {value:0, name:"Did less to self that s/he thought would be lethal"},
                                {value:1, name:"Wasn't sure if what s/he did would be lethal"},
                                {value:2, name:"Equaled or exceed what s/he thought would be lethal"},
                            ],
                            required: true,
                            validator: "required",
                            styleClasses: "line-top"
                        },
                        {
                            type: "radios",
                            label: "<ol start='12'><li>Seriousness of attempt</li></ol>",
                            model: "secE[11]",
                            values:[
                                {value:0, name:"Did not seriously attempt to end life"},
                                {value:1, name:"Uncertain about seriousness to end life"},
                                {value:2, name:"Seriously attempted to end life"},
                            ],
                            required: true,
                            validator: "required",
                            styleClasses: "line-top"
                        },
                        {
                            type: "radios",
                            label: "<ol start='13'><li>Attitude towards living/dying</li></ol>",
                            model: "secE[12]",
                            values:[
                                {value:0, name:"Did not want to die"},
                                {value:1, name:"Components of above and below"},
                                {value:2, name:"Wanted to die"},
                            ],
                            required: true,
                            validator: "required",
                            styleClasses: "line-top"
                        },
                        {
                            type: "radios",
                            label: "<ol start='14'><li>Conception of medical rescuability</li></ol>",
                            model: "secE[13]",
                            values:[
                                {value:0, name:"Thought death would be unlikely if received medical attention"},
                                {value:1, name:"Was uncertain if death could be averted by medical attention"},
                                {value:2, name:"Was certain of death even if received medical attention"},
                            ],
                            required: true,
                            validator: "required",
                            styleClasses: "line-top"
                        },
                        {
                            type: "radios",
                            label: "<ol start='15'><li>Degree of premeditation</li></ol>",
                            model: "secE[14]",
                            values:[
                                {value:0, name:"None; impulsive"},
                                {value:1, name:"Suicide contemplated for 3 hours or less prior to attempt"},
                                {value:2, name:"Suicide contemplated for more than 3 hours prior to attempt"},
                            ],
                            required: true,
                            validator: "required",
                            styleClasses: "line-top"
                        },
                        {
                            type: "label",
                            label: "Total Score",
                            styleClasses: "line-top"
                        },
                        {
                            type: "checklist",
                            values: [
                                {value: 1, name:"0-10  Low Intent"}
                                ],
                            listBox: true,
                            model: "secE_score",
                            styleClasses: "col-sm-3"
                        },
                        {
                            type: "checklist",
                            values: [
                                {value: 2, name:"11-20  Medium Intent"}
                                ],
                            listBox: true,
                            model: "secE_score",
                            styleClasses: "col-sm-3"
                        },
                        {
                            type: "checklist",
                            values: [
                                {value: 3, name:"21+  High Intent"}
                                ],
                            listBox: true,
                            model: "secE_score",
                            styleClasses: "col-sm-3"
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
                            buttonText: "Previous",
                            validateBeforeSubmit: false,
                            styleClasses: 'cancelBtn'
                        },
                        {
                            type: 'submit',
                            onSubmit(model){
                                sessionStorage.setItem("SH_data", JSON.stringify(model));
                            },
                            label: '',
                            buttonText: "Next",
                            validateBeforeSubmit: true,
                        }
                    ]
                },
            ], 
          },
          formOptions: {
            validateAfterLoad: false,
            validateAfterChanged: true,
            validateAsync: true,
            validationErrorClass: "error-field"
        }  
        }
    },
    created(){
        if(sessionStorage.getItem("SH_data") != null){
            this.data = JSON.parse(sessionStorage.getItem("SH_data"));

            this.model.secA.date = this.data.secA.date
            this.model.secA.time = this.data.secA.time
            this.model.secA.occurance = this.data.secA.occurance
            this.model.secA.occur_other = this.data.secA.occur_other
            this.model.secB.method = this.data.secB.method
            this.model.secB.m1_select = this.data.secB.m1_select
            this.model.secB.m1_specify = this.data.secB.m1_specify
            this.model.secB.m99_specify = this.data.secB.m99_specify
            this.model.secC.idea = this.data.secC.idea
            this.model.secC.idea_specify = this.data.secC.idea_specify
            this.model.secD.intent = this.data.secD.intent
            this.model.secD.yes = this.data.secD.yes 
            this.model.secD.y99_specify = this.data.secD.y99_specify
            this.model.secE = this.data.secE
            this.model.secE_score = this.data.secE_score


        }
    }
}
</script>

<style>
h1{
  padding: 10px;
  margin-top: 20px;
}
h5{
    margin-bottom: 30px;
    font-weight: bold;
}
.shharp{
  border-radius: 10px;
}
.inner-shharp{
    padding: 30px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding-bottom: 90px;
    margin-bottom: 50px;
}
.requiredLabel{
  color: red;
}
div.errors.help-block{
  display: none;
  width: 0px;
}
.error-field{
  background: #F9C1C6;
}
legend{
    font-size: large;
    font-weight: bold;
    background-color: rgb(231, 231, 231);
    padding: 10px;
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

#app > div.shharp > div.inner-shharp > div > fieldset:nth-child(5) > div:nth-child(2) > div > div > label, 
#app > div.shharp > div.inner-shharp > div > fieldset:nth-child(5) > div:nth-child(3) > div > div > label,
#app > div.shharp > div.inner-shharp > div > fieldset:nth-child(5) > div:nth-child(4) > div > div > label,
#app > div.shharp > div.inner-shharp > div > fieldset:nth-child(5) > div:nth-child(5) > div > div > label,
#app > div.shharp > div.inner-shharp > div > fieldset:nth-child(5) > div:nth-child(6) > div > div > label,
#app > div.shharp > div.inner-shharp > div > fieldset:nth-child(5) > div:nth-child(7) > div > div > label,
#app > div.shharp > div.inner-shharp > div > fieldset:nth-child(5) > div:nth-child(8) > div > div > label,
#app > div.shharp > div.inner-shharp > div > fieldset:nth-child(5) > div:nth-child(9) > div > div > label,
#app > div.shharp > div.inner-shharp > div > fieldset:nth-child(5) > div:nth-child(10) > div > div > label,
#app > div.shharp > div.inner-shharp > div > fieldset:nth-child(5) > div:nth-child(11) > div > div > label,
#app > div.shharp > div.inner-shharp > div > fieldset:nth-child(5) > div:nth-child(12) > div > div > label,
#app > div.shharp > div.inner-shharp > div > fieldset:nth-child(5) > div:nth-child(13) > div > div > label,
#app > div.shharp > div.inner-shharp > div > fieldset:nth-child(5) > div:nth-child(14) > div > div > label,
#app > div.shharp > div.inner-shharp > div > fieldset:nth-child(5) > div:nth-child(15) > div > div > label,
#app > div.shharp > div.inner-shharp > div > fieldset:nth-child(5) > div:nth-child(16) > div > div > label{
    display: block;
}
@media (max-width: 472px){
    .shharp{
        width: 95%;
    }
    .inner-shharp{
        padding: 10px;
    }
}

</style>