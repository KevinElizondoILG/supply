import { CoordinationComponent } from './components/coordination/coordination.component';
import { AuthGuard } from './auth.guard';
import { RegularComponent } from './components/order/regular/regular.component';
import { PickingComponent } from './components/order/picking/picking.component';
import { OrderComponent } from './components/order/order.component';
import { OrdersComponent } from './components/orders/orders.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './components/inventory/inventory.component';



const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard] },
  { path: 'order', component: OrderComponent, canActivate: [AuthGuard] },
  { path: 'order/picking', component: PickingComponent, canActivate: [AuthGuard] },
  { path: 'order/regular', component: RegularComponent, canActivate: [AuthGuard] },
  { path: 'coordination', component: CoordinationComponent, canActivate: [AuthGuard] },
  { path: 'inventory', component: InventoryComponent, canActivate: [AuthGuard] }
  /*  { path: 'coordination', component:  (() => {
    return sessionStorage.getItem('roll') === 'EXT_SUC' ? CoordinationComponent : LoginComponent;
  })(), canActivate: [AuthGuard]}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
