produto = {
    value: 50,
    grow50: function grow(){
        this.value = (this.value*0.5)+this.value;
    }
};
produto.grow50();
console.log(produto.value);
produto.grow50();
console.log(produto.value);
produto.grow50();
console.log(produto.value);