function mensagem(p){
    if( p == 1){
        return "Seja Bem Vindo"
    }
    if( p == 0){
        return "Tente novamente"
    }
}
function mensagem2(p, nome){
    console.log(mensagem(p) + nome);
}

mensagem2(1, " harison")