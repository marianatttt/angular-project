import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

import {IComment} from "../interface";
import {urls} from "../constant";

@Injectable({
  providedIn:'root'
})

export class CommentsService{
  constructor(private httpClient: HttpClient) {
  }
  getAll():Observable<IComment[]>{
    return this.httpClient.get<IComment[]>(urls.comments.comments)
  }

  getById(id:number):Observable<IComment>{
    return this.httpClient.get<IComment>(urls.comments.byId(id))
  }
}
