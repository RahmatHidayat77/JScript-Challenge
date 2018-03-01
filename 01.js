let kata = "ibu ratna antar ubi";
let dibalik = "";
for (let i = kata.length-1 ; i >= 0 ; i-- ){
dibalik = dibalik + kata.charAt(i); 
 console.log("Kata dibalik : -> "+dibalik );
 }
console.log("");
let array = ["ibu", "ratna", "antar", "ubi"];
console.log(array.join(" "));
