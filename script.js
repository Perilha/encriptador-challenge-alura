var inputTexto = document.querySelector ("#inputTexto");
var mensagem = document.querySelector ("#mensagem");
var textoRetangulo = document.querySelector (".textoRetangulo");
var botaoCopiar = document.querySelector ("#botaoCopiar");
var retanguloBranco = document.querySelector(".retanguloBranco");
var menino = document.querySelector(".menino");

function botaoEncriptar (){
	var textoCriptografado = criptografar (inputTexto.value);
	mensagem.value = textoCriptografado;	
	menino.style.display = "none";
	textoRetangulo.style.display = "none";
	botaoCopiar.style.display = "inline-block";
}

function criptografar (stringEncriptada){
	let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
	stringEncriptada = stringEncriptada.toLowerCase()

	for (i=0; i < matrizCodigo.length; i++) {
		if (stringEncriptada.includes(matrizCodigo[i][0])){
			stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo [i][1]);
		}
	}

	return stringEncriptada
} 

function botaoDescriptografar (){
	var textoDescriptografado = descriptografar (inputTexto.value);
	mensagem.value = textoDescriptografado;
	menino.style.display = "none";
	textoRetangulo.style.display = "none";
	botaoCopiar.style.display = "inline-block";
}

function descriptografar (stringEncriptada){
	let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
	stringEncriptada = stringEncriptada.toLowerCase();

	for (i=0; i < matrizCodigo.length; i++) {
		if (stringEncriptada.includes(matrizCodigo[i][1])){
			stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo [i][0]);
		}
	}

	return stringEncriptada
}

function copiarTexto () {
	var	 copiarTexto = document.querySelector ("#mensagem");
	copiarTexto.select();
	document.execCommand("cut");
	inputTexto.focus();
	inputTexto.value = "";
	textoRetangulo.style.display = "block";
	menino.style.display = "inline-block";
	botaoCopiar.style.display = "none";
}

