import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/myservice/api-service.service';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {


  comments = [{id:"", postId: "" , name : "", body: ""}]

  constructor(private fetchApi:ApiServiceService) { }

  ngOnInit(): void {
    this.fetchApi.comments().subscribe(myComments=>{
      this.comments = myComments
    })
  }

}
