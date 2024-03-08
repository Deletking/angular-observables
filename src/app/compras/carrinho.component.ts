import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { CarrinhoService } from './carrinho.service';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <span>Qtde carrinho: </span>
    <span>{{ qtdCarrinho$ | async }}</span>
  `,
})
export class CarrinhoComponent implements OnDestroy {
  carrinhoService = inject(CarrinhoService);

  qtdCarrinho$ = this.carrinhoService.obterCarrinho();

  // qtdProduct = 0;
  sub = new Subscription();
  constructor() {
    // const subqtd = this.qtdCarrinho$.subscribe((value) => {
    //   this.qtdProduct = value;
    // });
    // this.sub.add(subqtd);
  }

  ngOnDestroy(): void {
    console.log('carrinho destruído');
    // this.sub.unsubscribe();
  }
}
