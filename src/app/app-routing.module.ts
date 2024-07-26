import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBikeComponent } from './add-bike/add-bike.component';
import { AddCarComponent } from './add-car/add-car.component';
import { AdminChoiceComponent } from './admin-choice/admin-choice.component';
import { AuthGuard } from './auth.guard';
import { BikesListComponent } from './bikes-list/bikes-list.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CartComponent } from './cart/cart.component';
import { EditBikeComponent } from './edit-bike/edit-bike.component';
import { EditCarComponent } from './edit-car/edit-car.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';
import { UserChoiceComponent } from './user-choice/user-choice.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [{path:"",component:MainComponent},
{path:'home',component:HomeComponent},
{path:"login",canActivate:[AuthGuard],component:LoginComponent},
{path:"register",component:RegisterComponent},
{path:"bikes-list",canActivate:[AuthGuard],component:BikesListComponent},
{path:"cars-list",canActivate:[AuthGuard],component:CarsListComponent},
{path:"users-list",canActivate:[AuthGuard],component:UsersListComponent},
{path:"user-choice",canActivate:[AuthGuard],component:UserChoiceComponent},
{path:"admin-choice",canActivate:[AuthGuard],component:AdminChoiceComponent},
{path:"edit-car",canActivate:[AuthGuard],component:EditCarComponent},
{path:"edit-bike",canActivate:[AuthGuard],component:EditBikeComponent},
{path:"add-car",canActivate:[AuthGuard],component:AddCarComponent},
{path:"add-bike",canActivate:[AuthGuard],component:AddBikeComponent},
{path:"cart",canActivate:[AuthGuard],component:CartComponent},
{path:"main",canActivate:[AuthGuard],component:MainComponent},
{path:"payment",canActivate:[AuthGuard],component:PaymentComponent},



// {path:"cart",component:Cart},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
