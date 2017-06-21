const produto = {
    nome: 'Caneta Bic Preta',
    preco: 1.90,
    desconto: 0.05
}

function clone(objeto){
    //Espalha todos os atributos do objeto dentro do novo objeto(clona objeto)
    return { ...objeto}
}


const novoProduto = clone(produto);
novoProduto.nome = 'Caneta Bic Azul';
console.log(produto);
console.log(novoProduto)