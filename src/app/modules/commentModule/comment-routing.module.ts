import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CommentPageComponent} from "./pages/comment-page/comment-page.component";
import {CommentDetailsPageComponent} from "./pages/comment-details-page/comment-details-page.component";
import {commentDetailResolver} from "../../service/resolves/comment-detail.resolver"

const routes: Routes = [
  {path:'', component:CommentPageComponent, children:[
      {path:":id", component:CommentDetailsPageComponent,  resolve:{commentData: commentDetailResolver}}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule { }
