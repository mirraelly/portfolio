let valorTotal = [0,0];
let valorProduto = [50.00,30.00];
let qtd = [0,0];

function adicionarItem (item){

    let quantidade = document.querySelector('#quantidade' + item);
    let total = document.querySelector('#total' + item);
    qtd[item] += 1;
    valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
    quantidade.innerHTML = qtd[item];
    total.innerHTML = valorTotal[item].toFixed(2);
    valorCompra();

}

function removerItem (item) {

    if(qtd[item] > 0) {
        qtd[item] -= 1;
        let quantidade = document.getElementById('quantidade' + item);
        let total = document.getElementById('total' + item);
        quantidade.innerHTML = qtd[item];
        valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
        total.innerHTML = valorTotal[item].toFixed(2);
        valorCompra();
    }
}

function valorCompra () {
    
    let valorTotalCompra = document.getElementById('valorTotalCompra');
    let valor = 0;

    for (let i = 0; i < valorTotal.length; i++) {
        valor += valorTotal[i];
    }

    valorTotalCompra.innerHTML = valor.toFixed(2);
}
