var frase = $("#frase").text();
var palavras = frase.split(" ");
var numPalavras = palavras.length;
console.log(frase, palavras, numPalavras);
var words = $("#words"); 

words.text(numPalavras);

var areaTexto = $(".area-texto");

areaTexto.on("input", function(){
    
    var textoDigitado =  $(".area-texto").val();

    var qtdPalavras   = textoDigitado.split(/\S+/);
    
    var qtdCaracteres = textoDigitado.replace(/\S+/).length;
    
    $("#conta-palavras").text(qtdPalavras.length - 1);
    $("#conta-caracteres").text(qtdCaracteres);
});
