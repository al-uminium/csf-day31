import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InventoryComponent } from './components/inventory.component';
import { CartComponent } from './components/cart.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InventoryComponent, CartComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'day-31';
  imgUrl = [
    {url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/1200px-Red_Apple.jpg", id: "Apple"},
    {url: "https://lafast.org/wp-content/uploads/2021/03/cropped-AGUACATE-FUERT.jpg", id:"Avocado"}, 
    {url: "https://www.frutasdocavado.com/wp-content/uploads/2019/05/Uvas.jpg", id:"Grape"},
    {url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg/1200px-Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg", id: "Watermelon"},
    {url: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/27/0/HEW_Pears_s4x3.jpg.rend.hgtvcom.1280.720.suffix/1371612039080.jpeg", id: "Pear"}
  ]

  cart: string[] = [];

  addToCart(newItem: string) {
    this.cart.push(newItem);
  }
}
