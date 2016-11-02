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

/*
Verifica se o numero está presente na linha
*/
function checkLine() {
	
	drawDebug('Linha');
	
	var linhas = ["A","B","C","D","E","F","G","H","I"];
	
    for(var i = 0; i < 9; i++){
		console.log('Coluna: ', linhas[i] );
        for(var j = 1; j <= 9; j++){
				console.log(linhas[i] + j);
		}
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


function resolver(jogo){
    //atribuir um valor na posição 
    //$("#posA1")[0].innerHTML = "1";
	
	
	var performance = window.performance;
	var t0 = performance.now();
	
	checkColumn(jogo);
	checkLine(jogo);
	checkSquare(jogo);
	
	var t1 = performance.now();
	console.log("Tempo de execução " + Math.round(t1 - t0) + " milliseconds.")
	
    return jogo;
}