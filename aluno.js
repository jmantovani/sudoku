//======
// Variaveis globais
//======

//Variavel para saber se é para mostrar os resultados no console
var debug = false;

//Armazena as linhas que possuem preenchimento
var Arrlinhas = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

//Variavel global que ira armazenar os elementos de cada coluna
var global_line = {A: [], B: [], C: [], D: [], E: [], F: [], G: [], H: [], I: []};

//Variavel global que ira armazenar os elementos de cada coluna
var global_column = {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []};

//Variavel global que ira armazenar os elementos temporarios de cada cedula
var global_sudoku = []; /*
    A1 = [], A2 = [], A3 = [], A4 = [], A5 = [], A6 = [], A7 = [], A8 = [], A9 = [],
    B1 = [], B2 = [], B3 = [], B4 = [], B5 = [], B6 = [], B7 = [], B8 = [], B9 = [],
    C1 = [], C2 = [], C3 = [], C4 = [], C5 = [], C6 = [], C7 = [], C8 = [], C9 = [],
    D1 = [], D2 = [], D3 = [], D4 = [], D5 = [], D6 = [], D7 = [], D8 = [], D9 = [],
    E1 = [], E2 = [], E3 = [], E4 = [], E5 = [], E6 = [], E7 = [], E8 = [], E9 = [],
    F1 = [], F2 = [], F3 = [], F4 = [], F5 = [], F6 = [], F7 = [], F8 = [], F9 = [],
    G1 = [], G2 = [], G3 = [], G4 = [], G5 = [], G6 = [], G7 = [], G8 = [], G9 = [],
    H1 = [], H2 = [], H3 = [], H4 = [], H5 = [], H6 = [], H7 = [], H8 = [], H9 = [],
    I1 = [], I2 = [], I3 = [], I4 = [], I5 = [], I6 = [], I7 = [], I8 = [], I9 = []
];
*/

//======
// Funções de debug
//======

/**
 * Função para mostrar dados no console
 *
 * @param variable
 *    Variavel a ser debuggada
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

    var linhas = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

    for (var c = 1; c <= 9; c++) {
        x = ((c - 1) % 3) * 3 + 1;
        y = Math.floor((c - 1) / 3) * 3;
        consoleDebug('Quadrante ' + (c));

        for (var i = 0; i <= 2; i++) {
            for (var j = 0; j <= 2; j++) {

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

                setPossibleValues(linhas[y + j], (x + i));

                /** @step1 */
                if (!hasValue(linhas[y + j] + (x + i))) {

                    /** @step2 */

                    /** @step3 */



                    //setSureValues();

                }
            }
        }
    }
}

/**
 * Verifica se o numero está presente na linha
 */
function checkAllFields(jogo) {

    do {
        consoleDebug('Linha');

        var linhas = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
        var temp = [];

        for (var i = 0; i < 9; i++) {
            consoleDebug('Coluna: ', linhas[i]);
            for (var j = 1; j <= 9; j++) {

                setPossibleValues(linhas[i], j);

                consoleDebug(linhas[i] + j);
            }
        }

        jogo = setSureValues(jogo);
    }while( !gameComplete() );

    return jogo;
}

/**
 * Faz uma varredura em todas as colunas
 */
function gameComplete() {

    var linhas = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
    var gameComplete = false;

    for (var i = 1; i <= 9; i++) {
        consoleDebug('Coluna: ', i);
        for (var j = 0; j < 9; j++) {

            if (hasValue(linhas[j] + i))
                gameComplete = true;
            else
                return gameComplete = false;
        }
    }

    return gameComplete;
}

//======
// Sem nome ainda
//======

/**
 * Passa por todos os elementos da variavel global_sudoku
 * verificando se já é possivel saber o valor da celula
 */
function setSureValues(jogo) {

    var linhas = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

    for (var i = 0; i < 9; i++) {
        consoleDebug('Coluna: ', linhas[i]);
        for (var j = 1; j <= 9; j++) {

            if (global_sudoku[linhas[i] + j] != null ) {

                // Se sobrou apenas 1 numero na celula
                if (global_sudoku[linhas[i] + j].length == 1 && !hasValue(linhas[i] + j)) {

                    //Set value visual
                    setValue(linhas[i] + j, global_sudoku[linhas[i] + j][0]);

                    //Adiciona na variavel jogo

                    jogo[linhas[i] + j] = parseInt(global_sudoku[linhas[i] + j][0]);
                }
            }

        }
    }

    return jogo;

}

/**
 * Coloca os possiveis valores num temporario
 *
 * @param line
 * @param column
 */
function setPossibleValues(line, column) {

    //Line letter, column: number

    var defaultArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    var tmpLine = checkline(line);
    var tmpColumn = checkColumn(column);
    var tmpSquare = checkSquare(getQuadrante(line + column));

    consoleDebug(tmpLine);
    consoleDebug(tmpColumn);
    consoleDebug(tmpSquare);

    //Merge linhas com colunas
    var mergeLineColumn = tmpLine.concat(tmpColumn);

    //Junta os arrays de valores quen não podem ser
    var allNonPossible = unique(mergeLineColumn.concat(tmpSquare));

    //Compara um array com todos os numeros com os que não podem ser
    var possibleArray = arrayDiff(defaultArray, unique(allNonPossible).sort());

    global_sudoku[line + column] = possibleArray;
}

