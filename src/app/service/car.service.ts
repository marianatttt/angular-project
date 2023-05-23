import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICar} from "../interface";
import {urls} from "../constant";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient : HttpClient) {

  }
  getAll():Observable<ICar[]>{
    return this.httpClient.get<ICar[]>(urls.cars.cars)
  }

  create(car:ICar):Observable<ICar>{
    return this.httpClient.post<ICar>(urls.cars.cars, car)
  }

  updateById(id:number, car:ICar):Observable<ICar>{
    return this.httpClient.put<ICar>(urls.cars.byId(id), car)
  }
}
