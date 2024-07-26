import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CarsListComponent } from './cars-list/cars-list.component';
import { BikesListComponent } from './bikes-list/bikes-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminChoiceComponent } from './admin-choice/admin-choice.component';
import { UserChoiceComponent } from './user-choice/user-choice.component';
import { EditCarComponent } from './edit-car/edit-car.component';
import { EditBikeComponent } from './edit-bike/edit-bike.component';
import { AddBikeComponent } from './add-bike/add-bike.component';
import { AddCarComponent } from './add-car/add-car.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { PaymentComponent } from './payment/payment.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { UpdateComponent } from './update/update.component';
import { Login1Component } from './login1/login1.component';
import { Login2Component } from './login2/login2.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    CarsListComponent,
    BikesListComponent,
    LoginComponent,
    RegisterComponent,
    AdminChoiceComponent,
    UserChoiceComponent,
    EditCarComponent,
    EditBikeComponent,
    AddBikeComponent,
    AddCarComponent,
    CartComponent,
    HomeComponent,
    MainComponent,
    HeaderComponent,
    PaymentComponent,
    ThankYouComponent,
    UpdateComponent,
    Login1Component,
    Login2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
