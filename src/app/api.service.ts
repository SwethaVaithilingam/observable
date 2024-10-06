// src/app/api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { Observable } from 'rxjs'; // Import Observable

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Example API URL

  constructor(private http: HttpClient) { } // Inject HttpClient

  // Method to get data from API
  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl); // Perform GET request
  }

  // Method to post data to API
  createPost(post: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, post); // Perform POST request
  }
}
