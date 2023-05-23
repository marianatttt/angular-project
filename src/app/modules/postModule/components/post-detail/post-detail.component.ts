import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {PostsService} from "../../../../service";
import {IPost} from "../../../../interface";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit{
post:IPost
  constructor( private activatedRoute:ActivatedRoute, private postsService :PostsService) {
  }
  ngOnInit():void {
  this.activatedRoute.params.subscribe(({id})=>{
    this.postsService.getById(id).subscribe(value => this.post = value)
    })
  }

}
