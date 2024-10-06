// data.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-data',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit{
  users: any[] = [];

  constructor(private dataservice:DataService){}

  

  ngOnInit(): void {
    this.dataservice.fetchData().subscribe(
       next =>{
        this.users = next
       },
       error =>{
        console.error('error',error) 
       }
    )
  }
 



}
