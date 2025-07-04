let  mostraresultado = document.querySelector('#resultado'); 
     let idade =0;
     let time;
     let media =0;
     let jogadores;

function cadastro() {
    
    time = window.prompt(' Digite o nome do seu grande time').toUpperCase();
    mostraresultado.innerHTML +=`<p><b>${time}</p></b>`
    
    jogadores = window.prompt('Digite seu nome');
    idade = Number(window.prompt('Digite sua idade '));
    mostraresultado.innerHTML +=`<p>${jogadores}, ${idade}</p>`

    jogadores = window.prompt('Digite seu nome');
    idade = Number(window.prompt('Digite sua idade '));
    mostraresultado.innerHTML +=`<p>${jogadores}, ${idade}</p>`

    jogadores = window.prompt('Digite seu nome');
    idade = Number(window.prompt('Digite sua idade '));
    mostraresultado.innerHTML +=`<p>${jogadores}, ${idade}</p>`

     if(media >=15){
          alert("A media é maior que 15 seu time nao pode participar!")
     }

}
