import { PosthookComponent } from './components/posthook/posthook.component';
import { PosthookService } from './services/posthook.service';
import { KpiMillicomComponent } from './components/kpi-millicom/kpi-millicom.component';
import { JobsHistoryComponent } from './components/jobs-history/jobs-history.component';
import { TrackingComponent } from './components/tracking/tracking.component';
import { JobRequestsComponent } from './components/job-requests/job-requests.component';
import { FefoComponent } from './components/fefo/fefo.component';
import { MovementsComponent } from './components/movements/movements.component';
import { StockreportGeneralComponent } from './components/stockreport-general/stockreport-general.component';
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
import { PaylessKpiComponent } from './components/payless-kpi/payless-kpi.component';




const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard] },
  { path: 'order', component: OrderComponent, canActivate: [AuthGuard] },
  { path: 'order/picking', component: PickingComponent, canActivate: [AuthGuard] },
  { path: 'order/regular', component: RegularComponent, canActivate: [AuthGuard] },
  { path: 'coordination', component: CoordinationComponent, canActivate: [AuthGuard] },
  { path: 'inventory', component: InventoryComponent, canActivate: [AuthGuard] },
  { path: 'InvGeneralReport', component: StockreportGeneralComponent, canActivate: [AuthGuard] },
  { path: 'payless-kpi', component: PaylessKpiComponent, canActivate: [AuthGuard] },
  { path: 'movements', component: MovementsComponent, canActivate: [AuthGuard] },
  { path: 'fefostock', component: FefoComponent, canActivate: [AuthGuard] },
  { path: 'job-requests', component: JobRequestsComponent, canActivate: [AuthGuard] },
  { path: 'job-history', component: JobsHistoryComponent, canActivate: [AuthGuard] },
  { path: 'tracking', component: TrackingComponent, canActivate: [AuthGuard] },
  { path: 'kpi-millicom', component: KpiMillicomComponent, canActivate: [AuthGuard] },
  { path: 'hook', component: PosthookComponent }
  /*  { path: 'coordination', component:  (() => {
    return sessionStorage.getItem('roll') === 'EXT_SUC' ? CoordinationComponent : LoginComponent;
  })(), canActivate: [AuthGuard]}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
