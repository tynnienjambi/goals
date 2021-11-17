
  //   var daysOfTheWeek = [
  //     "Sunday",
  //     "Monday",
  //     "Tuesday",
  //     "Wednesday",
  //     "Thursday",submission = function() {
  //     "Friday",
  //     "Saturday"
  //   ];
  //   var maleNames = [
  //     "Kwasi",
  //     "Kwadwo",
  //     "Kwabena",
  //     "Kwaku",
  //     "Yaw",
  //     "Kofi",
  //     "Kwame"
  //   ];
  //   var femaleNames = [
  //     "Akosua",
  //     " Adwoa",
  //     "Abenaa",
  //     "Akua",
  //     "Yaa",
  //     "Afua",
  //     "Ama"
  //   ];
  //   var month = parseInt(document.getElementById("month").value);
  //   var year = parseInt(document.getElementById("year").value);
  //   var day = parseInt(document.getElementById("day").value);
  //   var name =(document.getElementById("name").value);
  //   var date0fbirth = new Date(year + "/" + month + "/" + day);
  //   var results = date0fbirth.getDay();
  //   var output = document.getElementById("output");
  //   var male = document.getElementById("male")
  //   var female = document.getElementById("female")
    
  //   if (month =="" && year =="" && day =="" && name=="") {
  //     alert("Please Enter you credentials");
  //     return false;
  //   }
  
  // //   if (month == null || month== "", day == null || day == "", year== null || year == "", name == null || name == "") {
  // //     alert("Please Fill All Required Field");
  // //     return false;
  // //   }
  // // }
    
    
  //  if (year < 0) {
  //     output.style.background ="red"
  //     output.style.color= "white"
  //     output.innerHTML = "Hey! " + name + " please enter a valid year! "
  // }
    
  // else if ((month < 1) || (month > 31)) {
  //     output.style.background ="red"
  //     output.style.color= "white"
  //     output.innerHTML = "Hey! " + name + " please enter a valid month! "
  // }
    
  //  else if (day < 0 || day > 31) {
  //     output.style.background ="red"
  //     output.style.color= "white"
  //     output.innerHTML = "Hey! " + name + " please enter a valid day! "
  // }
  // //  var valid = (year>0 && (month > 0 && month <= 12) (day > 0 && day <32))
   
  //  if(valid == false){
  // //    alert("No Input received!!");
  // //  }
  
  //   if(male.checked && year > 0 && month > 0 && month < 12 && day > 0 && day < 32) {
  //     output.style.background ="lime"
  //       output.innerHTML = "Hey! " + name + " you were born on a " + daysOfTheWeek[results] + " and your Akan name is " + maleNames[results];
  //   }
  //    else if(female.checked && year > 0 && month > 0 && month < 12 && day > 0 && day < 32) {
  //     output.style.background ="lime"
  //     output.style.background ="red"
  //     output.innerHTML = "Hey! " + name + " you were born on a " + daysOfTheWeek[results] + " and your Akan name is " + femaleNames[results];
  // }
  
  // };
 
  function computation(){
      // arrays declaration
      let maleNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
      let FemaleNames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
      
      // variables declaration
      let day=parseInt(document.getElementById('day').value);
      let month=parseInt(document.getElementById('month').value);
      let fullyear=parseInt(document.getElementById('year').value);
      let gender=document.getElementById('gender').value;
  
      // slice fullyear
      let year1=fullyear.toString().slice(-2);
      let year=parseInt(year1);
  
      let century=Math.ceil((fullyear)/100)-1;
      // computation
      let dayOfWeek=((((century/4)-2*century-1)+((5*year/4))+((26*(month+1)/10))+day)%7);
      // validation
      if(day>0&&day<32){
          if(month>0&&month<13){
              if(gender=='male'){
                  let i=0;
                         for(i; i<=6;i++){
                             if(i==Math.floor(dayOfWeek)){
                              alert("Your akan name is "+maleNames[i]);
                              location.reload();
          
                             }
                         }                    
              }
                
              else{
                  for(i=0; i<=6;i++){
                      if(i==Math.floor(dayOfWeek)){
                       alert("Your akan name is "+FemaleNames[i]);
                       location.reload();
  
          
                      }
                  }             
              }
          }
          else{
              alert("Invalid month entered");
          }
      }
      else{
          alert("Invalid day entered");
      }
  }