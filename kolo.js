let result = function (num1,num2,operan) {
    if (typeof num1 !== "number"|| num2 !== "number"){
        return "Invalid Type Number"
    }
    
    let hasil;
    if (operan == "+") {
        hasil = num1 + num2
    } else if (operan == "-") {
        hasil = num1 - num2;
    } else if (operan == "/") {
      hasil = num1 / num2;
    }
     else   {
      hasil = num1 * num2;
    }

    return hasil


  }
  let num1 = 9;
  let num2 = "l";
  let operan = "*"
  let kaka = result (num1,num2,operan);
  console.log(kaka);
  
    
 
  

  
 