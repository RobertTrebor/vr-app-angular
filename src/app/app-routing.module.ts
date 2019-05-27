import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CemeteriesComponent} from './cemeteries/cemeteries.component';
import {CemeteryComponent} from './cemeteries/cemetery/cemetery.component';
import {GravesComponent} from './cemeteries/cemetery/graves/graves.component';

const routes: Routes = [
  {
    path: 'cemeteries',
    component: CemeteriesComponent,
  },
  {
    path: 'cemetery/:id',
    component: CemeteryComponent,
  },
  {
    path: 'cemeteries/:id/graves',
    component: GravesComponent
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
