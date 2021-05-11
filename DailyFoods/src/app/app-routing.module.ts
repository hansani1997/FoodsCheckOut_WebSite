import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

import { FormComponent } from './form/form.component';
const routes: Routes = [
  {path:'',component:NavComponent},
  {path :"form",component:FormComponent},
  {path :"home",component:HomeComponent},
  

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents=[FormComponent,HomeComponent,NavComponent]