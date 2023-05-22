import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IUser} from "../interface";
import {urls} from "../constant";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {

  }

  getAll(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(urls.users.users)
  }
  getById(id: number): Observable<IUser> {
    return this.httpClient.get<IUser>(urls.users.byId(id))
  }

}
