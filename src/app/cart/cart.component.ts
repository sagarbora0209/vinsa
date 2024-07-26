import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carts:any;
  total:any;
   temp:any;
  constructor(private service:ServiceService,private router:Router) { }

  ngOnInit(): void {
    // console.log(this.service.getUser().id);
    this.service.getProduct(this.service.getUser().id).subscribe((data:any)=>{
      this.carts=data;
      // console.log(this.carts);
      this.temp=0;
    for (let cart of this.carts)
    {
      console.log(cart.price)
    this.temp += cart.price;
    }
    this.total = this.temp;
   
    })
   
  }

  deleteProduct(id:number){
    if(confirm("Are you sure you want to delete?"))
      this.service.deleteCart(id).subscribe(data=>this.carts=data);
    this.router.navigate(['cart'])
    this.ngOnInit();
  }
}
