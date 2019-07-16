import { Component, OnInit } from '@angular/core';
import {Product} from  './Product';

@Component({
  selector: 'app-product-onepiece',
  templateUrl: './product-onepiece.component.html',
  styleUrls: ['./product-onepiece.component.css']
})
export class ProductOnepieceComponent implements OnInit {
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

}