import { Component, OnInit } from '@angular/core';
import { OwndataService } from '../owndata.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-owndata',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './owndata.component.html',
  styleUrl: './owndata.component.css'
})
export class OwndataComponent implements OnInit{
  posts:any[] = []
  constructor(private owndataService:OwndataService){}

  ngOnInit(): void {
    this.fetchPosts()  
  }
  fetchPosts():void{
    this.owndataService.getPosts().subscribe(
      (response)=>{
        this.posts = response
      },
      (error)=>{
        console.log('error',error)
      }
    )
  }

}
