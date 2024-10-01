import { HttpClient } from '@angular/common/http';
import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-one-post',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './one-post.component.html',
  styleUrl: './one-post.component.scss'
})
export class OnePostComponent {
  http=inject(HttpClient);
  postService = inject(PostService);

  @Input() post:any = {
    nombre: "post Interesante",
    categoria: "Categoria Interesante",
    resumen: "Resumen Interesante",
    autor: "Autor1"
  }
}
