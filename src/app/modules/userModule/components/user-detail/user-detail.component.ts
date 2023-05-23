import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IUser} from "../../../../interface";


@Component({
  selector: 'app-user-details',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: IUser;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({userData})=> this.user = userData)

  }
}
