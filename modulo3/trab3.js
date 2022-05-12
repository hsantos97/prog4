function destacaTexto(Texto, termoBusca){

    inicioTag = "<font style='color:#000;background-color:#FFFF00'><b>";
    fimTag = "</b></font>";

    var novoTexto = "";
    var i = -1;
    var lcTermoBusca = termoBusca.toLowerCase();
    var lcTexto = Texto.toLowerCase();

    while (Texto.length > 0){
        i = lcTexto.indexOf(lcTermoBusca, i+1);
        if (i < 0){
            novoTexto += Texto;
            Texto = "";
        }
        else{
            if (Texto.lastIndexOf(">", i) >= Texto.lastIndexOf("<", i)){
                if (lcTexto.lastIndexOf("/script>", i) >= lcTexto.lastIndexOf("<script", i)){
                    novoTexto += Texto.substring(0, i) + inicioTag + Texto.substr(i, termoBusca.length) + fimTag;
                    Texto = Texto.substr(i + termoBusca.length);
                    lcTexto = Texto.toLowerCase();
                    i = -1;
                }
            }
        }
    }
    return novoTexto;
}

function destacaTextoBusca(textoBusca, textoObj, ehFrase){
    if (ehFrase){arrayBusca=[textoBusca];}
    else{arrayBusca = textoBusca.split(" ");}

    var Texto = textoObj.innerHTML;

    for (var i = 0; i < arrayBusca.length; i++){Texto = destacaTexto(Texto, arrayBusca[i]);}
    textoObj.innerHTML = Texto;
}

function limpar(Texto, termoBusca){

    inicioTag = "<font style='color:#000000;background-color:#FFFAFA'>";
    fimTag = "</font>";

    var novoTexto = "";
    var i = -1;
    var lcTermoBusca = termoBusca.toLowerCase();
    var lcTexto = Texto.toLowerCase();

    while (Texto.length > 0){
        i = lcTexto.indexOf(lcTermoBusca, i+1);
        if (i < 0){
            novoTexto += Texto;
            Texto = "";
        }
        else{
            if (Texto.lastIndexOf(">", i) >= Texto.lastIndexOf("<", i)){
                if (lcTexto.lastIndexOf("/script>", i) >= lcTexto.lastIndexOf("<script", i)){
                    novoTexto += Texto.substring(0, i) + inicioTag + Texto.substr(i, termoBusca.length) + fimTag;
                    Texto = Texto.substr(i + termoBusca.length);
                    lcTexto = Texto.toLowerCase();
                    i = -1;
                }
            }
        }
    }
    return novoTexto;
}
function limparTexto(textoBusca, textoObj, ehFrase){
    if (ehFrase){arrayBusca=[textoBusca];}
    else{arrayBusca = textoBusca.split(" ");}

    var Texto = textoObj.innerHTML;

    for (var i = 0; i < arrayBusca.length; i++){Texto = limpar(Texto, arrayBusca[i]);}
    textoObj.innerHTML = Texto;
}

const url = 'https://www.amazon.com.br/Senhor-dos-An´eis-Sociedade-Anel/dp/8595084750/'
const btn = document.querySelector('#link')

function novaJanela(url){   
    const win = window.open(url, '_blank')
    win.focus()    
}
btn.addEventListener('click', () =>{
    novaJanela(url);
})

function substituir(){
    let textoObj = document.getElementById('texto')
    let arrayTexto = textoObj.innerHTML.split(' ')
    //console.log(texto)
    const str = 'Sr.'
    for(var i = 0; i < arrayTexto.length -1; i++){
        if(str == arrayTexto[i]){
            arrayTexto.splice(i, 1, 'senhor')
        }
    }
    var novoTexto = ''
    for(var i = 0; i <arrayTexto.length -1; i++){
        novoTexto += arrayTexto[i] + ' '
    }
    textoObj.innerHTML = novoTexto
}
substituir();

function divideSentenca(){
    let textoObj = document.getElementById('texto')
    let arrayTexto = textoObj.innerHTML.split('.')
    //console.log(arrayTexto)
    var novoTexto = ''
    for(var i = 0; i < arrayTexto.length -1; i++){
        var tam = arrayTexto[i].split(' ')
        var cont = 0
        for(var j = 0; j <tam.length-1; j++){
            if(tam[j] != ''){
                cont = cont + 1
            }       
        }
        novoTexto += `${arrayTexto[i]}.[${cont}]<br>` 
    }
    textoObj.innerHTML = novoTexto
}
divideSentenca();
