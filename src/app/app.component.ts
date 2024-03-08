import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CarrinhoComponent } from './compras/carrinho.component';
import { CarrinhoService } from './compras/carrinho.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CarrinhoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'angular-observables';
  inputProduct = '';

  mostrar = true;

  private carrinhoService = inject(CarrinhoService);

  ngOnInit(): void {}

  addProduct() {
    this.carrinhoService.addProduct(this.inputProduct);

    this.inputProduct = '';
  }
}
