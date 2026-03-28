let cifre = String(prompt("Scegli un numero positivo compreso tra 0 e 9999"))
let lunghezza = cifre.length
function lettere(x){
    
    if(x > 0 && x <= 9999){
        console.log("Il numero " + x + " è composto da " + lunghezza + " cifre");
        
    }else if(x < 0){
        console.log("Numero troppo piccolo");
        
    }else if(x > 9999){
        console.log("Numero troppo grande");
        
    }else{
        console.log("Non hai scritto un numero");
        
    }
}

lettere(cifre)