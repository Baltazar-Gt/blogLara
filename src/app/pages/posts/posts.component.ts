import { Component, OnInit, inject } from '@angular/core';
import { OnePostComponent } from '../../components/one-post/one-post.component';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit{
  posts:any=[];
  currentPage = 1;
  totalPage = 1;
  assets:string= environment.assets;
  http=inject(HttpClient);
  postService=inject(PostService);

  ngOnInit(): void {
    this.getPosts(this.currentPage);
    
  }

  getPosts(page: number) {
    this.postService.getPosts(page).subscribe((data: any) => {
      this.posts = data.data;
      this.currentPage = data.current_page;
      this.totalPage = data.last_page;
    });
  }
/*   todosPosts(){
    this.postService.todosPosts().subscribe((data:any)=>{
      console.log(data);
      this.posts=data.data;
    });
  } */
}
