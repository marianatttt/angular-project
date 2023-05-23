import { ResolveFn } from '@angular/router';
import {inject} from "@angular/core";

import { IComment } from '../../interface'
import {CommentsService} from "../comments.service";

export const commentDetailResolver: ResolveFn<IComment> = (route, state) => {
  const commentService = inject(CommentsService)
  const {id} = route.params;
  return commentService.getById(id)
};
