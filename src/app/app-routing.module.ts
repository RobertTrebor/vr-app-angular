import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CemeteriesComponent} from './cemeteries/cemeteries.component';
import {CemeteryComponent} from './cemeteries/cemetery/cemetery.component';

const routes: Routes = [
  {
    path: 'cemeteries',
    component: CemeteriesComponent,
  },
  {
    path: 'cemetery',
    component: CemeteryComponent,
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
