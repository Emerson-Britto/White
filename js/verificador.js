function verificarPosicaoW(){
	if (positionPersoMain >= bordaInicialD){
		lastPosition = positionPersoMain;
		positionPersoMain = positionPersoMain -bordaInicialD;
		atualizarPosicaoShadow();
		atualizarPixel();
		atualizarLastPosicaoShadow()
		lastReflexoW();
		reflexoW();
		return
	}
	console.log("Não pode passar pela parede");
}

function verificarPosicaoA(){
	for (var i = bordaInicialA - 1; i <= bordaFinalA; i++){
		if (positionPersoMain == numBordaA[i]) {
		console.log("Não pode passar por aqui");
		return
	    }
	}
    lastPosition = positionPersoMain;
	positionPersoMain = positionPersoMain -1;
	atualizarPosicaoShadow();
	atualizarPixel();
	atualizarLastPosicaoShadow()
	lastReflexoA();
	reflexA();
}

function verificarPosicaoS(){
	if (positionPersoMain < bordaFinalA) {
		lastPosition = positionPersoMain;
		positionPersoMain = positionPersoMain +bordaInicialD;
		atualizarPosicaoShadow();
		atualizarPixel();
		atualizarLastPosicaoShadow()
		lastReflexoS();
		reflexoS();
		return
	}
	console.log("Não pode passar por aqui");
}

function verificarPosicaoD(){
	for (var i = bordaInicialA - 1; i <= bordaFinalA; i++){
		if (positionPersoMain == numBordaD[i]){
    	console.log("Não pode passar pela parede");
		return
	    }
    }
    lastPosition = positionPersoMain;
	positionPersoMain = positionPersoMain +1;
	atualizarPosicaoShadow();
	atualizarPixel();
	atualizarLastPosicaoShadow()
	lastReflexoD();
	reflexoD();
}