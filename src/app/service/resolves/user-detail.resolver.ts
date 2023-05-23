import {ResolveFn} from '@angular/router';
import {inject} from "@angular/core";

import { IUser } from '../../interface'
import {UserService} from "../user.service";

export const userDetailResolver: ResolveFn<IUser> = (route, state) => {
  const userService = inject(UserService);
  const {id} = route.params;
  return userService.getById(id)
};
