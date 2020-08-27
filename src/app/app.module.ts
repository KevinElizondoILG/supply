// AuthGuard
import { AuthGuard } from './auth.guard';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

// Services
import { LoginService } from './services/login.service';
import { ApistockService } from './services/apistock.service';
import { EncrDecrServiceService } from './services/encr-decr-service.service';
import { ExcelService } from './services/excel.service';

// Compoments
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { PickingComponent } from './components/order/picking/picking.component';
import { RegularComponent } from './components/order/regular/regular.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { OrderComponent } from './components/order/order.component';
import { OrdersComponent } from './components/orders/orders.component';
import { GendersPipe } from './pipes/genders.pipe';
import { SumgendersPipe } from './pipes/sumgenders.pipe';
import { TotalstockPipe } from './pipes/totalstock.pipe';
import { CoordinationComponent } from './components/coordination/coordination.component';
import { OrderDateFilterPipe } from './pipes/order-date-filter.pipe';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderstatusPipe } from './pipes/orderstatus.pipe';
import { InventoryComponent } from './components/inventory/inventory.component';
import { SucursalPipe } from './pipes/sucursal.pipe';
import { StockfiltersPipe } from './pipes/stockfilters.pipe';
import { DuaPipe } from './pipes/dua.pipe';
import { PaylessKpiComponent } from './components/payless-kpi/payless-kpi.component';
import { StockreportGeneralComponent } from './components/stockreport-general/stockreport-general.component';
import { MovementsComponent } from './components/movements/movements.component';
import { FefoComponent } from './components/fefo/fefo.component';
import { FefofilterPipe } from './pipes/fefofilter.pipe';
import { JobRequestsComponent } from './components/job-requests/job-requests.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrderComponent,
    OrdersComponent,
    HeaderComponent,
    PickingComponent,
    RegularComponent,
    GendersPipe,
    SumgendersPipe,
    TotalstockPipe,
    CoordinationComponent,
    OrderDateFilterPipe,
    OrderstatusPipe,
    InventoryComponent,
    SucursalPipe,
    StockfiltersPipe,
    DuaPipe,
    PaylessKpiComponent,
    StockreportGeneralComponent,
    MovementsComponent,
    FefoComponent,
    FefofilterPipe,
    JobRequestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgbPaginationModule
  ],
  providers: [
    AuthGuard,
    LoginService,
    EncrDecrServiceService,
    ApistockService,
    ExcelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
