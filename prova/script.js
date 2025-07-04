let mostraresultado = document.querySelector('#resultado');
let idade = 0;
let time;
let media = 0;
let jogadores;

function inscrever() {

    time = window.prompt('Digite o nome do seu time: ').toUpperCase();
    mostraresultado.innerHTML +=`<p><b>${time}</b></p>`

    jogadores = window.prompt('Digite o nome do jogador: ');
    idade = Number(window.prompt('Digite a idade do jogador: '));
    mostraresultado.innerHTML +=`<p>${jogadores}, ${idade}</p>`

    jogadores = window.prompt('Digite o nome do jogador: ');
    idade = Number(window.prompt('Digite a idade do jogador: '));
    mostraresultado.innerHTML +=`<p>${jogadores}, ${idade}</p>`

    jogadores = window.prompt('Digite o nome do jogador: ');
    idade = Number(window.prompt('Digite a idade do jogador: '));
    mostraresultado.innerHTML +=`<p>${jogadores}, ${idade}</p>`

    if(idade >=15) {
        alert("A media para participar do interclasse é 15,seu time tem mais de 15");
        alert("cadastre um novo time valido");
    }

    if(time >=5) {
        alert("numero de times alcançado");
    }
}