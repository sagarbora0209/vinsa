import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  product:any;

  constructor(private service : ServiceService,private router : Router) { }
  
  ngOnInit(): void {
    
  }

  submitProduct(addProductValue : any){
    alert('Registered Successfully')
    console.log(addProductValue)
    this.service.registerProductCar(addProductValue).subscribe((data:any)=>this.product=data);
    this.router.navigate(['edit-car'])
    // console.log(regForm)
  }
}
