import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PostService } from '../../services/post.service';
import { environment } from '../../../environments/environment';
import { CategoriasService } from '../../services/categorias.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {

  cat: any;
  posts: any = [];
  assets:string= environment.assets;
  categoria:any = [];
  categoriaService = inject(CategoriasService);
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) { }
  ngOnInit() {
    // Obtenemos el valor del parámetro 'id' de la URL
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.verPost(id);
    } else {
      console.error('El parámetro "id" es nulo.');
    }

  }

  verCategoria(id: string) {
    this.categoriaService.getCategoria(id).subscribe((data: any) => {
      this.categoria = data;
    });

  }


  verPost(id: string) {
    this.postService.verPost(id).subscribe((data: any) => {
      this.posts = data;
      this.verCategoria(this.posts.data.categoria_id);
    });
  }


}
