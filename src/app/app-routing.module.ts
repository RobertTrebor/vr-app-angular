import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CemeteriesComponent} from "./cemeteries/cemeteries.component";

const routes: Routes = [
  {
    path: 'cemeteries',
    component: CemeteriesComponent,
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
