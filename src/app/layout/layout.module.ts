import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { AgencyComponent } from '../pages/agency/agency.component';
import { BusesComponent } from '../pages/buses/buses.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { TripsComponent } from '../pages/trips/trips.component';
import { HomeComponent } from '../pages/home/home.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    LayoutComponent,
    AgencyComponent,
    BusesComponent,
    ProfileComponent,
    TripsComponent,
    HomeComponent,
  ],
  imports: [
    RouterModule,
    LayoutRoutingModule
  ],
})
export class LayoutModule { }
