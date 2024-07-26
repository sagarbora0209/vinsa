import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
users : any;
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
  this.users=this.service.getUsers().subscribe(user=>this.users=user);
  console.log(this.users);

  }
loginSubmit(loginForm: any){
  // console.log(2)
  if(loginForm.login== "ADMIN" && loginForm.password=="12345"){
    this.service.setUserLoggedIn();
    alert("welcome to login page");
    this.router.navigate(['admin-choice']);

  }
  else{
    this.users.forEach((user:any)=>{
      if(loginForm.login == user.email && loginForm.password == user.password ){
        this.service.setUserLoggedIn();
        this.service.setUser(user);
        alert('welcome to the users page');
        this.router.navigate(['user-choice']);
      }
    })
  }
}
}
