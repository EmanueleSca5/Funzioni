let n = Number(prompt("Fino a che numero vuoi stampare?"))
num = 0
function numeri(n){
    for(let i = 1; i <= n; i++){
      if(i % 3 == 0 && i % 15 != 0){
        console.log("Fizz");
        
      }else if(i % 5 == 0 && i % 15 != 0){
        console.log("Buzz");
        
      }else if(i % 15 == 0){
        console.log("FizzBuzz");
        
      }else{
        console.log(i);
        
      }
        
  
   
    }
   

}

numeri(n)