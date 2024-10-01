import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { CategoriaService } from '../../services/categoria.service';
import { PostService } from '../../services/post.service';
import { CategoriasService } from '../../services/categorias.service';

@Component({
  selector: 'app-agregar-post',
  standalone: true,
  imports: [EditorModule, FormsModule],
  templateUrl: './agregar-post.component.html',
  styleUrl: './agregar-post.component.scss',
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ]
})
export class AgregarPostComponent implements OnInit {
  posts:any;
  contenido: any;
  titulo:any;
  imagen:any;
  categoria : any;
  ver=false;
  mostrarForm = false;

  categoriaService = inject(CategoriasService);
  postService = inject(PostService);
  categorias:any;

  ngOnInit(){
     this.categoriaService.getCategorias().subscribe((res:any) => {
        this.categorias = res;
     });
  }

  crearPost(){
    let form = new FormData();
    form.append('titulo', this.titulo);
    form.append('contenido', this.contenido);
    form.append('categoria', this.categoria);
    form.append('imagen', this.imagen);
    const auth = JSON.parse(localStorage.getItem('token') || '');
    form.append('token', auth.token);
    form.append('email', auth.user);
    this.postService.create(form).subscribe((res:any) => {

      console.log(form);
      console.log(res);

      if(res.success == 'Post creado'){
        this.ver = true;
        setTimeout(() => {
          this.ver = false;
        }, 1000);
      }
    });
  }

  verPosts(){
    this.postService.readAll().subscribe((res:any) => {
      console.log(res);
      this.posts = res;
    });
  }

  onFileChange(event:any){
    const file = event.target.files[0];
    this.imagen = file;
  }

  mostrarOcultar(){
    this.mostrarForm = !this.mostrarForm;
  }

}
