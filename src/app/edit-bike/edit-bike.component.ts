import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-edit-bike',
  templateUrl: './edit-bike.component.html',
  styleUrls: ['./edit-bike.component.css']
})
export class EditBikeComponent implements OnInit {
  bikes:any;
  newBike ={
    id:"",
    name:"",
    cc:"",
    price:"",
    description:"",
    rating:"",
    image:""
  }

  constructor(private service:ServiceService,private router : Router) { }

  ngOnInit(): void {
    this.bikes=this.service.getBikes().subscribe(data=>this.bikes=data);
  }

  deleteProduct(id:number){
  
    this.service.deleteBike(id).subscribe(data=>this.bikes=data);
    this.ngOnInit();
    //this.router.navigate(['edit'])
  }


  // viewDetails(id:number){
  //   this.service.viewById(id).subscribe(data=>this.bikes=data);
  // }

  edit(car:any){
    this.newBike=car
  }
  submitUpdateForm(){

    alert('Updated Successfully')
    this.service.updateBike(this.newBike).subscribe((data:any)=>this.bikes=data);
    // this.cars=this.service.getById(id).subscribe(data=>this.cars=data);
  }
}
