//Copyright Mirraely - Todos os direitos reservados

document.getElementById("calcular").addEventListener("click", function () {
});

var numA = document.querySelector("#input-numA");
var numB = document.querySelector("#input-numB");

numA.addEventListener("input", function () {
   calcular(Number(numA.value), Number(numB.value));

});
numB.addEventListener("input", function () {
   calcular(Number(numA.value), Number(numB.value));
});

function calcular(numA, numB) {
   document.getElementById("resultado-soma").innerHTML = arredondar(soma(numA, numB));
   document.getElementById("resultado-subtracaoAMenosB").innerHTML = arredondar(subtracaoAMenosB(numA, numB));
   document.getElementById("resultado-subtracaoBMenosA").innerHTML = arredondar(subtracaoBMenosA(numA, numB));
   document.getElementById("resultado-multiplicacao").innerHTML = arredondar(multiplicacao(numA, numB));
   document.getElementById("resultado-divisaoAPorB").innerHTML = arredondar(divisaoAPorB(numA, numB)).toFixed(2);
   document.getElementById("resultado-divisaoBPorA").innerHTML = arredondar(divisaoBPorA(numA, numB)).toFixed(2);
   document.getElementById("resultado-potenciaANaBaseB").innerHTML = arredondar(potenciaANaBaseB(numA, numB));
   document.getElementById("resultado-potenciaBNaBaseA").innerHTML = arredondar(potenciaBNaBaseA(numA, numB));
   document.getElementById("resultado-raizQuadradaDeA").innerHTML = arredondar(raizQuadradaDeA(numA));
   document.getElementById("resultado-raizQuadradaDeB").innerHTML = arredondar(raizQuadradaDeB(numB));
   document.getElementById("resultado-fatorialDeA").innerHTML = arredondar(fatorialDeA(numA));
   document.getElementById("resultado-fatorialDeB").innerHTML = arredondar(fatorialDeB(numB));
   document.getElementById("resultado-porcentagemADeB").innerHTML = arredondar(porcentagemADeB(numA, numB), 0) + "%";
   document.getElementById("resultado-porcentagemBDeA").innerHTML = arredondar(porcentagemBDeA(numA, numB), 0) + "%";
   document.getElementById("resultado-media").innerHTML = arredondar(media(numA, numB));

}

function arredondar(numero, numeroDeCasas) {
   if (numeroDeCasas === undefined) {
      numeroDeCasas = 2;
   }
   var fator = Math.pow(10,numeroDeCasas);
   return Math.round(numero * fator) / fator;
}

function soma(numA, numB) {
   return numA + numB;
}

function subtracaoAMenosB(numA, numB) {
   return numA - numB;
}

function subtracaoBMenosA(numA, numB) {
   return numB - numA;
}

function multiplicacao(numA, numB) {
   return numA * numB;
}

function divisaoAPorB(numA, numB) {
   return numA / numB;
}

function divisaoBPorA(numA, numB) {
   return numB / numA;
}

function potenciaANaBaseB(numA, numB) {
   return Math.pow(numA, numB);
}

function potenciaBNaBaseA(numA, numB) {
   return Math.pow(numB, numA);

}

function raizQuadradaDeA(numA) {
   return Math.sqrt(numA);
}

function raizQuadradaDeB(numB) {
   return Math.sqrt(numB);
}

function fatorialDeA(numA) {
   var resultado = 1;
   for (var i = 1; i <= numA; i++) {
      resultado = resultado * i;
   }
   return resultado;
}

function fatorialDeB(numB) {
   var resultado = 1;
   for (var i = 1; i <= numB; i++) {
      resultado = resultado * i;
   }
   return resultado;
}

function porcentagemADeB(numA, numB) {
   return (numB / numA) * 100;
}

function porcentagemBDeA(numA, numB) {
   return (numA / numB) * 100;
}

function media(numA, numB) {
   return (numA + numB) / 2
}