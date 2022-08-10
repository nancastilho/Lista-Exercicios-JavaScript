
var n1Str = prompt("Preço Gasolina", "");
var n1 = parseFloat(n1Str, 10);
var n2Str = prompt("Preço Álcool", "");
var n2 = parseFloat(n2Str, 10);

vantag = n2 / n1;

if (vantag > 0.7) {
    alert("Abasteça Gasolina")

} 

else {
    alert("Abasteça Álcool")
}


