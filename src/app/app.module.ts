import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from '../registration/registration.component';
import {
  MatButtonModule, MatCheckboxModule,
  MatDialogModule,
  MatDialogRef,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule, MatOption, MatOptionModule, MatSelectModule
} from '@angular/material';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { RideComponent } from '../ride/ride.component';
import { DoneRideComponent } from '../done-ride/done-ride.component';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { MenuComponent } from '../menu/menu.component';
import { HeaderComponent } from '../header/header.component';
import { UserRideComponent } from '../user-ride/user-ride.component';
import { RidePlanComponent } from '../ride-plan/ride-plan.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import { ErrorStateMatcherComponent } from '../error-state-matcher/error-state-matcher.component';
import { ThemeComponent } from '../theme/theme.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import { SignUpForRideComponent } from '../sign-up-for-ride/sign-up-for-ride.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SignUpDialogComponent } from '../sign-up-dialog/sign-up-dialog.component';
import {MatCheckbox} from "@angular/material/typings/esm5/checkbox";
import { OldRideComponent } from '../old-ride/old-ride.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    RideComponent,
    DoneRideComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    HeaderComponent,
    UserRideComponent,
    RidePlanComponent,
    NotFoundComponent,
    ErrorStateMatcherComponent,
    ThemeComponent,
    SignUpForRideComponent,
    SignUpDialogComponent,
    OldRideComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    BrowserModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatTableModule,
    MatMenuModule,
    AppRoutingModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatSlideToggleModule,
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
  ],
  entryComponents: [SignUpDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
