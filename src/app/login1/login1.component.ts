import { Component, OnInit } from '@angular/core';

declare var name:any;
@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new name();
  }
  title = 'login1-js';

}
