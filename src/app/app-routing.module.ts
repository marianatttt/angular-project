import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {MainLayoutComponent} from "./layout/main-layout/main-layout.component";


const routes: Routes = [
  {path:'', component:MainLayoutComponent, children:[
      {path:'', redirectTo:'users', pathMatch:'full'},
      {path:'users', loadChildren:()=> import('./modules/userModule/user.module').then(n=>n.UserModule)},
      {path:'posts', loadChildren:()=> import('./modules/postModule/post.module').then(n=>n.PostModule)},
      {path: 'comments', loadChildren:()=> import('./modules/commentModule/comment.module').then(n=>n.CommentModule)}
    ]}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
