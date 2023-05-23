import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PostPageComponent} from "./pages/post-page/post-page.component";
import {PostDetailsPageComponent} from "./pages/post-details-page/post-details-page.component";
import {postDetailResolver} from "../../service/resolves/post-detail.resolver"

const routes: Routes = [
  {path: '', component: PostPageComponent, children:[
      {path: ':id', component: PostDetailsPageComponent, resolve:{postData: postDetailResolver}}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
