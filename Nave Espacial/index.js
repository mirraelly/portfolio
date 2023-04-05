var nave = document.getElementById("nave");

var map = {}; // You could also use an array
onkeydown = onkeyup = function (e) {
    e = e || event; // to deal with IE
    map[e.key] = e.type == 'keydown';
    /* insert conditional here */
}

setInterval(() => {
    var velocidade = 4;
    Object.keys(map).forEach(key => {
        if (!map[key])
            return;

        switch (key) {
            case "w":
                moverVertical(-velocidade);
                break;
            case "s":
                moverVertical(velocidade);
                break;
            case "a":
                moverHorizontal(-velocidade);
                break;
            case "d":
                moverHorizontal(velocidade);
                break;
        }
    });
}, 10);

function moverVertical(velocidade) {
    var top = parseInt(nave.style.top);
    top = top + velocidade;
    nave.style.top = top + "px";
}

function moverHorizontal(velocidade) {
    var left = parseInt(nave.style.left);
    left = left + velocidade;
    nave.style.left = left + "px";
}
