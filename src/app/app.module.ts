import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CemeteriesComponent } from './cemeteries/cemeteries.component';
import { CemeteryComponent } from './cemeteries/cemetery/cemetery.component';
import { GraveComponent } from './cemeteries/cemetery/graves/grave/grave.component';
import { GravesComponent } from './cemeteries/cemetery/graves/graves.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    CemeteriesComponent,
    CemeteryComponent,
    GraveComponent,
    GravesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
