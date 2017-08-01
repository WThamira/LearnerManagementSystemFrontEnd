import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule,MdDatepickerModule,MdNativeDateModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MdSidenavModule,MdSidenav,MdListModule } from '@angular/material';
import { SideBarComponent } from './Component/admin-panal/side-bar/side-bar.component';
import { SideBarDirectiveDirective } from './Component/admin-panal/side-bar/side-bar-directive.directive';
import { AdminPanalComponent } from './component/admin-panal/admin-panal.component';
import { DefaultPageComponent } from './component/admin-panal/default-page/default-page.component';
import { AddPersonComponent } from './component/admin-panal/registration/add-person/add-person.component';
// import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    SideBarDirectiveDirective,
    AdminPanalComponent,
    DefaultPageComponent,
    AddPersonComponent,
   
    
  ],
  imports: [
    MdDatepickerModule, MdNativeDateModule,
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MdSidenavModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
