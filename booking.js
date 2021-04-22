


function generateGst() {
    event.preventDefault();
    let cabType=document.querySelector("#cabType").value;
    let numberOfKilometersYouTravel=document.querySelector("#kilometer").value;
   // let numberOfPeople=document.querySelector("#travelpeople").value;
  
    let totalAmount=0;
    let amount=0;
    if(cabType=="micro") {
         amount=numberOfKilometersYouTravel*10; 
    } else if(cabType=="macro") {
        amount=numberOfKilometersYouTravel*15;
    //    document.getElementById("display").innerHTML= document.getElementById("amount").innerHTML=totalAmount;
    } else {
        amount=numberOfKilometersYouTravel*20;
    }
    totalAmount=Math.ceil(amount+((amount*7.0)/100));
      //peak hours calculation:
      let peak=document.querySelector("#time").value;
      let hours= parseInt(peak.substr(0,2));
    //   let hours=time.getHours();
      if(hours>=17 && hours<=21 || hours>=8 && hours<=10) {
          alert("Your journey lies on peak hours");
          totalAmount=Math.ceil(totalAmount+(totalAmount*1.5/100));
      }     

    document.getElementById("amount").innerHTML=totalAmount;
    
    let dateOfBirth=document.querySelector("#date").value;
    let dob=new Date(dateOfBirth);
    let year=dob.getUTCFullYear();
    //alert(year);
    let a=new Date();
    var currentYear = a.getUTCFullYear();
    //alert(currentYear);
    let age=currentYear-year;
    
    let seniorAmount=0;
     if(age>=60) {
         alert("Senior");
        seniorAmount=totalAmount/2;
        document.getElementById("senior");
        document.getElementById("amount").innerHTML=seniorAmount;
    }
   
   
}
  function logout() {
    window.location.href="index.html"
}
