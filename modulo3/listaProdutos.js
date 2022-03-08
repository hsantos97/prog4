let botao = document.getElementsByClassName('botao');
let lista = document.getElementsByClassName('lista');
let total = document.getElementsByClassName('total');
let selecao = document.getElementsByClassName('selecao');
let a = document.getElementById("myForm");

var resultado = 0;

function soma(){
    resultado += selecao.value;  
    console.log(selecao[0]);
    
}


function guardaLista(){
    //alert('AQUI')
    var valor = selecao.value
    var listaItens = document.createElement('li')
    if(valor == 10){
        listaItens.innerHTML = 'OP1'
    }
    if(valor == 20){
        listaItens.innerHTML = 'OP2'
    }
    if(valor == 30){
        listaItens.innerHTML = 'OP3'
    }
    if(valor == 40){
        listaItens.innerHTML = 'OP4'
    }
    if(valor == 50){
        listaItens.innerHTML = 'OP5'
    }
    if(valor == 60){
        listaItens.innerHTML = 'OP6'
    }
    total.innerHTML = '$${resultado},00'
    lista.appendChild(listaItens)
}

botao.addEventListener('click', function(){
    soma();
    guardaLista();
}, false)