
import { AuthGuard } from './guard/auth.guard';
import { AuthService } from './services/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SupplierComponent } from './components/supplier/supplier/supplier.component';
import { ViewsupplierComponent } from './component/viewsupplier/viewsupplier.component';
import { CategoryComponent } from './components/category/category.component';
import { ViewcategoryComponent } from './components/viewcategory/viewcategory.component';
import { FoodComponent } from './component/food/food.component';
import { HealthComponent } from './component/health/health.component';
import { HousekeepingComponent } from './componet/housekeeping/housekeeping.component';
import { IctComponent } from './component/ict/ict.component';
import { PromotionalComponent } from './component/promotional/promotional.component';
import { StationaryComponent } from './component/stationary/stationary.component';
import { AssetComponent } from './component/asset/asset.component';
import { ViewassetComponent } from './components/viewasset/viewasset.component';
import { ViewfoodComponent } from './components/viewfood/viewfood.component';
import { ViewhealthComponent } from './components/viewhealth/viewhealth.component';
import { ViewhouseComponent } from './components/viewhouse/viewhouse.component';
import { ViewictComponent } from './components/viewict/viewict.component';
import { ViewgiftComponent } from './components/viewgift/viewgift.component';
import { ViewstationaryComponent } from './components/viewstationary/viewstationary.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    SupplierComponent,
    ViewsupplierComponent,
    CategoryComponent,
    ViewcategoryComponent,
    FoodComponent,
    HealthComponent,
    HousekeepingComponent,
    IctComponent,
    PromotionalComponent,
    StationaryComponent,
    AssetComponent,
    ViewassetComponent,
    ViewfoodComponent,
    ViewhealthComponent,
    ViewhouseComponent,
    ViewictComponent,
    ViewgiftComponent,
    ViewstationaryComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
