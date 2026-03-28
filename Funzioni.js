let tiri = Number(prompt("Quanti tiri effettuerete?"))
let giocatore1 = 0
let giocatore2 = 0


function play(x, y){
    for(let i = 0; i < tiri; i++){
 giocatore1 = giocatore1 + Math.floor(Math.random()*(6 - 1 + 1) + 1)
 giocatore2 = giocatore2 + Math.floor(Math.random()*(6 - 1 + 1) + 1)

    }

    if(giocatore1 > giocatore2){
        console.log(x + " hai vinto con " + giocatore1 + " punti");
        console.log(y + " hai perso con " + giocatore2 + " punti");
        
    }else if(giocatore1 < giocatore2){
        console.log(y + " hai vinto con " + giocatore2 + " punti");
        console.log(x + " hai perso con " + giocatore1 + " punti");
        
    }else{
        console.log("PAREGGIOOOOOOO");
        
    }
        
}
  
       
play("emanuele", "luca")
