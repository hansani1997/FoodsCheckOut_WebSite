import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { OrderComponent } from './order/order.component';

import { FormComponent } from './form/form.component';
import { BussinessComponent } from './bussiness/bussiness.component';
import { BformComponent } from './bform/bform.component';
const routes: Routes = [
  {path:'',component:NavComponent},
  {path :"form",component:FormComponent},
  {path :"home",component:HomeComponent},
  {path :"bussiness",component:BussinessComponent},
  {path :"bform",component:BformComponent},
  {path :"order",component:OrderComponent}
  

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents=[FormComponent,HomeComponent,NavComponent,BussinessComponent,BformComponent,OrderComponent]