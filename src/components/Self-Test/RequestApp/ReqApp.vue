<template>
    <div class="container" id = "test">
    <h3>Request Appointment</h3>
    <hr id="reqApp">
    <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
    </div>
</template>

<script>
export default {
data() {
    return{
        model: {
            mentari: '',
            fullName: '',
            email: '',
            nric_passport: '',
            telNum: '',
            address1: '',
            address2: '',
            postCode: '',
            city: '',
            state: '',
            stateList: [],
            cityList: [],
            postcodeList: []
        },
        schema : {
            fields: [
                {
                    type: "select",
                    label: "Mentari",
                    model: "mentari",
                    values: [
                        {id:0, name:"Mentari Selayang (HQ)"},
                        {id:1, name:"Mentari Sungai Buloh"},
                        {id:2, name:"Mentari Klang"}
                        ],
                    selectOptions : {
                        hideNoneSelectedText: true,
                    },
                    validator: "required"
                },
                {
                    type: "input",
                    inputType: "text",
                    label: "Full Name",
                    model: "fullName",
                    validator: "string",
                    required: true
                },
                {
                    type: "input",
                    inputType: "text",
                    label: "NRIC/Passport No",
                    model: "nric_passport",
                    styleClasses: "col-md-6"
                },
                {
                    type: "input",
                    inputType: "email",
                    label: "Email",
                    model: "email",
                    required: true,
                    validator: "email",
                    placeholder: 'example@gmail.com',
                    styleClasses: "col-md-6"
                },
                {
                    type: "cleave",
                    label: "Contact Number",
                    model: "telNum",
                    cleaveOptions: {
                        phone: true,
                        phoneRegionCode: 'MY'
                    },
                    required: true,
                    validator: 'required',
                    styleClasses: "col-md-6"
                },
                {
                    type: "input",
                    inputType: "text",
                    label: "Address",
                    model: "address1",
                    placeholder: 'Address line 1',
                    validator: "string",
                },
                {
                    type: "input",
                    inputType: "text",
                    model: "address2",
                    placeholder: 'Address line 2',
                    validator: "string",
                },
                {
                    type: "select",
                    label: "State",
                    model: "state",
                    onChanged: function(model){
                        this.$axios
                            .get('http://127.0.0.1:8000/api/getCity?state_id='+model.state)
                            .then((response) =>{
                                model.cityList = response.data.data
                            })
                    },
                    values: function(model){
                        return model.stateList
                    },
                    selectOptions : {
                        hideNoneSelectedText: true,
                    },
                    styleClasses: "col-md-4"
                },
                {
                    type: "select",
                    label: "City",
                    model: "city",
                    onChanged: function(model){
                        this.$axios
                            .get('http://127.0.0.1:8000/api/getPostcode?city_id='+model.city)
                            .then((response) =>{
                                model.postcodeList = response.data.data
                            })
                    },
                    values: function(model){
                        return model.cityList
                    },
                    selectOptions : {
                        hideNoneSelectedText: true,
                    },
                    styleClasses: "col-md-4"
                },
                {
                    type: "select",
                    label: "Postcode",
                    model: "postCode",
                    values: function(model){
                        return model.postcodeList
                    },
                    selectOptions : {
                        hideNoneSelectedText: true,
                    },
                    styleClasses: "col-md-4"
                },
            ],
            groups: [
                {
                    styleClasses: 'groupBtn',
                    fields: [
                        {
                            id: 'cnl',
                            type: 'submit',
                            label: '',
                            onSubmit: ()=>{
                            this.redirectToPrevious()
                            },
                            buttonText: "Cancel",
                            validateBeforeSubmit: false,
                            styleClasses: 'cancelBtn'
                        },
                        {
                            type: 'submit',
                            onSubmit: ()=>{
                            this.postToDB()
                            },
                            label: '',
                            buttonText: "Submit",
                            validateBeforeSubmit: true,
                        }
                    ]
                }
            ]
        },
        formOptions: {
            validateAfterLoad: false,
            validateAfterChanged: true,
            validateAsync: true
        },
    }
},
mounted(){
    this.$axios
        .get('http://127.0.0.1:8000/api/getState?country_id=0')
        .then((response) =>{
            this.model.stateList = response.data.data
        })
},
    methods:{
        postToDB(){
            var result_id = this.$route.query.id;
            const data = new FormData();
            data.append("request_app", JSON.stringify(this.model));
            data.append("result_id", result_id);

            this.$axios
                .post('http://127.0.0.1:8000/api/post', data)
                .then((response) =>{
                    return response.data
                })
        },
        /*
        requestAppointment(){

            const edittedIc = this.model.nric.replace(/-/g, '');
            const edittedTelNum = this.model.telNum.replace(/ /g, '');

            const dataUp = new FormData()
            dataUp.append("mentari", this.model.mentari)
            dataUp.append("fullName", this.model.fullName)
            dataUp.append("email", this.model.email)
            dataUp.append("nric", edittedIc)
            dataUp.append("telNum", edittedTelNum)
            dataUp.append("address1", this.model.address1)
            dataUp.append("address2", this.model.address2)
            dataUp.append("postcode", 1)
            dataUp.append("city", 1)
            dataUp.append("state", 1)
            dataUp.append("resultId", sessionStorage.getItem("resultId"))

            this.$axios
            .post("http://127.0.0.1:8000/api/postAppt", dataUp)
            .then((response)=>{
              return response.data
            });
        },*/
        redirectToPrevious(){
            this.$router.back()
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
h3 {
  text-align: center;
  font-weight: bold;
  margin-bottom: 30px;
}
hr [id=reqApp]{
   margin: 20px 0px 20px 0px
}
#test {
  box-shadow: 0px 10px 15px #6b6b6b9c;
  padding: 40px 40px 100px 40px;
  border-radius: 20px;
  margin-bottom: 50px;
  width: 50%
}
@media (max-width: 760px) {
    #test {
        padding: 20px 20px 100px 20px;
        width: 90%
    }
    h3 {
        text-align: center;
        font-weight: bold;
        margin-bottom: 10px;
        margin-top: 10px;
    }
}
</style>
