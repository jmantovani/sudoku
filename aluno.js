function drawDebug(name) {
	console.log('======');
	console.log(name);
}

/*
Verifica se o numero está presente na matriz 9x9
*/
function checkSquare(jogo) {
	
	drawDebug('Quadrante');
	
	var linhas = ["A","B","C","D","E","F","G","H","I"];
	
	for(var c = 1; c <= 9; c++){
		x = ((c - 1) % 3) * 3 + 1;
		y = Math.floor((c - 1) / 3) * 3;
		console.log('Quadrante ' + (c));
		
		for(var i = 1; i <= 2; i++){
			for(var j = 1; j <= 2; j++){

				if (!hasValue(linhas[i] + j)) {



					//writeInGlobalLine(getValue(linhas[i], j));
				}

				console.log( linhas[y + j] + (x + i));
			}
		}
	}
}

//Variavel global que ira armazenar os elementos temporarios de cada cedula
var global_sudoku = { 
	A1: [], A2: [], A3: [], A4: [], A5: [], A6: [], A7: [], A8: [], A9: [],
	B1: [], B2: [], B3: [], B4: [], B5: [], B6: [], B7: [], B8: [], B9: [],
	C1: [], C2: [], C3: [], C4: [], C5: [], C6: [], C7: [], C8: [], C9: [],
	D1: [], D2: [], D3: [], D4: [], D5: [], D6: [], D7: [], D8: [], D9: [],
	E1: [], E2: [], E3: [], E4: [], E5: [], E6: [], E7: [], E8: [], E9: [],
	F1: [], F2: [], F3: [], F4: [], F5: [], F6: [], F7: [], F8: [], F9: [],
	G1: [], G2: [], G3: [], G4: [], G5: [], G6: [], G7: [], G8: [], G9: [],
	H1: [], H2: [], H3: [], H4: [], H5: [], H6: [], H7: [], H8: [], H9: [],
	I1: [], I2: [], I3: [], I4: [], I5: [], I6: [], I7: [], I8: [], I9: []
};

//Variavel global que ira armazenar os elementos de cada coluna
var global_line = { A: [], B: [], C: [], D: [], E: [], F: [], G: [], H: [], I: [] };

//Variavel global que ira armazenar os elementos de cada coluna
var global_column = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [] };


/**
 * Verifica se o numero está presente na linha
 */
function checkLine() {
	
	drawDebug('Linha');
	
	var linhas = ["A","B","C","D","E","F","G","H","I"];
	var temp = [];
	
    for(var i = 0; i < 9; i++){
		console.log('Coluna: ', linhas[i] );
        for(var j = 1; j <= 9; j++){


        	if ( !numeropossuinalinha && !numeropossuicoluna && !numeropossuiquadrante) {
        		//parei aq 
			}

        	/*
			if (!hasValue(linhas[i] + j)) {

				//writeInGlobalLine(getValue(linhas[i], j));
				console.log('aq');
			}
			*/

			console.log(linhas[i] + j);
		}
	}
}

/**
 * Retorna o valor da célula
 *
 * @param field
 * 	posião. ex. A1
 * @returns {*}
 * 	valor da posição
 */
function getValue(field) {
	var value = $("#pos" + field)[0].innerHTML;
	console.log('retornando valor: ' + value);
	return value;
}

function hasValue(field) {
	if($("#pos" + field)[0].innerHTML != '&nbsp;') {
		console.log('Valor encontrado: ' + field)
		return true;
	}
	else {
		console.log('Valor não encontrado: ' + field)
		return false;
	}
}

/*
Verifica se o numero está presente na coluna
*/
function checkColumn(jogo) {
	
	drawDebug('Coluna');
	
	var linhas = ["A","B","C","D","E","F","G","H","I"];
	
    for(var i = 1; i <= 9; i++){
		console.log('Coluna: ', i);
        for(var j = 0; j < 9; j++){
			hasValue(linhas[j] + i);
			console.log(linhas[j] + i);
		}
	}
}

/*

*/
function getSquareNumber(jogo) {
	
}


/*
Inscreve em cada um dos quadradinhos vazios os números possíveis (provisórios), isto é, que não se repitam em relação à linha, à coluna ou ao quadrado onde contidos:
*/
function possiveisValores() {
	
}

//Armazena as linhas que possuem preenchimento
var Arrlinhas = ["A","B","C","D","E","F","G","H","I"];

function resolver(jogo){
    //atribuir um valor na posição 
    //$("#posA1")[0].innerHTML = "1";
	
	
	var performance = window.performance;
	var t0 = performance.now();

	checkLine(jogo);
	//checkColumn(jogo);
	//checkSquare(jogo);

	//hasValue('A1');
	//hasValue('A3');

	console.log('===============');
	console.log(global_line);
	console.log('===============');
	
	var t1 = performance.now();
	console.log("Tempo de execução " + Math.round(t1 - t0) + " milliseconds.")
	
    return jogo;
}