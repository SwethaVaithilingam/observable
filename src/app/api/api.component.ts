import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent implements OnInit {
     posts:any[] = [];
     newPost={title:'',body:''}

     constructor(private apiService:ApiService){}
      
     ngOnInit(): void {
       this.fetchPosts();
     }

     fetchPosts(): void {
      this.apiService.getPosts().subscribe(
        (response) => {
          this.posts = response; // Assign response to posts array
        },
        (error) => {
          console.error('Error fetching posts', error); // Handle errors
        }
      );
    }

    addPost(): void {
      if (this.newPost.title && this.newPost.body) { // Basic validation
        this.apiService.createPost(this.newPost).subscribe(
          (response) => {
            console.log('Post created', response); // Handle successful creation
            this.newPost = { title: '', body: '' }; // Reset the form fields
            this.posts.push(response);
          
            this.newPost = { title: '', body: '' };
          },                                                                                                                  
          (error) => {
            console.error('Error creating post', error); // Handle errors
          }
        );
      } else {
        console.log('Please provide both title and body'); // Validation message
      }             
    }
     
}
