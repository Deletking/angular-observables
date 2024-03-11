import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

import { BehaviorSubject, Observable, shareReplay } from 'rxjs';

export interface Product {
  title: string;
}

@Component({
  selector: 'app-hot-and-cold',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hot-and-cold.component.html',
  styleUrl: './hot-and-cold.component.scss',
})
export class HotAndColdComponent {
  http = inject(HttpClient);

  cold$ = new Observable<number>((subscriber) => {
    const numeroAleatorio = Math.round(Math.random() * 100);
    console.log('EXECUTADO', numeroAleatorio);
    subscriber.next(numeroAleatorio);
  });

  hot$ = new BehaviorSubject<number>(0);

  produto$ = this.http
    .get<Product>('https://dummyjson.com/products/1')
    .pipe(shareReplay());

  constructor() {
    this.produto$.subscribe((valor) => {
      console.log('valor', valor);
    });

    this.produto$.subscribe((valor) => {
      console.log('valor 2', valor);
    });

    // this.hot$.subscribe((valor) => console.log('sub1', valor));
    // this.hot$.subscribe((valor) => console.log('sub2', valor));

    // setTimeout(() => {
    //   this.hot$.next(Math.round(Math.random() * 100));
    // }, 5000);
  }
}
