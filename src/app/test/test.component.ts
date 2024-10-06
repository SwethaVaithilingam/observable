import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit {

  userdetails:any[] = []
  newPosts = {id:'',name:''}
  selectedPost: any;

  constructor(private testservice :TestService){}

  ngOnInit(): void {
   this.fetchPosts()
  }

  fetchPosts():void{
    this.testservice.getPosts().subscribe(
      (response)=>{
        this.userdetails = response
      },
      (error)=>{
        console.error('error',error)

      }                           
    )

  }

  addPost():void{
    this.testservice.createPosts(this.newPosts).subscribe(
      (response)=>{
        console.log('post created',response)
        this.newPosts = {id:'',name:''}
        this.userdetails.push(response)
      },
      (error)=>{
        console.log("error",error)
      }
    )
  }

   
  deletePost(postId: number): void {
    this.testservice.deletePost(postId).subscribe(
      () => {
        console.log('Post deleted'); // Handle successful deletion
        
        // Remove the deleted post from the list
        this.userdetails = this.userdetails.filter(post => post.id !== postId);
      },
      (error) => {
        console.error('Error deleting post', error); // Handle errors
      }
    );
  }
 
}

/*
   fetchPosts calls the getPosts() method from the ApiService.
   subscribe is used to handle the asynchronous response from the API:
    On success (response), it assigns the data to posts.
   On error (error), it logs an error message.


   addPost calls the createPost() method from the ApiService, passing newPost as the data to be sent.
subscribe handles the API response:
On success (response), it logs a message and calls fetchPosts() to refresh the list of posts.
On error (error), it logs an error message.


.filter():

The filter() method is an array method that creates a new array with all elements that pass the test implemented by the provided function. It does not modify the original array but instead returns a new array.

post => post.id !== postId:

This is an arrow function used as the callback for the filter() method. It takes each element of the array (post) and evaluates the condition post.id !== postId.
post.id: This accesses the id property of the current post object in the array.
postId: This is the ID of the post that you want to remove from the array.
post.id !== postId: This condition checks if the id of the current post is not equal to postId. If the condition is true, the post is included in the new array; otherwise, it is excluded.
*/
