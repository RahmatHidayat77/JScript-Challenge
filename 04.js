function leapYear(years){
    var result; 
    if(years%4 === 0){
      result= true
    }
    else{
      result= false
    }
    return result
 }
 
 console.log(leapYear(2018));
 console.log(leapYear(2004));
