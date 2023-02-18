//utilizando metodos de datas - Operadores em JavaScript

function horarioOficial() {
    var r = new Date().toString();
    document.getElementById('resultado').innerHTML = "Data: " + r.slice(8, 10) + " de " +
        r.slice(4, 7) + " de " + r.slice(11, 15) + "<br/>" + "Hora: " + r.slice(16, 18) + "h" +
        r.slice(19, 21) + "min" + r.slice(22, 24) + "s";
}

horarioOficial();   

var horarioOnline = setInterval(horarioOficial, 1000);  
