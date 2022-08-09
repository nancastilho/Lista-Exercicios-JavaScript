
var v1Str = prompt("Valor 1", "");
var v2Str = prompt("Valor 2?", "");
var v1 = parseFloat(v1Str, 10);
var v2 = parseFloat(v2Str, 10);

soma = v1 + v2;
alert("Sua soma é:" + soma);

diferenca = v1 - v2;
alert("A diferença é:" + diferenca);

if (v2 > v1) {
     alert("O Maior é:" + v2);
}
else {
     alert("O Maior é:" + v1);
}

divisao = v1 / v2;
alert("a divisao é: " + divisao);
