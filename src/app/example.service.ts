import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  getData(): Observable<string> {
    const data = 'Hello, Observable!';
    return of(data); // `of` is an RxJS operator that creates an Observable from a value
  }
  constructor() { }
}
