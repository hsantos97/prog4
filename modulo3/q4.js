class Forma {
    constructor(nome, tipo){
        this.nome = nome;
        this.tipo = tipo;
    }
    get getTipo(){
        return this.tipo
    }
     
}

class Triangulo extends Forma{
    constructor(nome, tipo, a, b, c){
        super(nome, tipo);
        this.a = a;
        this.b = b;
        this.c = c; 
    }
     
    get getPerimetro(){
        return this.a+this.b+this.c
    }
}

t1 = new Forma('Triangulo', 'Escaleno');
console.log(t1.getTipo);
t2 = new Triangulo('A', 'Escaleno', 1, 2, 3);
console.log(t2.getPerimetro);
t3 = new Triangulo('B', 'Equilatero', 3, 3, 3);
console.log(t3.getPerimetro);

