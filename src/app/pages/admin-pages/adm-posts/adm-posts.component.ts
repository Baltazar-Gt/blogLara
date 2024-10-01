import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { PostService } from '../../../services/post.service';

@Component({
  selector: 'app-adm-posts',
  standalone: true,
  imports: [],
  templateUrl: './adm-posts.component.html',
  styleUrl: './adm-posts.component.scss'
})
export class AdmPostsComponent {
  http = inject(HttpClient);
  postService = inject(PostService);
  posts:any;
  paginationInfo: any = {};
  paginaActual: number = 1; // Agrega esta línea

  constructor() { }

  ngOnInit(): void {
    this.cargarPosts(this.paginaActual);
  }

  cargarPosts(pagina: number){
    this.postService.readAll(pagina).subscribe((res:any)=>{
      this.posts = res.data;
      this.paginationInfo = res;
    });
  }

  cargarSiguientePagina() {
    this.paginaActual++;
    this.cargarPosts(this.paginaActual);
  }

  cargarPaginaAnterior() {
    if (this.paginaActual > 1) {
      this.paginaActual--;
      this.cargarPosts(this.paginaActual);
    }
  }

  eliminarPost(id:string){
    this.postService.delete(id).subscribe((res:any)=>{
      this.cargarPosts(this.paginaActual);
    });
  }

}
