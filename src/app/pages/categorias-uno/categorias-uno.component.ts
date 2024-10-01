import { Component, OnInit, inject } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { OnePostComponent } from '../../components/one-post/one-post.component';
import { environment } from '../../../environments/environment';
import { CategoriasService } from '../../services/categorias.service';

@Component({
  selector: 'app-categorias-uno',
  standalone: true,
  imports: [OnePostComponent,RouterLink],
  templateUrl: './categorias-uno.component.html',
  styleUrl: './categorias-uno.component.scss'
})
export class CategoriasUnoComponent implements OnInit{
  postService = inject(PostService);
  ruta = inject(ActivatedRoute);
  posts: any = [];
  categoria:any = [];
  categoriaService = inject(CategoriasService);
  assets:string= environment.assets;

  ngOnInit(){
    this.ruta.params.subscribe(() => {
      const id = this.ruta.snapshot.paramMap.get('id') || '';
      this.postService.postsByCategoria(id).subscribe((data:any) => {
        this.posts = data[0];
      });
    });

    this.ruta.params.subscribe(() => {
      const id = this.ruta.snapshot.paramMap.get('id') || '';
      this.categoriaService.getCategoria(id).subscribe((data:any) => {
        this.categoria = data;
      });
    });
    
  }
}
