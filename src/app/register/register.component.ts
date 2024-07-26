import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:any;
  countriesList:any;
  constructor(private service :ServiceService,private router:Router) { }

  ngOnInit(): void {
    this.service.getCountriesDetails().subscribe((data:any)=>{
      this.countriesList=data;
      console.log(this.countriesList)
    })
  }
register(registerForm: any){

}

submitRegForm(regFormValue : any){
  alert('Registered Successfully')
 // console.log(regFormValue)
  this.service.registerUser(regFormValue).subscribe((data:any)=>this.user=data);
  this.router.navigate(['login'])
  // console.log(regForm)
}
}
