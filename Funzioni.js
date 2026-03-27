let tiri = Number(prompt("Quanti tiri effettuerete?"))
let punteggio1 = 0

function giocatore1(giocatore){
    for(let i = 1; i <= tiri; i++){
       let totale = Math.floor(Math.random() * (6 - 1 + 1) + 1);
       console.log(totale);
      punteggio1 = punteggio1 + totale
        
        
        
        
       }
      
     console.log(giocatore + " hai effettuato " + punteggio1 + " punti");
     return punteggio1
      }

      let punteggio2 = 0
      function giocatore2(giocatore){
    for(let i = 1; i <= tiri; i++){
       let totale = Math.floor(Math.random() * (6 - 1 + 1) + 1);
       console.log(totale);
     punteggio2 = punteggio2 + totale
        
        
        
        
       }

       console.log(giocatore + " hai effettuato " + punteggio2 + " punti");
       return punteggio2
       
       
      
     
      }
       
      
       giocatore1("luca")
       giocatore2("ema")

       if(punteggio1 > punteggio2){
        console.log("LUCA HAI VINTO");
        
       }else{
        console.log("EMA HAI VINTO");
        
       }
       
