import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import * as Classes from './classes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'coding-exercise';

  public members: Classes.Member[] = [
    {name: 'Cindy', ID: 1, rewardLevel: Classes.RewardLevel.Bronze},
    {name: 'Max', ID: 2, rewardLevel: Classes.RewardLevel.Silver},
    {name: 'Randy', ID: 3, rewardLevel: Classes.RewardLevel.Gold},
  ];
  
  public products: Classes.Product[] = [
    {name: 'Textbook', price: 125},
    {name: 'Pens', price: 5.25},
    {name: 'Folders', price: 3.25},
    {name: 'Binder', price: 4.75},
  ];

  public knowledgeMart: Classes.Store = {members: this.members, products: this.products};
  public customer = new Classes.Customer;

  public selectCustomer (member: Classes.Member) {
    this.customer = new Classes.Customer;
    this.customer.member = member;
    console.log('Selected Customer: ' + this.customer.member.name)
  }

  public addProduct (product:Classes.Product) {
    this.customer.cart.push(product);
  }

  public removeProduct (index: number) {
    delete this.customer.cart[index]
  }

  public showDiscount() {
    let discount = 0

    switch (this.customer.member.rewardLevel) {
      case Classes.RewardLevel.Silver:
        discount = 10;
        break;
      case Classes.RewardLevel.Gold:
        discount = 15;
        break;
    }

    return discount;
  }

  public subtotal() {
    let cartPrice = 0;

    this.customer.cart.forEach(product => {
      cartPrice += product.price;
    });

    return cartPrice * this.customer.member.rewardLevel
  }
}
