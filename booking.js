//  function generateGst() {
//                 let numberOfKilometersYouTravel = document.querySelector("people").value;
//                 let vechileType=document.querySelector("cabType").value;
//                 let amount=0;
//                 let travelPersons=document.getElementById("#travelpeople").value;
//                 if(travelPersons>3) {
//                     alert("You can Travel in Macro or Prime")
//                 } else if(travelPersons>5) {
//                     alert("you can travel in prime");
//                 } else {
//                     alert("you can travel in macro")
//                 }







//                 if(vechileType=="micro") {
//                      amount=numberOfKilometersYouTravel*10;
//                 } else if(vechileType=="macro") {
//                     amount=numberOfKilometersYouTravel*15
//                 } else {
//                     amount=numberOfKilometersYouTravel*20
//                 }
                
                
//                 var birthDay = document.getElementById("date").value;  
//                 var dob = new Date(birthDay)
//                 let gst=0;
//                 var year=dob.getUTCFullYear();
//                 var currentYear = Date.now().getUTCFullYear();
//                 var age = currentYear - year;
//                 if(age>60) {
//                 //if(year-Date.now()<=60 && year-Date.now()>=18) {
//                      gst=amount+(amount*7.0/100.0);
//                 document.getElementById("gst").innerHTML= gst ;
//                 document.getElementById("summary").innerHTML=amount
//                 } else{
//                     gst=amount+(amount*7.0/100.0)/2;
//                 document.getElementById("gst").innerHTML= gst ;
//                 document.getElementById("summary").innerHTML=amount;
            
//                 }

                
//             }


function generateGst() {
    event.preventDefault();
    alert("hello js works")
    let cabType=document.querySelector("#cabType").value;
    let numberOfKilometersYouTravel=document.querySelector("#kilometer").value;
    let numberOfPeople=document.querySelector("#travelpeople").value;
    let totalAmount=0;
    let amount=0;
    if(cabType=="micro") {
         amount=numberOfKilometersYouTravel*10;
          totalAmount=amount+((amount*7.0)/100)
         document.getElementById("amount").innerHTML=totalAmount;
         
    } else if(cabType=="macro") {
        amount=numberOfKilometersYouTravel*15;
       totalAmount=amount+((amount*7.0)/100)
        document.getElementById("amount").innerHTML=totalAmount;
    } else {
        amount=numberOfKilometersYouTravel*20;
         totalAmount=amount+((amount*7.0)/100)
        document.getElementById("amount").innerHTML=totalAmount;
    }
 
}