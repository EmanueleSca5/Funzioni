let str = "itopinonavevanonipoti"





function verifica(x){
    if(x == x.split("").reverse().join("")){
       return console.log(x == x.split("").reverse().join(""));
        
    }else{
       return console.log(x =! x.split("").reverse().join(""));
        
    }
}

verifica(str)

