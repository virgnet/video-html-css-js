function mostrarMensagem(mensagem){
    alert(mensagem);
}

function tamanhoFont(indicador){
    var elemento = document.getElementsByClassName("texto");
    var tamanhoAtual = elemento[0].style.fontSize;

    var tamanhoFinal = 16;
    if(tamanhoAtual != ''){
        tamanhoFinal = tamanhoAtual.replace('px','');
    }

	if (indicador == 'mais') {
        //elemento[0].style.fontSize = (parseInt(tamanhoFinal) + 1) + 'px';
        elemento[0].setAttribute( 'style', 'font-size: ' +(parseInt(tamanhoFinal) + 1)+ 'px !important' );
	} else if(indicador == 'menos'){
        //elemento[0].style.fontSize = (parseInt(tamanhoFinal) - 1) + 'px';
        elemento[0].setAttribute( 'style', 'font-size: ' +(parseInt(tamanhoFinal) - 1)+ 'px !important' );
	}
}

function verLoading(){
    var elemento = document.getElementsByClassName("loading");
    elemento[0].style.display = 'block';
}