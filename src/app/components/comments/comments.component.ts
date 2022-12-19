import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/myservice/api-service.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(private ActivatedRoute : ActivatedRoute,
   private fetchApi : ApiServiceService) { }

  comments = [{id:"", postId: "" , name : "", body: ""}]

  ngOnInit(): void {
    // this._fetchApi.comments().subscribe(commentsData => this.comments = commentsData)

    this.ActivatedRoute.paramMap.subscribe(param=>{
    let cId = +param.get(' id')

    this.fetchApi.fetchSingleComment(cId).subscribe(result=>{
      this.comments = result
    })

    })

  }

}
