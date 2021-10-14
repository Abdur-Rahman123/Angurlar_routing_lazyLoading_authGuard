import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminDashbordComponent } from './components/admin-dashbord/admin-dashbord.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [{path: '', component:AdminDashbordComponent,
children: [{path:'home',component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent},
{path:'services',component:ServicesComponent},
{path:'',redirectTo:'/admin/home', pathMatch:'full'}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
