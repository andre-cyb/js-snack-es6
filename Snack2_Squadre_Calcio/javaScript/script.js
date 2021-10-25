
"use strict";

let teamList = [
    { nome: "porto", puntiFatti: 0, falliSubiti: 0 },
    { nome: "chelsea", puntiFatti: 0, falliSubiti: 0 },
    { nome: "pisa", puntiFatti: 0, falliSubiti: 0 },
    { nome: "livorno", puntiFatti: 0, falliSubiti: 0 }
];

let TeamAndFaul = [];


for (let i = 0; i < teamList.length; i++) {
    let { nome } = teamList[i];

    let singleTeam = teamList[i];
    let punti = randomNumber();
    let falli = randomNumber();

    singleTeam.puntiFatti = punti;
    singleTeam.falliSubiti = falli;

    let falliSubiti = singleTeam.falliSubiti;
    TeamAndFaul.push({ nome, falliSubiti });
}

console.log(teamList);
console.log(TeamAndFaul);



// funzione numeri random da 1 a 10
function randomNumber() {
    return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
}
