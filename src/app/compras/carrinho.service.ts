import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Compra } from './compra.model';

@Injectable({ providedIn: 'root' })
export class CarrinhoService {
  private carrinho: Compra[] = [];

  private addProduct$ = new BehaviorSubject<number>(0);

  obterCarrinho() {
    return this.addProduct$.asObservable();
  }

  addProduct(productName: string) {
    const product: Compra = {
      product: productName,
      id: this.carrinho.length + 1,
    };

    this.carrinho.push(product);
    this.addProduct$.next(this.carrinho.length);

    console.log(this.carrinho);
  }
}
