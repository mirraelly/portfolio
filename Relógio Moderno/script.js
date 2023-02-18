function relogioDigital() {
    var r = new Date().toString();
    document.getElementById('meuRelogioDigital').innerHTML =  r.slice(16, 18) + ":" +
        r.slice(19, 21) + ":" + r.slice(22, 24);
}

relogioDigital();   

var horarioOnline = setInterval(relogioDigital, 1000);  

