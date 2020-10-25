import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { ShowproductsComponent } from './showproducts/showproducts.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'addproduct', component:AddproductComponent},
  {path:'showproducts', component:ShowproductsComponent},
  {path:'logout', component:LogoutComponent},
  {path: 'delete/:myid', component:DeleteComponent},
  {path: 'edit/:myid', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
