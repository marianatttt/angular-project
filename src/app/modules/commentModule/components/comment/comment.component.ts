import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IComment} from "../../../../interface";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent{

  @Input()
  comment:IComment

  constructor(private router :Router, private activatedRoute :ActivatedRoute) {
  }

  getDetails():void {
    this.router.navigate([this.comment.id], {relativeTo:this.activatedRoute})

  }
}
