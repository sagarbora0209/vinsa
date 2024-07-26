import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  cars : any;
  bikes : any;
  search:any;

  constructor(private service :ServiceService) { }

  ngOnInit(): void {
    this.slides[0] = {
      src: './assets/img/angular.jpg',
    };
    this.slides[1] = {
      src: './assets/img/react.jpg',
    }
    this.slides[2] = {
      src: './assets/img/vue.jpg',
    }

    this.cars=this.service.getCars().subscribe(data=>this.cars=data);
    this.bikes=this.service.getBikes().subscribe(data=>this.bikes=data);
  }
  alertmsg(){
    alert('Please Login To Start Shopping');
  }
  searchSubmit(searchFormValue:any){
    console.log(searchFormValue.search)
    this.cars=this.service.getSearch(searchFormValue.search).subscribe((data:any)=>
    {
      this.cars=data
    });
    this.bikes=this.service.getSearch2(searchFormValue.search).subscribe((data:any)=>
    {this.bikes=data});
  }

}
