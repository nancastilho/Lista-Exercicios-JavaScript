var linhas = 10;
var texto = []
for (var i = 1; i < linhas; i++) {
	var string = "";
	for (var j = 1; j <= i; j++) {		
		string += i + "";
	}
	texto.push(string + "\n");

}

alert(texto)