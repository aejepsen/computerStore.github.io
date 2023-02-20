import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProdutoCarrinho } from 'src/produtos';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho: IProdutoCarrinho[] = [];
  total = 0;

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.itensCarrinho = this.carrinhoService.obterCarrinho();
    this.calcularTotal();
  }
  
  calcularTotal() {
    this.total = this.itensCarrinho.reduce((prev, item) => prev + (item.preco * item.quantidade), 0);
  }

  removerProdutoCarrinho(produtoId: number) {
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerProdutoCarrinho(produtoId);
    this.calcularTotal();
}

  comprar() {
    alert("Compra efetuada com sucesso !");
    this.carrinhoService.limparCarrinho();
    this.router.navigate(['produtos']);
  }
}