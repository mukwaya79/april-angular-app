import { AuthGuard } from './guard/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
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


const routes: Routes = [{path: '', redirectTo: '/login', pathMatch: 'full'},
{path: '', component: AppComponent},
{path: 'home', component: HomeComponent},
{path: 'addsupplier', component: SupplierComponent},
{path: 'viewsupplier', component: ViewsupplierComponent},
{path: 'category', component: CategoryComponent},
{path: 'viewcategory', component: ViewcategoryComponent},
{path: 'addict', component: IctComponent},
{path: 'viewict', component: ViewictComponent},
{path: 'viewasset', component: ViewassetComponent},
{path: 'addasset', component: AssetComponent},
{path: 'stationary', component: StationaryComponent},
{path: 'addfood', component: FoodComponent},
{path: 'viewfood', component: ViewfoodComponent},
{path: 'addgift', component: PromotionalComponent},
{path: 'viewgift', component: ViewgiftComponent},
{path: 'viewstationary', component: ViewstationaryComponent},
{path: 'housekeeping', component: HousekeepingComponent},
{path: 'viewhouse', component: ViewhouseComponent},
{path: 'addhealth', component: HealthComponent},
{path: 'viewhealth', component: ViewhealthComponent},
{path: 'login', component: LoginComponent},
{path:'dashboard', component: DashboardComponent,
 canActivate:[AuthGuard]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
