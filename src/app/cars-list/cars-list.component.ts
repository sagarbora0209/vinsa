import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
  cars : any;

  // car:any;
  // id:any;
  user:any;
  cart ={
    userId:this.service.getUser().id,
    name:"",
    cc:"",
    price:"",
    description:"",
    rating:"",
    image:""
  }

  constructor(private service:ServiceService,private http : HttpClient,private router:Router) { 
    
  }

  ngOnInit(): void {

    this.cars=this.service.getCars().subscribe(data=>this.cars=data);
    // this.user=this.service.getUser();

  }

  goToCart(car:any){
  //  console.log(car)
   this.cart.name=car.name;
   this.cart.cc=car.cc;
   this.cart.price=car.price;
   this.cart.description=car.description;
   this.cart.rating=car.rating;
   this.cart.image=car.image;
   
  //  this.cart.user_id=this.service.getUser().user_id;
  // console.log(this.cart);
  if(confirm("Are you sure you want to add the Product?"))
  this.service.setProduct(this.cart).subscribe((data:any)=>{
    // console.log(data);
    this.cart=data;
  });
  // this.router.navigate(['cart']);

  }

}
