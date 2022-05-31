/**
 *
 * Creare in JavaScript una griglia delle dimensioni impostate dall'utente attraverso una select.
 * Ogni casella conterrà un numero univoco da 1 alla dimensione impostata.
 * Ogni volta che clicco su una casella, questa si colora di verde se è di numero pari e di rosso se è di numero dispari.
 *
 */
 const setbutton = document.getElementById("setdimension");
 const userinput = document.getElementById("dimension");
 const container = document.querySelector(".container");
 
 setbutton.addEventListener("click", () => {
   let gridDimension = userinput.value;
   let cellNumber;
   let cellPerSide;
   container.innerHTML = "";
   switch (gridDimension) {
     case "1":
       cellNumber = 100;
       cellPerSide = 10;
       break;
     case "2":
       cellNumber = 81;
       cellPerSide = 9;
       break;
     case "3":
       cellNumber = 49;
       cellPerSide = 7;
       break;
   }
   const grid = document.createElement("div");
   grid.classList.add("grid");
   container.append(grid);
   let numList = [];
   for (let i = 1; i <= cellNumber; i++) {
     const num = getUniqueRandomInt(1, cellNumber, numList);
     numList.push(num);
     const square = createGridSquare(cellPerSide, num);
     grid.append(square);
     square.addEventListener("click", () => {});
   }
 });
 
 function createGridSquare(cell, num) {
   const type = num % 2 === 0 ? "even" : "odd";
   const node = document.createElement("div");
   node.style.width = `calc(100%/${cell})`;
   node.style.height = `calc(100%/${cell})`;
   node.classList.add("square", `square-${type}`);
   const span = document.createElement("span");
   span.append(num);
   node.append(span);
   return node;
 }
 
 function getUniqueRandomInt(min, max, list) {
   let num = 0;
   do {
     num = Math.floor(Math.random() * (max - min + 1) + min);
   } while (list.includes(num));
   return num;
 }