var jogos = Array();
jogos.push({A3:3, A5:2, A7:6,
            B1:9, B4:3, B6:5, B9:1,
            C3:1, C4:8, C6:6, C7:4,
            D3:8, D4:1, D6:2, D7:9,
            E1:7, E9:8,
            F3:6, F4:7, F6:8, F7:2,
            G3:2, G4:6, G6:9, G7:5,
            H1:8, H4:2, H6:3, H9:9,
            I3:5, I5:1, I7:3});

printar(jogos[0]);

function readURL(input) {
    var my_awesome_script = document.createElement('script');
    my_awesome_script.setAttribute('src',input.value);
    document.head.appendChild(my_awesome_script);

    setTimeout("avaliar()", 100);
}
function avaliar(){
    var resolvido = resolver(jogos[0]);
    printar(resolvido);
}
function retornaNome(lala){
  for(var varName in lala) {
    return varName;
  }
}

function printar(variavel){
    var linhas = ["A","B","C","D","E","F","G","H","I"];
    for(var i=1;i<10;i++){
        for(var j = 0; j < 9; j++){
            
            //console.log("pos" + linhas[j] + i);
            //document.getElementById("pos" + linhas[j] + i).innerHTML =linhas[j] + i;
            if(eval(retornaNome({variavel}) + "." + linhas[j] + i)){
                document.getElementById("pos" + linhas[j] + i).innerHTML = eval(retornaNome({variavel}) +"." + linhas[j] + i); 
            }
        }
    }
}