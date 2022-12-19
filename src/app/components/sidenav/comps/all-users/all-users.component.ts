import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/myservice/api-service.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  posts = [{userId:'', id:'' , title : "" , body : "" }]

  constructor(private fetchApi: ApiServiceService) { }

  ngOnInit(): void {

    this.fetchApi.posts().subscribe(myPost=>{
      this.posts = myPost
    })

  }

}
