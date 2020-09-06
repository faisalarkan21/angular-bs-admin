import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [
  { path: 'button', component: ButtonComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations:[
    ButtonComponent,
    LayoutComponent
  ]
})
export class LayoutRoutingModule {}
