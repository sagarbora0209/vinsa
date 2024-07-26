import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
  users:any;

  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit(): void {
    this.users=this.service.getUsers().subscribe(data=>{this.users=data});
  }

  loginSubmit(loginFormValue : any){
    console.log(this.users)
    if (loginFormValue.login == 'LOGIN' && loginFormValue.password== 'PASSWORD'){
      this.service.setUserLoggedIn();
      alert('Welcome to ADMIN LOGIN PAGE');
      // this.toastr.success("Successfully logged in");
      this.router.navigate(['admin-choice'])
    }
    else {
      this.users.forEach((user:any) =>{
        if (loginFormValue.login == user.email && loginFormValue.password == user.password){
          this.service.setUserLoggedIn();
          this.service.setUser(user);
          alert('Welcome to the Users World...');
          this.router.navigate(['user-choice'])
        }
      })
    }
    
  }

}