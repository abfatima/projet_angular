import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit  {
  afficherMsg: boolean = true;
  msg1 : any = [];
  posts: any = [];

  constructor(private servicePost: PostService) {
    console.log("Constructeur");
  }

  ngOnInit(): void {
    //console.log("ngOnInit");
    this.msg1 = this.servicePost.getPosts();//prepare les data

    this.servicePost.getPosts().subscribe(
      response => this.posts = response,
      error => console.log(error+"Probleme dans l'api"),
    );
  }

  greetpost() {
    //alert("Bonjour mes chers étudiants!");
   // this.afficherMsg = !this.afficherMsg;
   let msg1 : any = this.servicePost.getPosts();
   alert(msg1);
  }

 
}


