a = function mensagem(){
    console.log("Olá");
    return function mensagem2(){
        console.log("Tudo bem ?");
    }
}
a()();