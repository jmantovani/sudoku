//======
// Variaveis globais
//======

//Variavel para saber se é para mostrar os resultados no console
var debug = false;

//Armazena as linhas que possuem preenchimento
var Arrlinhas = ["A","B","C","D","E","F","G","H","I"];

//Variavel global que ira armazenar os elementos de cada coluna
var global_line = { A: [], B: [], C: [], D: [], E: [], F: [], G: [], H: [], I: [] };

//Variavel global que ira armazenar os elementos de cada coluna
var global_column = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [] };

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

//======
// Funções de debug
//======

/**
 * Função para mostrar dados no console
 * 
 * @param variable
 * 	Variavel a ser debuggada
 */
function consoleDebug(variable) {
	
	//Se a global variable debug estiver como true, irá debugar o código
	if (debug)
		console.log(variable);
}

//======
// Funções de varredura geral
//======

/**
 * Passa por todos os quadradantes
 * 
 * @param jogo
 */
function checkAllSquares(jogo) {

	consoleDebug('Quadrante');

	var linhas = ["A","B","C","D","E","F","G","H","I"];

	for(var c = 1; c <= 9; c++){
		x = ((c - 1) % 3) * 3 + 1;
		y = Math.floor((c - 1) / 3) * 3;
		consoleDebug('Quadrante ' + (c));

		for(var i = 0; i <= 2; i++){
			for(var j = 0; j <= 2; j++){
				consoleDebug( linhas[y + j] + (x + i));

				/**
				 * @step1 Verifica se tem valor
				 * @step2 Se não tiver: continua
				 * @step3 Verifica: linha, coluna e quadrante
				 * @step4 Se nenhum valor se repetir por todos os numeros:
				 * @step5 adiciona no vetor
				 * @step6 faz um for geral verificando se o numero esta sozinho
				 * @step7 Se o numero estiver sozinho, coloca no tabuleiro
				 * @step 8 Repete até que termine
                 */

				/** @step1 */
				if (!hasValue(linhas[y + j] + (x + i))) {

					/** @step3 */
					

				}

			}
		}
	}
}

/**
 * Verifica se o numero está presente na linha
 */
function checkAlllines() {

	consoleDebug('Linha');

	var linhas = ["A","B","C","D","E","F","G","H","I"];
	var temp = [];

	for(var i = 0; i < 9; i++){
		consoleDebug('Coluna: ', linhas[i] );
		for(var j = 1; j <= 9; j++){


			//if ( !numeropossuinalinha && !numeropossuicoluna && !numeropossuiquadrante) {
			//parei aq
			//}

			/*
			 if (!hasValue(linhas[i] + j)) {

			 //writeInGlobalLine(getValue(linhas[i], j));
			 consoleDebug('aq');
			 }
			 */

			consoleDebug(linhas[i] + j);
		}
	}
}

/**
 * Faz uma varredura em todas as colunas
 */
function checkallColumns(jogo) {

	consoleDebug('Coluna');

	var linhas = ["A","B","C","D","E","F","G","H","I"];

	for(var i = 1; i <= 9; i++){
		consoleDebug('Coluna: ', i);
		for(var j = 0; j < 9; j++){
			hasValue(linhas[j] + i);
			consoleDebug(linhas[j] + i);
		}
	}
}

//======
// Funções de varredura especificas
//======

/**
 * Verifica se o numero está sozinho
 *
 * @param jogo
 */
function checkSquare(jogo) {

	consoleDebug('Quadrante');

	var linhas = ["A","B","C","D","E","F","G","H","I"];

	for(var c = 1; c <= 9; c++){
		x = ((c - 1) % 3) * 3 + 1;
		y = Math.floor((c - 1) / 3) * 3;
		consoleDebug('Quadrante ' + (c));

		for(var i = 0; i <= 2; i++){
			for(var j = 0; j <= 2; j++){
				consoleDebug( linhas[y + j] + (x + i));

			}
		}
	}
}

/**
 * Verifica se o numero está presente na linha
 */
function Checkline() {

	consoleDebug('Linha');

	var linhas = ["A","B","C","D","E","F","G","H","I"];
	var temp = [];

	for(var i = 0; i < 9; i++){
		consoleDebug('Coluna: ', linhas[i] );
		for(var j = 1; j <= 9; j++){


			//if ( !numeropossuinalinha && !numeropossuicoluna && !numeropossuiquadrante) {
			//parei aq 
			//}

			/*
			 if (!hasValue(linhas[i] + j)) {

			 //writeInGlobalLine(getValue(linhas[i], j));
			 consoleDebug('aq');
			 }
			 */

			consoleDebug(linhas[i] + j);
		}
	}
}

/**
 Verifica se o numero está presente na coluna
 */
function checkColumn(jogo) {

	consoleDebug('Coluna');

	var linhas = ["A","B","C","D","E","F","G","H","I"];

	for(var i = 1; i <= 9; i++){
		consoleDebug('Coluna: ', i);
		for(var j = 0; j < 9; j++){
			hasValue(linhas[j] + i);
			consoleDebug(linhas[j] + i);
		}
	}
}

/**
 * Faz uma varredura por todos os quadrantes verificando se o vetor de
 * temporarios está vazio
 *
 * @param jogo
 */
function verifyAloneNumber(jogo) {

	consoleDebug('Quadrante');

	var linhas = ["A","B","C","D","E","F","G","H","I"];

	for(var c = 1; c <= 9; c++){
		x = ((c - 1) % 3) * 3 + 1;
		y = Math.floor((c - 1) / 3) * 3;
		consoleDebug('Quadrante ' + (c));

		for(var i = 0; i <= 2; i++){
			for(var j = 0; j <= 2; j++){
				consoleDebug( linhas[y + j] + (x + i));

			}
		}
	}
}

//======
// Funções de verificação de valores
//======

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
	consoleDebug('retornando valor: ' + value);
	return value;
}

/**
 * Verifica se a celula possue algum valor
 *
 * @param field
 * @returns {boolean}
 */
function hasValue(field) {
	if($("#pos" + field)[0].innerHTML != '&nbsp;') {
		consoleDebug('Valor encontrado: ' + field)
		return true;
	}
	else {
		consoleDebug('Valor não encontrado: ' + field)
		return false;
	}
}

//======
// Funções padrão
//======

function resolver(jogo){
    //atribuir um valor na posição 
    //$("#posA1")[0].innerHTML = "1";

	//Faz a contagem do tempo de perfomance
	var performance = window.performance;
	var t0 = performance.now();


	checkAlllines(jogo);
	checkallColumns(jogo);
	checkAllSquares(jogo);

	
	var t1 = performance.now();
	consoleDebug("Tempo de execução " + Math.round(t1 - t0) + " milliseconds.")
	
    return jogo;
}