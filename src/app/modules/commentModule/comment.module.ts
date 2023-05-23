import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import { CommentPageComponent } from './pages/comment-page/comment-page.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentDetailComponent } from './components/comment-detail/comment-detail.component';
import { CommentDetailsPageComponent } from './pages/comment-details-page/comment-details-page.component';


@NgModule({
  declarations: [
    CommentPageComponent,
    CommentComponent,
    CommentsComponent,
    CommentDetailComponent,
    CommentDetailsPageComponent
  ],
  exports: [
    CommentDetailComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule
  ]
})
export class CommentModule {
  constructor() {
    console.log("Comment")
  }
}
