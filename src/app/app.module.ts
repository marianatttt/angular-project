import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from "./component/app.component";
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { UserPageComponent } from './page/user-page/user-page.component';
import { PostPageComponent } from './page/post-page/post-page.component';
import {RouterModule, Routes} from "@angular/router";
import { HeaderComponent } from './component/header/header.component';
import { UserComponent } from './component/userss/user/user.component';
import { UserDetailsComponent } from './component/userss/user-details/user-details.component';
import {UsersComponent} from "./component/userss/users/users.component";
import { UserDetailPageComponent } from './page/user-detail-page/user-detail-page.component';
import { PostsComponent } from './component/posts/posts/posts.component';
import { PostComponent } from './component/posts/post/post.component';
import { PostDetailPageComponent } from './page/post-detail-page/post-detail-page.component';
import { PostDetailsComponent } from './component/posts/post-details/post-details.component';

const routes:Routes = [
  {path:'', component:MainLayoutComponent, children:[
      {path:'', redirectTo:'users', pathMatch:'full'},
      {path:'users', component:UserPageComponent, children:[
          {path:':id', component:UserDetailPageComponent}
        ]},
      {path:'posts', component:PostPageComponent, children:[
          {path: ':id', component: PostDetailPageComponent}
        ]}
    ]}
]

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    UserPageComponent,
    PostPageComponent,
    HeaderComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    UserDetailPageComponent,
    PostsComponent,
    PostComponent,
    PostDetailPageComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
