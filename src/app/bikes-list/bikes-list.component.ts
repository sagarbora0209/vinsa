import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-bikes-list',
  templateUrl: './bikes-list.component.html',
  styleUrls: ['./bikes-list.component.css']
})
export class BikesListComponent implements OnInit {

  bikes:any;
  user:any;
  cart ={
    // userId:this.service.getUser().id,
    name:"",
    cc:"",
    price:"",
    description:"",
    rating:"",
    image:""
  }

  constructor(private service:ServiceService,private http : HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.bikes=this.service.getBikes().subscribe(data=>this.bikes=data);

  }

  goToCart(bike:any){
    // console.log(bike)
    
      
    this.cart.name=bike.name;
    this.cart.cc=bike.cc;
    this.cart.price=bike.price;
    this.cart.description=bike.description;
    this.cart.rating=bike.rating;
    this.cart.image=bike.image;
    
   //  this.cart.user_id=this.service.getUser().user_id;
   // console.log(this.cart);
   if(confirm("Are you sure you want to add the Product?"))
   this.service.setProduct(this.cart).subscribe((data:any)=>{
     // console.log(data);
   });
   
   // this.router.navigate(['cart']);
 
   }

}
