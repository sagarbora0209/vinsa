import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

cars: any;

  constructor(private service : ServiceService) { }

  ngOnInit(): void {
  }

  submitUpdateForm(updateForm : any){
    
  }
}
