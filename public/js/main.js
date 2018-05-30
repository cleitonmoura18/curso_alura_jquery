var frase =$(".frase").text();
var tamanho = frase.trim().split(" ").length;
$("#tamannhoDaFrase").text(tamanho);
var campo= $(".campo-digitacao");
campo.on("input",function(){
var conteudo =campo.val();
var quantidadePalavras =conteudo.split(/\S+/).length-1;
$("#contador-palavras").text(quantidadePalavras);
var qtdCaracteres = conteudo.length;
$("#contador-caracteres").text(qtdCaracteres);
});
var tempoRestante = $("#tempo_digitacao").text();
campo.one("focus",function(){
	var cronometroID= setInterval(function(){
		tempoRestante--;
		$("#tempo_digitacao").text(tempoRestante);
		if(tempoRestante<1){
			campo.attr("disabled",true);
			clearInterval(cronometroID);
		}
	},1000);
})
