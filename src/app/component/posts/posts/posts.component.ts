import {Component, OnInit} from '@angular/core';

import {IPost} from "../../../interface";
import {PostsService} from "../../../service/posts.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements  OnInit{
  posts:IPost[];
  post: IPost

  constructor(private postsService: PostsService) {
  }
  ngOnInit():void {
    this.postsService.getAll().subscribe(value => this.posts = value)
  }


  getPost(post: IPost) {
    this.post = post
  }
}
