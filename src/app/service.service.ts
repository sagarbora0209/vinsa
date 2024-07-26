import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  userLoggedIn : boolean;
  user :any;
  details: any;

  constructor(private http:HttpClient) { 
    this.userLoggedIn=false;
    this.user=null;
  }

  setProduct(cart:any){
    console.log(cart);
    return this.http.post("project/insertCart",cart);
  }
  getProduct(id:any){
    console.log(id);
    return this.http.get("project/getById/"+id);
  }
  setUser(user:any){
    this.user=user;
  }
  getUser(){
    return this.user;
  }

  setUserLoggedIn(){
    this.userLoggedIn=true;
  }
  getUserLoggedIn(){
    return this.userLoggedIn; 
  }

  getUsers(){
    return this.http.get("project/usersAll")
  }

  getCars(){
    return this.http.get("project/carsAll")
  }
  getBikes(){
    return this.http.get("project/bikesAll")
  }

  registerUser(user:any){
    // console.log(user);
    return this.http.post("project/insertUser",user);
    
  }

  getCountriesDetails(){
    return this.http.get('https://restcountries.com/v2/all')
  }

  registerProductCar(product:any){
    return this.http.post("project/insertCar",product);
  }

  registerProductBike(product:any){
    return this.http.post("project/insertBike",product);
  }

  deleteCar(id:number){
    //console.log(id);
    return this.http.delete("project/deleteByCarId/"+id);
  }

  deleteBike(id:number){
    return this.http.delete("project/deleteByBikeId/"+id);
  }

  deleteCart(id:number){
    return this.http.delete("project/deleteByCartId/"+id);
  }

  updateCar(product : any){
    return this.http.put("project/updateCar",product);
  }

  updateBike(product : any){
    return this.http.put("project/updateBike",product);
  }
  
  getSearch(search:any){
    console.log(search);
    return this.http.get("project/findCarName/"+search);
  }
  getSearch2(search:any){
    console.log(search);
    return this.http.get("project/findBikeName/"+search);
  }
}