/**
 * Retorna a diferença entre dois arrays
 *
 * @param a1
 * @param a2
 * @returns {Array}
 */
function arrayDiff (a1, a2) {

    var a = [], diff = [];

    for (var i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
    }

    for (var i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
            delete a[a2[i]];
        } else {
            a[a2[i]] = true;
        }
    }

    for (var k in a) {
        diff.push(k);
    }

    return diff;
};

/**
 * Remove duplicidade de um array
 *
 * @param array
 *
 * @returns array
 */
function unique(array) {
    return array.filter(function (el, index, arr) {
        return index == arr.indexOf(el);
    });
}

function getQuadrante(field) {

    consoleDebug('Quadrante');

    var linhas = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

    for (var c = 1; c <= 9; c++) {
        x = ((c - 1) % 3) * 3 + 1;
        y = Math.floor((c - 1) / 3) * 3;
        consoleDebug('Quadrante ' + (c));

        for (var i = 0; i <= 2; i++) {
            for (var j = 0; j <= 2; j++) {
                consoleDebug(linhas[y + j] + (x + i));

                //Se a linha do foreach for igual a celula passada, retorna o
                //numero do quadrante
                if (linhas[y + j] + (x + i) == field)
                    return c;

            }
        }

    }

    consoleDebug(valoresQuadrante);

    return valoresQuadrante;
}

//======
// Funções de varredura especificas
//======

/**
 * Verifica se o numero está sozinho
 *
 * @param jogo
 */
function checkSquare(quadrante) {

    consoleDebug('Quadrante');

    var linhas = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

    var valoresQuadrante = [];

    for (var c = 1; c <= 9; c++) {
        x = ((c - 1) % 3) * 3 + 1;
        y = Math.floor((c - 1) / 3) * 3;
        consoleDebug('Quadrante ' + (c));

        if (quadrante == c) {
            for (var i = 0; i <= 2; i++) {
                for (var j = 0; j <= 2; j++) {
                    consoleDebug(linhas[y + j] + (x + i));

                    if (hasValue(linhas[y + j] + (x + i))) {
                        //Adiciona o valor no temp
                        valoresQuadrante.push(getValue(linhas[y + j] + (x + i)));
                    }
                }
            }
        }
    }

    consoleDebug(valoresQuadrante);

    return valoresQuadrante;
}

/**
 * Verifica se o numero está presente na linha
 */
function checkline(line) {

    var valoresLine = [];

    //Verifica toda a linha, do 1 até o 9
    for (var j = 1; j <= 9; j++) {

        if (hasValue(line + j)) {
            //Adiciona o valor no temp
            valoresLine.push(getValue(line + j));
        }
    }

    consoleDebug(valoresLine);

    return valoresLine;
}

/**
 Verifica se o numero está presente na coluna
 */
function checkColumn(column) {

    var valoresColumn = [];

    var linhas = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

    for (var j = 0; j < 9; j++) {

        if (hasValue(linhas[j] + column)) {
            valoresColumn.push(getValue(linhas[j] + column));
        }
    }

    consoleDebug(valoresColumn);

    return valoresColumn;
}

/**
 * Faz uma varredura por todos os quadrantes verificando se o vetor de
 * temporarios está vazio
 *
 * @param jogo
 */
function verifyAloneNumber(jogo) {

    consoleDebug('Quadrante');

    var linhas = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

    for (var c = 1; c <= 9; c++) {
        x = ((c - 1) % 3) * 3 + 1;
        y = Math.floor((c - 1) / 3) * 3;
        consoleDebug('Quadrante ' + (c));

        for (var i = 0; i <= 2; i++) {
            for (var j = 0; j <= 2; j++) {
                consoleDebug(linhas[y + j] + (x + i));

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
 *    posião. ex. A1
 * @returns {*}
 *    valor da posição
 */
function getValue(field) {
    var value = $("#pos" + field)[0].innerHTML;
    consoleDebug('retornando valor: ' + value);
    return value;
}

function setValue(field, value) {
    $("#pos" + field)[0].innerHTML = value;

    consoleDebug('setando valor valor: ' + value);
}

/**
 * Verifica se a celula possue algum valor
 *
 * @param field
 * @returns {boolean}
 */
function hasValue(field) {
    if ($("#pos" + field)[0].innerHTML != '&nbsp;') {
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

function resolver(jogo) {
    //atribuir um valor na posição 
    //$("#posA1")[0].innerHTML = "1";

    debug = false;
    debugTime = true;

    //Faz a contagem do tempo de perfomance
    if (debugTime) {
        var performance = window.performance;
        var t0 = performance.now();
    }

    var jogo_finalizado = checkAllFields(jogo);

    console.log(jogo_finalizado);

    if (debugTime) {
        var t1 = performance.now();
        console.log("Tempo de execução " + Math.round(t1 - t0) + " milliseconds.");
    }

    return jogo;
}