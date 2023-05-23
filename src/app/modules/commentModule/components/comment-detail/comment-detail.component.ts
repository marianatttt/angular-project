import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IComment} from "../../../../interface";
import {CommentsService} from "../../../../service";

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})
export class CommentDetailComponent implements OnInit{
  comment:IComment
  constructor(private commentsService: CommentsService, private activatedRoute:ActivatedRoute) {
  }
  ngOnInit():void {
    this.activatedRoute.params.subscribe(({id})=>{
      this.commentsService.getById(id).subscribe(value => this.comment = value)
    })
  }
}
