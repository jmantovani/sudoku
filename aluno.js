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
		
		for(var i = 0; i <= 2; i++){
			for(var j = 0; j <= 2; j++){
				console.log( linhas[y + j] + (x + i));
			}
		}
	}
}

//Variavel global que ira armazenar os elementos de cada linha
var global_line = { A: [], B: [], C: [], D: [], E: [], F: [], G: [], H: [], I: [] };
//Variavel global que ira armazenar os elementos de cada coluna
var global_column = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [] };

function writeInGlobalLine(line, value){
	global_line[line].push(value);
}

/*
Verifica se o numero está presente na linha
*/
function checkLine() {
	
	drawDebug('Linha');
	
	var linhas = ["A","B","C","D","E","F","G","H","I"];
	
    for(var i = 0; i < 9; i++){
		console.log('Coluna: ', linhas[i] );
        for(var j = 1; j <= 9; j++){
			if (!hasValue(linhas[i] + j))
				writeInGlobalLine(linhas[i], j);

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

	countLine();

	//hasValue('A1');
	//hasValue('A3');

	console.log('===============');
	console.log(global_line);
	console.log('===============');
	
	var t1 = performance.now();
	console.log("Tempo de execução " + Math.round(t1 - t0) + " milliseconds.")
	
    return jogo;
}