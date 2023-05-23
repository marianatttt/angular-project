import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPost} from "../../../interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  @Input()
  post:IPost

  @Output()
  selectedPost = new EventEmitter<IPost>();
 constructor(private router : Router, private activatedRoute :ActivatedRoute) {
 }

 ngOnInit() {
 }

  setSelectedPost():void {
    this.selectedPost.emit(this.post)
  }

  getDetails():void {
      this.router.navigate([this.post.id], {relativeTo: this.activatedRoute, state:this.post})
  }
}
