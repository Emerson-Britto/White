// Parametros de cor, brilho e Posição do Personagem Principal.
let corPersoMain = "#FFFFFF";
let brilhoPersoMain = "-5px -5px 35px #FFFFFF";
let positionPersoMain = 122;

// Altera a cor de todos os reflexos.
let corReflexoLateral = "#7E7E7E";
let corReflexoLateralCamada2 = "#373737";
let corReflexoSemiVertical = "#4B4B4B";

let brilhoReflexoLateral = "5px 5px 30px #7E7E7E";
let brilhoReflexoLateralCamada2 = "5px 5px 30px #7E7E7E";
let brilhoReflexoSemiVertical = "5px 5px 30px #7E7E7E";

// Parametros de campo em Tela.
let bordaInicialA = 1;
let bordaInicialD = 39;
let bordaFinalD = 1794;
// Cálculo automático.
let bordaFinalA = bordaFinalD - (bordaInicialD-1);

/*---------------------------------------------------------------------*/

//Gerador de caminhos.
var painel = document.querySelector(".painel");
var bottonList = [];
for (var i = bordaInicialA; i <= bordaFinalD; i++){
	var botton = document.createElement('color');
	botton.id = i;
	botton.style.color="#242424";
	botton.textContent = i;
	botton.style.width= "35px";
	botton.style.height= "35px";
	botton.style.backgroundColor= "#060606";
/*	botton.style.opacity= "0%";*/
	botton.style.transition= "400ms";

	bottonList.push(botton);
	painel.appendChild(botton);
}

/*------------------------------------------------------------------------*/

var numBordaA = [];
var numBordaD = [];

for (var i = bordaInicialA; i <= bordaFinalA; i = i + bordaInicialD){
	numBordaA.push(i);
}

for (var i = bordaInicialD; i <= bordaFinalD; i = i + bordaInicialD){
	numBordaD.push(i);
}


let mapa = [43, 44, 45, 46, 7, 6, 84, 85, 86, 47, 48, 87, 126, 125, 124, 123, 164, 165, 166, 127, 88, 89, 90, 91, 92, 92, 94, 94, 93, 93, 93, 94, 94, 94, 133, 133, 132, 132, 131, 131, 131, 131, 130, 129, 129, 129, 128, 167, 168, 169, 170, 171, 171, 210, 209, 208, 207, 206, 205, 204, 243, 244, 245, 246, 247, 248, 287, 286, 285, 284, 283, 283, 326, 327, 328, 328, 329, 329, 329, 290, 289, 288, 287, 325, 366, 365, 365, 368, 367, 368, 369, 369, 370, 370, 370, 370, 371, 371, 332, 331];

for (var i = 0; i < mapa.length; i++){
	var temp = mapa[i];
	bottonList[temp - 1].style.opacity= "100%";

}

var lastPosition = 36;

configurando_Luz_e_Reflexo_Inicial();

/*-------------------------------------------------------------------------*/

let numColetados = [];
var painelMap = document.querySelector(".painel-mapa")

document.addEventListener('keydown', function(){
	if (event.key == 'w' || event.key == 'W'){ verificarPosicaoW(); painelMap.textContent = "";}
	if (event.key == 'a' || event.key == 'A'){ verificarPosicaoA(); painelMap.textContent = "";}
	if (event.key == 's' || event.key == 'S'){ verificarPosicaoS(); painelMap.textContent = "";}
	if (event.key == 'd' || event.key == 'D'){ verificarPosicaoD(); painelMap.textContent = "";}
	if (event.key == 'P'){ numColetados.push(positionPersoMain); bottonList[positionPersoMain -1].style.opacity= "0%"; }
	if (event.key == 'O'){ painelMap.textContent = numColetados; alert("O Mapeamento está disponivel no Topo"); }
});

function atualizarPixel() {
	bottonList[positionPersoMain - 1].style.backgroundColor= corPersoMain;
    bottonList[positionPersoMain - 1].style.boxShadow= brilhoPersoMain;
    bottonList[lastPosition - 1].style.backgroundColor= "#060606";
    bottonList[lastPosition - 1].style.boxShadow= "";
}













/*let list = [button1, button2, button3, button4, button5, button6, button7, button8, button9, button10, button11, button12, button13, button14, button15, button16];

let total = 7;
let numrest = 0;
let numsorteado = [];

while(total != numrest){
	let num = Math.floor(Math.random() * 16);
	numsorteado.push(num);
    numrest = verificar(num, list, numrest);
}

console.log(numsorteado);
var minhaSelecao = [];*/
/*------------------------------------------------------*/
/*botton.addEventListener("click", function() {
	var numselecionado = event.target.textContent;
	var numformatado = parseInt(numselecionado);
	minhaSelecao.push(numformatado);
	event.target.style.backgroundColor= "red";
	console.log(minhaSelecao);
});*/
/*---------------------------------------------------------*/
/*bottons.addEventListener("click", function() {
	for (var i = 0; i != numsorteado.length; i++){
		var n = numsorteado[i];
		var alvo = event.target.textContent;

		if (numsorteado[i] == alvo){
			event.target.style.backgroundColor= "red";
			event.target.style.boxShadow= "-5px -5px 45px red";
			return;
		}else{
			console.log("errouuu");
			event.target.style.backgroundColor= "white";
			event.target.style.boxShadow= "-5px -5px 45px white";
		}
	}
});

document.addEventListener('keydown', function(){
	if (event.key === 'q'){
		button1.style.backgroundColor= "red";
		button1.style.boxShadow= "-5px -5px 45px red";
	}

	if (event.key === 'w'){
		button2.style.backgroundColor= "red";
		button2.style.boxShadow= "-5px -5px 45px red";
	}

	if (event.ctrlKey & event.key === 'q'){
		button1.style.backgroundColor= "white";
		button1.style.boxShadow= "-5px -5px 45px white"
	}

	if (event.ctrlKey & event.key === 'w'){
		button2.style.backgroundColor= "white";
		button2.style.boxShadow= "-5px -5px 45px white"
	}
});

document.addEventListener('keyup', function(){
	if (event.key === 'q'){
		button1.style.backgroundColor= "";
		button1.style.boxShadow= "";
	}

	if (event.key === 'w'){
		button2.style.backgroundColor= "";
		button2.style.boxShadow= "";
	}

});

button1.addEventListener('scroll', function() {
	button1.style.backgroundColor= "white";
	button1.style.boxShadow= "-5px -5px 45px white";
});
*/