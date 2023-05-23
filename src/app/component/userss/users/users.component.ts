import {Component, OnInit} from '@angular/core';

import {UserService} from "../../../service";
import {IUser} from "../../../interface";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users:IUser[];
  user:IUser
  constructor(private userService: UserService ) {
  }

  ngOnInit():void {
    this.userService.getAll().subscribe(value => this.users = value)
  }

  getUser(user: IUser) {
    this.user = user
  }
}
