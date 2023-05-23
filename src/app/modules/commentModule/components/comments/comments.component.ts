import {Component, OnInit} from '@angular/core';

import {IComment} from "../../../../interface";
import {CommentsService} from "../../../../service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent  implements  OnInit{
  comments:IComment[]
constructor(private commentsService: CommentsService) {
}
ngOnInit() {
    this.commentsService.getAll().subscribe(value => this.comments = value)
}
}
