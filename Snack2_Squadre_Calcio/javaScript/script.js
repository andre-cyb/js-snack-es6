








let teamList = [
    { nome: "porto", puntiFatti: 0, falliSubiti: 0 },
    { nome: "chelsea", puntiFatti: 0, falliSubiti: 0 },
    { nome: "pisa", puntiFatti: 0, falliSubiti: 0 },
    { nome: "livorno", puntiFatti: 0, falliSubiti: 0 }
];

let TeamAndFaul = [];


for (let i = 0; i < teamList.length; i++) {
    let { nome } = teamList[i];

    singleTeam = teamList[i];
    let punti = randomNumber();
    let falli = randomNumber();

    singleTeam.puntiFatti = punti;
    singleTeam.falliSubiti = falli;

    falliSubiti = singleTeam.falliSubiti;
    TeamAndFaul.push({ nome, falliSubiti });
}

console.log(teamList);
console.log(TeamAndFaul);






/* nome, singleTeam.falliSubiti */





function randomNumber() {
    return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
}

/* console.log(randomNumber()); */