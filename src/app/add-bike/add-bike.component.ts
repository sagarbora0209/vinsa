import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-add-bike',
  templateUrl: './add-bike.component.html',
  styleUrls: ['./add-bike.component.css']
})
export class AddBikeComponent implements OnInit {

  product:any;

  constructor(private service : ServiceService,private router : Router) { }

  ngOnInit(): void {
  }

  submitProduct(addProductValue : any){
    alert('Registered Successfully')
    console.log(addProductValue)
    this.service.registerProductBike(addProductValue).subscribe((data:any)=>this.product=data);
    this.router.navigate(['edit-b'])
    // console.log(regForm)
  }
}
