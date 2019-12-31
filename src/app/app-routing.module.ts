import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuildingRoutingModule } from './building/building-routing.module';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/building/building-routing.module').then(m => m.BuildingRoutingModule),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), BuildingRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
