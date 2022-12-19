import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) {}

  postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  users():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  posts():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  comments():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/comments')
  }

  fetchSinglePost(id: number){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users/'+id+'/posts')
  }

  fetchSingleComment(postId: number){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts/'+postId+'/comments')
  }

}