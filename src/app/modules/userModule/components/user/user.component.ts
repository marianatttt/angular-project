import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IUser} from "../../../../interface";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }
  @Input()
  user:IUser

  getDetails():void {
    this.router.navigate([this.user.id], {relativeTo:this.activatedRoute})
  }
}
