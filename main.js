/**
 *
 * Creare in JavaScript una griglia delle dimensioni impostate dall'utente attraverso una select.
 * Ogni casella conterrà un numero univoco da 1 alla dimensione impostata.
 * Ogni volta che clicco su una casella, questa si colora di verde se è di numero pari e di rosso se è di numero dispari.
 *
 */
 //Creazione Variabile della Select per poterci lavorare in JS
 const userInput = document.getElementById("dimension");

 //Creazione Variabile del bottone con classe .set-dimension x il gestore d'evento
 const Btn = document.querySelector(".set-dimension");
 
 //Creazione della variabile per il nodo container ovvero la struttura dove gli verrano posti gli square che formeranno la griglia
 const container = document.querySelector(".container");
 
 
//richiamo del bottone e aggiunta gestore d'evento click (si ricorda che il this non funziona con le arrow functions)
 Btn.addEventListener("click", () => {

    //Nodo che prende il valore immeso dentro la select dimension
     let gridDimension=userInput.value;

    //Creazioni variabili numero di celle e numero di celle per lato. (non definite)
     let cellNumber;
     let cellPerside;

     //Svuotamento default del container
     container.innerHTML="";

     //Applicazione dello switch con condizione scelta dall'opzione nella select
     switch(gridDimension){

        //Condizione nel caso 1 ecc.
         case "1":
             cellNumber = 100;
             cellPerside = 10;
             break;
 
         case "2": 
             cellNumber=81 ;
             cellPerside=9;
             break;

         case "3":
             cellNumber=49;
             cellPerside=7;
             break;
     }

     //Si creano gli square.div che formeranno la struttura aggiungendone la classe fatta in css e appendendola al container
     const grid = document.createElement("div");
     grid.classList.add("grid");
     container.append(grid);

     //Creazione Array vuoto dei numeri della lista che saranno presenti all'interno di ogni square
     const numList = [];
 
     //Ciclo fro dove l'indice comincia da 1 fino a che non sia minore uguale all numero di celle
     for(let i=1; i <= cellNumber; i++)
     {
        
        //richiamo Funzione con parametri dove verrano inseriti gli argomenti 
         const num= uniqueRandomInt(1, cellNumber, numList);    

         //Si pushano i numeri creati dal ciclo nell'array    
         numList.push(num);

         //richiamo funzione dei numeri di square per lato con argomento (cellPerside) dentro i case.
         const square = createGridSquare(cellPerside);

         //Crazione variabile div all'interno degli square che avranno un testo dentro di loro
         const tXt = document.createElement("div");

         //Si Appendo i seguenti elementi lo square alla griglia(Div dentro un Div) - di conseguenza un'altro div all'interno del divsquare - e dentro a quel div il numero creato dal ciclo
         grid.append(square);
         square.append(tXt);
         tXt.append(num);

         //si setta d-none perche dovranno apparire solo al click
         tXt.style.display="none";
        
         //Assegnazione Gestore d'evento e gli si dara la funzione che accettera come argomento il txt e lo square
         square.addEventListener("click", () => {divClick(tXt, square)});     
     }
 });
 

 //La funzione dice che al click i due elementi verrano modificati. il primo il valore block mentre il secondo sotto condizione si coloro di verde se è un numero pari ovvero se e divisibile per 2 con il resto di 0. else dispari saranno di colore rosso
 function divClick(divTxt, divColor) {
     divTxt.style.display= "block";
     (divTxt.innerText%2 == 0) ? divColor.classList.add("green") :  divColor.classList.add("red");
 }
 

//Questa funzione Crea gli square che strutturano la griglia e gli si danno le dimensioni 
//Attenzione alle varibili create dentro la funzione
 function createGridSquare (cell){
     const node= document.createElement("div");
     node.style.width= `calc(100% / ${cell})`;
     node.style.height= `calc(100% / ${cell})`;
     node.classList.add("square");
     return node;
 };
 
 //Chiedere domani per assicurarsi di aver capito bene la funzione
 function uniqueRandomInt(min, max, list){
     let num=0;
 
     do {
         num = Math.floor(Math.random() * (max - min+1) + min);
     }
     while(list.includes(num))
     
     return num;
 }
 