import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

users : any;
  constructor(private serivce:ServiceService) { }

  ngOnInit(): void {
    this.users=this.serivce.getUsers().subscribe(data=>this.users=data);
  }

}
