import { Component, OnInit } from '@angular/core';
import {Product} from './product';

@Component({
  selector: 'app-product-naruto',
  templateUrl: './product-naruto.component.html',
  styleUrls: ['./product-naruto.component.css']
})
export class ProductNarutoComponent implements OnInit {
  title: string='Component to view';
  product: Product={
    name:"One piece",
    description:"Hải tặc",
    img:"http://fconepiece.com/wp-content/uploads/2016/07/One-Piece-748-800x533-800x533.jpg",
    price:20000,
    status:true,
    url:"https://steamcdn-a.akamaihd.net/steam/apps/755500/header.jpg?t=1562882662"
  };
  constructor() { }

  ngOnInit() {
  }

  onGo= event =>{
    this.title="Event Binding";
  }

  handleKeyUp= event =>{
    this.product.name=event.target.value;
  }
}
