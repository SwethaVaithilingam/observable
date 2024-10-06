import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent  implements OnInit{
updatePost() {
throw new Error('Method not implemented.');
}
  users:any[] = []
  selectedPost: any;
  
  constructor(private testservice:TestService){}
 
  ngOnInit(): void {
     this.getData()  

  }
  
  getData():void{
    this.testservice.getPosts().subscribe(
      (response)=>{
        this.users = response;
      },
      (error)=>{
        console.log('error',error)
      }
    )
  }
 
  updateData():void{
    if(this.selectedPost){
        this.testservice.updatePost(this.selectedPost.id,this.selectedPost).subscribe(
          (response)=>{
            console.log(response)
            const index = this.users.findIndex(post=>post.id === response.id)
            if(index !== -1){
              this.users[index] = response
            }
            this.selectedPost = null;
          },
          (error)=>{
            console.log('error',error)
          }
         
        )
    }
       
  }

  editPost(post:any):void{
    this.selectedPost = {...post}
  }

}  

//findIndex. If findIndex finds a matching post, it returns the index of that post; otherwise, it returns -1.