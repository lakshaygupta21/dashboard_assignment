const axios = require('axios');
const fs = require('fs');
// Make a request for a user with a given ID
var data = [];
const getData = ()=>{
    try{
axios.get('http://3.89.27.245/api/v2/delispeedservice/_table/Reservations?fields=FirstName,StartTime,Phoneno,ReservationId&order=StartTime%20ASC&api_key=87844c86a2ba5720fdfd7e48df7922cd8e4dd8dca52a7bb357c8bcc8eb68075a')
  .then(function (response) {
   // return response.data.resource;
   // console.log(data);
   data = response.data;
   fs.writeFile("sample1.text", JSON.stringify(data), (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("File has been created");
    });
   
  })
  .catch(function (error) {
    // handle error
    return error;
    //console.log(error);
  })
}catch(err){
    alert(err);
}};
//exports.getData = getData;
getData();
