import { Injectable } from '@angular/core';
import { IProduto, produtos } from 'src/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: IProduto[] = produtos;

  constructor() { }

  getAll(): IProduto[] {
    return this.produtos;
  }

  getOne(productId: number): IProduto | undefined {
    return this.produtos.find(p => p.id === productId);
  }
}
