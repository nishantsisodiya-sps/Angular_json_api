import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/myservice/api-service.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private _fetchapi: ApiServiceService) { }

  users = [{name : "", id: "", email:""}]

  ngOnInit(): void {
    this._fetchapi.users().subscribe(userData => this.users = userData)
  }
}
