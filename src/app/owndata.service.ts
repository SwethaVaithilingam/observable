import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';


interface data{
   id:number;
   content:string;
}
@Injectable({
  providedIn: 'root'
})
export class OwndataService {
    private datas: data[] = [
        {id:1,content:'HTML'},
        {id:2,content:'Css'},
        {id:3,content:'Js'},
        {id:4,content:'Angular'},
        {id:5,content:'React'}
    ]

  constructor(private http:HttpClient) { }

  getPosts(): Observable<data[]> {
     return of(this.datas)
  }
}



