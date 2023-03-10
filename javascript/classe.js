class Pedido {
    constructor(numero, desconto) {
        this.numero = numero;
        this.produtos = [];
        this.desconto = desconto;
    }

    adicionarProduto(novoProduto) {
        this.produtos.push(novoProduto);
        console.log("Produto adicionado.");
    }

    removerProduto(){
        const produtoRemovido = this.produtos.pop()
        console.log(`O produto ${produtoRemovido} foi removido.`)
    }

    exibirTotal(){
        console.log(this.produtos)
    }

    calcularTotal(){

    }
    calcularTotalComDesconto(){

    }
}

const pedido1 = new Pedido(1, 0)
const produto1 = new Produto()