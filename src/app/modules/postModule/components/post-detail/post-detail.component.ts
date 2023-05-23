import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IPost} from "../../../../interface";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit{
post:IPost
  constructor( private activatedRoute:ActivatedRoute) {
  }
  ngOnInit():void {
    this.activatedRoute.data.subscribe(({postData})=> this.post = postData)
  }

}
