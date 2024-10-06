import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { ExampleComponent } from "./example/example.component";
import { DataComponent } from './data/data.component';
import { ApiComponent } from "./api/api.component";
import { TestComponent } from "./test/test.component";
import { OwndataComponent } from "./owndata/owndata.component";
import { UpdateComponent } from "./update/update.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExampleComponent, DataComponent, ApiComponent, TestComponent, OwndataComponent, UpdateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  //using next eg 
  
  /* myobservable = new Observable((observer)=>{
    console.log('Observable starts')
    observer.next('1')
    observer.next('2')
    observer.next('3')
    observer.next('4')

   })*/

   /*setTimeout(()=>(observer.next('1')),1000)
   setTimeout(()=>(observer.next('2')),1000)
   setTimeout(()=>(observer.next('3')),1000)
   setTimeout(()=>(observer.next('4')),1000)
   setTimeout(()=>(observer.next('5')),1000)*/


   /*ngOnInit(): void {
     this.myobservable.subscribe((val)=>{
      console.log(val)

     })
   }*/

 myobservable = new Observable((observer)=>{
    console.log('observable start')
    setTimeout(()=>(observer.next('1')),1000)
   setTimeout(()=>(observer.next('2')),2000)
   setTimeout(()=>(observer.next('3')),3000)
   //setTimeout(()=>(observer.error(new Error('Something went wrong! please try again later'))),4000)
   setTimeout(()=>(observer.next('5')),5000)
   setTimeout(()=>(observer.complete()),7000)

  })

   ngOnInit(): void {
    this.myobservable.subscribe((val)=>{
     console.log(val)

    },(error)=>{
      alert(error.message)
    },()=>{
       alert('observable has completed')
    })
 }
}
