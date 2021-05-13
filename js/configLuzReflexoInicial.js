function configurando_Luz_e_Reflexo_Inicial(){
	// 1° Area de reflexo
	var setPosicaoBlock = positionPersoMain - 1;
	var setPosicaoBlockW = positionPersoMain - (bordaInicialD +1);
	var setPosicaoBlockS = positionPersoMain + (bordaInicialD -1);
	var setPosicaoBlockA = positionPersoMain - 2;
	// 1° Area de reflexo - semi-verticais
	var setPosicaoBlockW1 = positionPersoMain - (bordaInicialD +2);
	var setPosicaoBlockS1 = positionPersoMain + (bordaInicialD);
	var setPosicaoBlockA1 = positionPersoMain + 37;
	var setPosicaoBlockD1 = positionPersoMain - 39;
	// 2° Area de reflexo
	var setPosicaoBlockW2 = positionPersoMain - (bordaInicialD +40);
	var setPosicaoBlockS2 = positionPersoMain + (bordaInicialD +38);
	var setPosicaoBlockA2 = positionPersoMain - 3;
	var setPosicaoBlockD2 = positionPersoMain +1;

	//Configurações iniciais - Personagem Principal.
	InicialBackgroundColor(setPosicaoBlock, corPersoMain);
	InicialBoxShadow(setPosicaoBlock, brilhoPersoMain);

	// 1° Area de reflexo
	InicialBackgroundColor(setPosicaoBlockW, corReflexoLateral);
	InicialBoxShadow(setPosicaoBlockW, brilhoReflexoLateral);

	InicialBackgroundColor(setPosicaoBlockS, corReflexoLateral);
	InicialBoxShadow(setPosicaoBlockS, brilhoReflexoLateral);

	InicialBackgroundColor(setPosicaoBlockA, corReflexoLateral);
	InicialBoxShadow(setPosicaoBlockA, brilhoReflexoLateral);

	InicialBackgroundColor(); InicialBoxShadow();

	// 1° Area de reflexo - semi-verticais
	InicialBackgroundColor(setPosicaoBlockW1, corReflexoSemiVertical);
	InicialBoxShadow(setPosicaoBlockW1, brilhoReflexoSemiVertical);

	InicialBackgroundColor(setPosicaoBlockS1, corReflexoSemiVertical);
	InicialBoxShadow(setPosicaoBlockS1, brilhoReflexoSemiVertical);

	InicialBackgroundColor(setPosicaoBlockA1, corReflexoSemiVertical);
	InicialBoxShadow(setPosicaoBlockA1, brilhoReflexoSemiVertical);

	InicialBackgroundColor(setPosicaoBlockD1, corReflexoSemiVertical);
	InicialBoxShadow(setPosicaoBlockD1, brilhoReflexoSemiVertical);

	// 2° Area de reflexo
	InicialBackgroundColor(setPosicaoBlockW2, corReflexoLateralCamada2);
	InicialBoxShadow(setPosicaoBlockW2, brilhoReflexoLateralCamada2);

	InicialBackgroundColor(setPosicaoBlockS2, corReflexoLateralCamada2);
	InicialBoxShadow(setPosicaoBlockS2, brilhoReflexoLateralCamada2);

	InicialBackgroundColor(setPosicaoBlockA2, corReflexoLateralCamada2);
	InicialBoxShadow(setPosicaoBlockA2, brilhoReflexoLateralCamada2);

	InicialBackgroundColor(setPosicaoBlockD2, corReflexoLateralCamada2);
	InicialBoxShadow(setPosicaoBlockD2, brilhoReflexoLateralCamada2);

	function InicialBackgroundColor(posicao=positionPersoMain, elemento=corReflexoLateral){ bottonList[posicao].style.backgroundColor= elemento; }
	function InicialBoxShadow(posicao=positionPersoMain, elemento=brilhoReflexoLateral){ bottonList[posicao].style.boxShadow= elemento; }
}

/*const tes = document.getElementById('323');
tes.style.backgroundColor= "white";
tes.style.position= "absolute";
var pos = "1px";*/


/*const div = document.createElement('div');
div.className = 'foo';*/