import {LoginComponent} from "../login/login.component";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {RegistrationComponent} from "../registration/registration.component";
import {HomeComponent} from "../home/home.component";
import {SignUpForRideComponent} from "../sign-up-for-ride/sign-up-for-ride.component";
import {DoneRideComponent} from "../done-ride/done-ride.component";
import {RideComponent} from "../ride/ride.component";
import {RidePlanComponent} from "../ride-plan/ride-plan.component";
import {OldRideComponent} from "../old-ride/old-ride.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'home', component: HomeComponent},
  { path: 'sign-up-for-ride', component: SignUpForRideComponent},
  { path: 'done-ride', component: DoneRideComponent},
  { path: 'ride', component: RideComponent},
  { path: 'ride-plan', component: RidePlanComponent},
  { path: 'old-ride', component: OldRideComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
