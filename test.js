//Check status code is 200(success)
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
    console.log(pm.response)
});
//Check response time is less than 200ms
pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

//"Print all company names ending in Group"
 var jsonData = pm.response.json();
 console.log("this the data",jsonData);
 jsonData.forEach(item =>{
     //using regex
     if(item.company.name.match("Group$")){ //only print company names ending with "Group"
          console.log(item.company.name);
     }
 //  if(endsWith(item.company.name,"Group")){
  //       console.log(item.company.name);
  // }
})

//using sub string
function endsWith(str,value) {
     return value === str.substr(0 - value.length);
}
