function relogioDigital() {
    
    let date = new Date();
    let hora = date.getHours();
    let minutos = date.getMinutes();
    let segundos = date.getSeconds();
    let turno = "Manhã";

    // função nativa do JS: newDAte / alteração do turno

    if (hora >= 18) {
        turno = "Noite"
    } else if (hora >= 12) {
        turno = "Tarde";
    }
    if (hora == 0) {
        hora = 12;
    }
    if (hora >= 12){
        hora = hora - 12;
    }

    // ? verdadeiro : falso => para condição de incluir uma string para acrescentar zero quando o tempo tiver 1 dígito

    hora = (hora < 10) ? "0" + hora : hora;
    minutos = (minutos < 10) ? "0" + minutos : minutos;
    segundos = (segundos < 10) ? "0" + segundos : segundos;

    let relogio = "<div class='display-hora'>" + hora + ":" + minutos + ":" + segundos + "</div>" + "<div class='display-turno'>" + turno + "</div>";
    document.getElementById("meuRelogioDigital").innerHTML = relogio;

    setTimeout(relogioDigital, 1000);
}

relogioDigital();

