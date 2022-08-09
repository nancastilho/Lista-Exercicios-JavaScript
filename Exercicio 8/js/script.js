var frutas, text, fLen, i;

frutas = ["1", "2", "3", "4", "5", "6", "7", "8","9", "10",];
fLen = frutas.length;
text = "";
for (i = 0; i < fLen; i++) {
    text += "" + frutas[i] + " ";
}

alert(text);
