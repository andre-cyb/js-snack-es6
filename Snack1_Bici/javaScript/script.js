/**
 * Array con oggetti
 * -gli oggetti sono le bici che contengono due key: nome, peso.
 * -si devono comparare le bici per peso, la più leggera dovrà poi essere stampata
 * -UTILIZZARE DESTRUCTURING e TEMPLATE LITERAL
 */




"use strict";


let arrayBici =
    [
        {
            nome: "Bianchi",
            peso: 8,
        },
        {
            nome: "Colnago",
            peso: 4,
        },
        {
            nome: "Boolean",
            peso: 10,
        },
        {
            nome: "B-twin",
            peso: 6,
        }
    ];



let arrayPeso = [];
let container = document.querySelector(".container");
console.log(container);


for (let i = 0; i < arrayBici.length; i++) {

    let bici = arrayBici[i];
    console.log(bici);

    const { nome, peso } = bici;
    console.log(nome, peso);

    arrayPeso.push(peso);


    /* let biciLeggera = ""; */
    if (peso === Math.min(...arrayPeso)) {

        let codiceBici = `<div>
                             <ul>
                                 <li><h3>Bici</h3></li>
                                 <li>nome: ${nome}</li>
                                 <li>peso: ${peso}</li>
                             </ul>
                         </div> `;

        container.innerHTML += codiceBici;
    }
}

console.log(Math.min(...arrayPeso));;




/* for (let j = 0; j < arrayPeso.length; j++) {
    let biciPeso = arrayPeso[j];
    console.log(biciPeso);

}
 */



//console.log(arrayPeso);
//arrayPeso.sort();
//console.log(arrayPeso.sort());


/* arrayPeso.sort(function (a, b) {
    return a - b;
});
console.log(arrayPeso);
 */









