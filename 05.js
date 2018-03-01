for (let i=0; i<=100; i++) {
    if (i == 0) {
      console.log(i+" is even");
    } else if(i == 1 ) {
      console.log(i+" is odd");
    } else if (i == 2 ) {
      console.log(i+" is prime number");
    } else if (i == 3) {
      console.log(i+" is prime number");
    } else if (i % 5 === 0) {
      console.log(i+" number multiply by 5");
    } else if (i % 2 == 0) {
      console.log(i+" is even");
    } else if (i % 2 !==0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0 && i % 9 !==0) {
      console.log(i+" prime number");
    } else if (i % 2 !== 0) {
      console.log(i+" is odd");
    }
}
 
