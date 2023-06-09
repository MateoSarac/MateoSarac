import { Component } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
})
export class HomeComponentComponent {
  products: any[] = [
    {
      id: 1,
      name: 'T-shirt',
      quantity: 20,
      price: 25.99,
      dateAdded: '2022-01-01',
      status: true,
      type: 'Clothing',
    },
    {
      id: 2,
      name: 'Sneakers',
      quantity: 10,
      price: 79.99,
      dateAdded: '2022-02-10',
      status: false,
      type: 'Shoes',
    },
    {
      id: 3,
      name: 'Backpack',
      quantity: 5,
      price: 129.99,
      dateAdded: '2022-03-15',
      status: true,
      type: 'Bags',
    },
    {
      id: 4,
      name: 'Headphones',
      quantity: 15,
      price: 99.99,
      dateAdded: '2022-04-20',
      status: true,
      type: 'Electronics',
    },
    {
      id: 5,
      name: 'Smart Watch',
      quantity: 7,
      price: 199.99,
      dateAdded: '2022-05-01',
      status: true,
      type: 'Electronics',
    },
    {
      id: 6,
      name: 'Sunglasses',
      quantity: 25,
      price: 39.99,
      dateAdded: '2022-06-05',
      status: false,
      type: 'Accessories',
    },
    {
      id: 7,
      name: 'Wireless Charger',
      quantity: 12,
      price: 49.99,
      dateAdded: '2022-07-10',
      status: true,
      type: 'Electronics',
    },
    {
      id: 8,
      name: 'Desk Lamp',
      quantity: 8,
      price: 79.99,
      dateAdded: '2022-08-15',
      status: false,
      type: 'Home',
    },
    {
      id: 9,
      name: 'Water Bottle',
      quantity: 30,
      price: 9.99,
      dateAdded: '2022-09-20',
      status: false,
      type: 'Sports',
    },
    {
      id: 10,
      name: 'Hoodie',
      quantity: 18,
      price: 49.99,
      dateAdded: '2022-10-01',
      status: true,
      type: 'Clothing',
    },
  ];
}
