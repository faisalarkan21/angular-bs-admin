import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "../layout/layout.component";
import { AgencyComponent } from "../pages/agency/agency.component";
import { BusesComponent } from "../pages/buses/buses.component";
import { HomeComponent } from "../pages/home/home.component";
import { ProfileComponent } from "../pages/profile/profile.component";
import { TripsComponent } from "../pages/trips/trips.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "agency", component: AgencyComponent },
  { path: "buses", component: BusesComponent },
  { path: "profile", component: ProfileComponent },
  { path: "trips", component: TripsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
