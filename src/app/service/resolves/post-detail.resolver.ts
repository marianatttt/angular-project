import { ResolveFn } from '@angular/router';
import {inject} from "@angular/core";

import { IPost } from '../../interface'
import {PostsService} from "../posts.service";

export const postDetailResolver: ResolveFn<IPost> = (route, state) => {
 const postService = inject(PostsService)
  const {id} = route.params;
  return postService.getById(id)
};
