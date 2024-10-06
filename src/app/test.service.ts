import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private apiurl = 'https://jsonplaceholder.typicode.com/users'

  constructor( private http:HttpClient) {}

  getPosts():Observable<any[]>{
     return this.http.get<any[]>(this.apiurl)
  }

  createPosts(post:any):Observable<any>{
    return this.http.post<any>(this.apiurl,post)
  }

  //new method for updating a post
  updatePost(postId:number,updatedPost:any):Observable<any>{
    return this.http.put<any>(`${this.apiurl}/${postId}`,updatedPost)
  }

   // Method to delete a post by ID
   deletePost(postId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiurl}/${postId}`);
  }

}
