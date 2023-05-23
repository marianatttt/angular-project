import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

import {IPost} from "../interface";
import {urls} from "../constant";

@Injectable({
  providedIn:'root'
})
export class PostsService {
  constructor(private httpClient : HttpClient) {
  }

  getAll():Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(urls.posts.posts)
  }

  getById(id:number):Observable<IPost>{
    return this.httpClient.get<IPost>(urls.posts.byId(id))
  }
}
