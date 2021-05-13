function atualizarPosicaoShadow(){
	positionCorReflexoW = positionPersoMain - 40;
	positionShadowReflexoW = positionPersoMain - 40;

	positionCorReflexoA = positionPersoMain - 2;
	positionShadowReflexoA = positionPersoMain - 2;

	positionCorReflexoS = positionPersoMain + 38;
    positionShadowReflexoS = positionPersoMain + 38;
}

// Atualização da iluminação de acordo com a direção de caminhada do personagem
function reflexoW(){
	if (positionPersoMain > bordaInicialA + bordaInicialD) {
        setPositionReflexoW(); setPositionReflexoS();
        setPositionReflexoA(); setPositionReflexoD();
	    return
	}
	if (positionPersoMain == bordaInicialA){
	    setPositionReflexoS(); setPositionReflexoD();
		return
	}
    setPositionReflexoS(); setPositionReflexoA(); setPositionReflexoD();
}

function reflexA(){
	for (var i = bordaInicialA - 1; i <= bordaFinalA; i++){
		if (positionPersoMain == numBordaA[i]) {
	    setPositionReflexoW(); setPositionReflexoS(); setPositionReflexoD();
		return
	    }
	}
    setPositionReflexoW(); setPositionReflexoS();
    setPositionReflexoA(); setPositionReflexoD();
}

function reflexoS(){
	if (positionPersoMain < bordaFinalA) {
        setPositionReflexoW(); setPositionReflexoS();
        setPositionReflexoA(); setPositionReflexoD();
		return
	}
    setPositionReflexoW(); setPositionReflexoA(); setPositionReflexoD();
}

function reflexoD(){
	for (var i = bordaInicialA - 1; i <= bordaFinalA; i++){
		if (positionPersoMain == numBordaD[i]){
	    setPositionReflexoW(); setPositionReflexoS(); setPositionReflexoA();
		return
	    }
    }
    setPositionReflexoW(); setPositionReflexoS();
    setPositionReflexoA(); setPositionReflexoD();
}

function setPositionReflexoW() {setPositionCorReflexo(positionCorReflexoW); setPositionShadowReflexo(positionShadowReflexoW)}
function setPositionReflexoS() {setPositionCorReflexo(positionCorReflexoS); setPositionShadowReflexo(positionShadowReflexoS)}
function setPositionReflexoA() {setPositionCorReflexo(positionCorReflexoA); setPositionShadowReflexo(positionShadowReflexoA)}
function setPositionReflexoD() {setPositionCorReflexo(); setPositionShadowReflexo()}

function setPositionCorReflexo(PCR=positionPersoMain, CRL=corReflexoLateral) { bottonList[PCR].style.backgroundColor= CRL; }
function setPositionShadowReflexo(PSR=positionPersoMain, BRL=brilhoReflexoLateral) { bottonList[PSR].style.boxShadow= BRL; }

/*----------------------------------------------------------*/

function atualizarLastPosicaoShadow(){
	positionLastCorReflexoW = lastPosition - 40;
	positionLastShadowReflexoW = lastPosition - 40;

	positionLastCorReflexoA = lastPosition - 2;
	positionLastShadowReflexoA = lastPosition - 2;

	positionLastCorReflexoS = lastPosition + 38;
    positionLastShadowReflexoS = lastPosition + 38;
}

function lastReflexoW(){
	if (positionPersoMain < bordaFinalA - bordaInicialD){
		bottonList[positionLastCorReflexoS].style.backgroundColor= "#060606";
        bottonList[positionLastShadowReflexoS].style.boxShadow= "";
		bottonList[positionLastCorReflexoA].style.backgroundColor= "#060606";
	    bottonList[positionLastShadowReflexoA].style.boxShadow= "";
		bottonList[lastPosition].style.backgroundColor= "#060606";
	    bottonList[lastPosition].style.boxShadow= "";
	    return
	}
	if (positionPersoMain == bordaFinalD - bordaInicialD) {
		bottonList[positionLastCorReflexoA].style.backgroundColor= "#060606";
        bottonList[positionLastShadowReflexoA].style.boxShadow= "";
        return
	}
	bottonList[positionLastCorReflexoA].style.backgroundColor= "#060606";
    bottonList[positionLastShadowReflexoA].style.boxShadow= "";
	bottonList[lastPosition].style.backgroundColor= "#060606";
    bottonList[lastPosition].style.boxShadow= "";
}

function lastReflexoA(){
	bottonList[positionLastCorReflexoW].style.backgroundColor= "#060606";
	bottonList[positionLastShadowReflexoW].style.boxShadow= "";
	bottonList[positionLastCorReflexoS].style.backgroundColor= "#060606";
    bottonList[positionLastShadowReflexoS].style.boxShadow= "";
	bottonList[lastPosition].style.backgroundColor= "#060606";
    bottonList[lastPosition].style.boxShadow= "";
}

function lastReflexoS(){
	if (positionPersoMain > bordaInicialD + bordaInicialD){
		bottonList[positionLastCorReflexoW].style.backgroundColor= "#060606";
		bottonList[positionLastShadowReflexoW].style.boxShadow= "";
		bottonList[positionLastCorReflexoA].style.backgroundColor= "#060606";
		bottonList[positionLastShadowReflexoA].style.boxShadow= "";
	    bottonList[lastPosition].style.backgroundColor= "#060606";
		bottonList[lastPosition].style.boxShadow= "";
	    return
	} 
	if (positionPersoMain == bordaInicialD+1){
		bottonList[lastPosition].style.backgroundColor= "#060606";
	    bottonList[lastPosition].style.boxShadow= "";
	    return
	}
	bottonList[positionLastCorReflexoA].style.backgroundColor= "#060606";
	bottonList[positionLastShadowReflexoA].style.boxShadow= "";
    bottonList[lastPosition].style.backgroundColor= "#060606";
	bottonList[lastPosition].style.boxShadow= "";
}

function lastReflexoD(){
	bottonList[positionLastCorReflexoW].style.backgroundColor= "#060606";
	bottonList[positionLastShadowReflexoW].style.boxShadow= "";
	bottonList[positionLastCorReflexoS].style.backgroundColor= "#060606";
    bottonList[positionLastShadowReflexoS].style.boxShadow= "";
	bottonList[positionLastCorReflexoA].style.backgroundColor= "#060606";
    bottonList[positionLastShadowReflexoA].style.boxShadow= "";
}