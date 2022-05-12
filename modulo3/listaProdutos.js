botao = document.getElementsByClassName("botao")
botao = document.getElementsByClassName("limpar")
valor = 0;

function guardaLista(){
    var myList = document.getElementById("myList");
    var selectedValue = myList.options[myList.selectedIndex].value;
    valor = valor + parseInt(selectedValue, 10)
    console.log(valor)

    var listaItens = document.createElement('li')

    if(selectedValue == 10){
        listaItens.innerHTML = 'Opção1 ' + 'R$' + selectedValue + ',00'
    }
    if(selectedValue == 20){
        listaItens.innerHTML = 'Opção2 ' + 'R$' + selectedValue + ',00'
    }
    if(selectedValue == 30){
        listaItens.innerHTML = 'Opção3 ' + 'R$' + selectedValue + ',00'
    }
    if(selectedValue == 40){
        listaItens.innerHTML = 'Opção4 ' + 'R$' + selectedValue + ',00'
    }
    if(selectedValue == 50){
        listaItens.innerHTML = 'Opção5 ' + 'R$' + selectedValue + ',00'
    }
    if(selectedValue == 60){
        listaItens.innerHTML = 'Opção6 ' + 'R$' + selectedValue + ',00'
    }
    
    lista.appendChild(listaItens)
    document.getElementById("somando").innerHTML = `Total: R$ ${valor},00`;
}

function limparLista(){
    document.getElementById("lista").innerHTML = ``;
    document.getElementById("somando").innerHTML = `Total: R$0,00`;
    if(onclick = 'click'){
        valor = 0
    }
}