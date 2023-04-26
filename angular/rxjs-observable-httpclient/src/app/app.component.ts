import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs-observable-httpclient';
  posts = new Array<Post>();
  constructor(private postService: PostService) {}
  ngOnInit() {
    this.postService.getPosts().subscribe(response => {
      this.posts = response.map(item => {
        return new Post(
          item.userId, 
          item.id, 
          item.title, 
          item.body
        )
      })
    })
  }
}
