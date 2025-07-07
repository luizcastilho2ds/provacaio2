let mostraresultado = document.querySelector('#resultado');
let time;
let jogadores;
let timetotal = 0;

function inscrever() {

    time = window.prompt('Digite o nome do seu time: ').toUpperCase();
    mostraresultado.innerHTML +=`<p><b>${time}</b></p>`

    jogadores = window.prompt('Digite o nome do jogador: ');
    let idade1; idade1 = Number(window.prompt('Digite a idade do jogador: '));
    mostraresultado.innerHTML +=`<p>${jogadores}, ${idade1}</p>`

    jogadores = window.prompt('Digite o nome do jogador: ');
    let idade2; idade2 = Number(window.prompt('Digite a idade do jogador: '));
    mostraresultado.innerHTML +=`<p>${jogadores}, ${idade2}</p>`

    jogadores = window.prompt('Digite o nome do jogador: ');
    let idade3; idade3 = Number(window.prompt('Digite a idade do jogador: '));
    mostraresultado.innerHTML +=`<p>${jogadores}, ${idade3}</p>`

    let media = (idade1 + idade2 + idade3) / 3;
    mostraresultado.innerHTML +=`<p>A mdia de idade é ${media} </p>`

    if(media >=15) {
        alert("A media para participar do interclasse é 15,seu time tem mais de 15");
        alert("cadastre um novo time valido");
    }

    timetotal +=1;
    console.log(timetotal);
    if(timetotal > 4) {
        alert("numero de times alcançado");
    }
}