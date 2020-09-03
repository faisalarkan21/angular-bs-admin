import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoComponent } from './todo/todo.component'
import { AuthGuard } from './auth.guard';
import { ButtonComponent } from './button/button.component';

const routes: Routes = [
  { path: "", redirectTo: "/todo", pathMatch: "full" },
  { path: "todo", component: TodoComponent },
  { path: "button", component: ButtonComponent,canActivate: [AuthGuard] },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
