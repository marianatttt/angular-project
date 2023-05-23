import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from "./app-routing.module";
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import {AppComponent} from "./app.component";
import { HeaderComponent } from './layout/header/header/header.component';





@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
