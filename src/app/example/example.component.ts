import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../example.service';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent implements OnInit{
  data!: string;

  constructor(private exampleservice:ExampleService){}

  ngOnInit(): void {
      // Subscribe to the Observable
      this.exampleservice.getData().subscribe(
        next =>{
          // Handle the emitted value
          this.data=next;  
        },
        error=>{
          //handle the error
          console.log('error',error)
        },()=>{
          //handle complete
          console.log('observable complete')
        }

      )
  }



}

/*
    
An API (Application Programming Interface) is a set of rules and protocols for building and interacting with software applications. It allows different software systems to communicate with each other. In the context of web development, APIs often refer to HTTP-based services that provide data or perform operations over the web.
*/
