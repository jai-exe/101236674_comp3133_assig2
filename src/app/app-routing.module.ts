import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CreatelistingComponent } from './createlisting/createlisting.component';
import { CreatebookingComponent } from './createbooking/createbooking.component';
import { BookingsComponent } from './bookings/bookings.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'listings', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'createlisting', component: CreatelistingComponent },
  { path: 'createbooking/:id', component: CreatebookingComponent },
  { path: 'bookings', component: BookingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
