// data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  // Method to fetch data from an API
  fetchData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}


//Http are sent by the client to the server 
/*
   GET - Read Data
   POST- Create new data
   PUT - update the data
   Delete - delete the data 
*/