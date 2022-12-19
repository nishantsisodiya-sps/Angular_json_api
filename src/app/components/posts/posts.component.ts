import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/myservice/api-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private ActivatedRoute : ActivatedRoute,
    private fetchApi : ApiServiceService) {}

  posts = [{userId:'', id:'' , title : "" , body : "" }]

  ngOnInit(): void {


    this.ActivatedRoute.paramMap.subscribe((params)=>{
    let pid = +params.get(' id')
    
    this.fetchApi.fetchSinglePost(pid).subscribe(result=>{
      console.log(result)
      this.posts = result
    })
  })

  }

}
