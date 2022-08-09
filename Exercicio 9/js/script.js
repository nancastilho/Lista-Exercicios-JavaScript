var linhas = 9;
var string = " ";
var texto = [];
for (var y = 1; y <= linhas; y++) {
  string = "";
  for (var x = 1; x <= 4; x++) {
    string += " " + y;
  }
  texto.push(string + "\n");
}

alert(texto)