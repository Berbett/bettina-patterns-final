
class ItemPedido {
  constructor(produto, quantidade, precoUnitario) {
    this.produto = produto;
    this.quantidade = quantidade;
    this.precoUnitario = precoUnitario;
  }

  subtotal() {
    return this.quantidade * this.precoUnitario;
  }
}

class Pedido {
  constructor() {
    this.itens = [];
  }

  adicionarItem(produto, quantidade, precoUnitario) {
    const item = new ItemPedido(produto, quantidade, precoUnitario);
    this.itens.push(item);
  }

  total() {
    return this.itens.reduce((soma, item) => soma + item.subtotal(), 0);
  }
}

class PedidoController {
  constructor() {
    this.pedido = new Pedido();
  }

  adicionarItem(produto, quantidade, preco) {
    this.pedido.adicionarItem(produto, quantidade, preco);
  }

  fecharPedido() {
    const total = this.pedido.total();
    console.log(`Pedido finalizado! Valor total: R$ ${total.toFixed(2)}`);
    return total;
  }
}


const controller = new PedidoController();

controller.adicionarItem("Notebook", 1, 3500);
controller.adicionarItem("Mouse", 2, 80);

controller.fecharPedido();
