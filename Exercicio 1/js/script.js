
var v1Str = prompt("Valor 1", "");
var v2Str = prompt("Valor 2?", "");
var v1 = parseFloat(v1Str, 10);
var v2 = parseFloat(v2Str, 10);

soma = v1 + v2;
alert("A) Sua soma é:" + soma);

diferenca = v1 - v2;
alert("B) A diferença é:" + diferenca);

if (v2 > v1) {
     alert("B) O Maior é:" + v2);
}
else {
     alert("B) O Maior é:" + v1);
}

divisao = v1 / v2;
alert("C) a divisao é: " + divisao);

metade = soma / 2;
alert("D) a metade é: " + metade);

dobro = soma * 2;
alert("C) o dobro é: " + dobro);


