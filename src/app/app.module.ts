import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";


import { CarsComponent } from './component/cars/cars.component';
import { CarComponent } from './component/car/car.component';
import {AppComponent} from "./app.component";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
  AppComponent,
  CarsComponent,
  CarComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
