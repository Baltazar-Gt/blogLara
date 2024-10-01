import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { environment } from '../../../../environments/environment';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule } from '@angular/forms';
import { CategoriasService } from '../../../services/categorias.service';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [EditorModule,FormsModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent {
  http=inject(HttpClient);
  usuarioService=inject(UsuarioService);
  assets:string= environment.assets;
  usuario:any=[];
  unPost:any=[];
  posts:any;
  post:any={
    titulo:'',
    contenido:'',
    categoria_id:1,
  };
  foto:any;
  imagen:any;
  cat:any=[];
  archivo:any;
  categorias:any;
  categoria:any;
  categoriaService=inject(CategoriasService);

  constructor() {}

  ngOnInit() {
    this.cargarUsuario();
    this.cargarPost();
    this.cargarCategorias();
  }
  
  cargarUsuario(){
    this.usuarioService.getUsuario().subscribe((res:any) => {
      this.usuario = res;
    });
  }

  cargarPost(){
    this.usuarioService.getPosts().subscribe((res:any) => {
      this.posts = res;
    });
  }

  cargarCategorias(){
    this.categoriaService.getCategorias().subscribe((res:any) => {
      this.categorias = res;
    });
  }

  cargarCategoriaId(id:any){
    this.categoriaService.getCategoria(id).subscribe((res:any) => {
      this.cat = res;
    });
  }

  cargarPostId(id:any){
    this.usuarioService.getPost(id).subscribe((res:any) => {
      this.unPost = res;
    });
  }
  

  actualizarUsuario(){
    let form = new FormData();
    if(this.usuario.name){
      form.append('name', this.usuario.name);
    }
    if (this.usuario.email) {
      form.append('email', this.usuario.email);
    }
    if (this.usuario.password) {
      form.append('password', this.usuario.password);
    }
    form.append('acerca', this.usuario.acerca);
    form.append('profesion', this.usuario.profesion);
    form.append('foto', this.usuario.foto);
/*     form.forEach((value, key) => {
      console.log(key + ' ' + value);
    }); */
    this.usuarioService.updateUsuario(form).subscribe((res:any) => {
      this.cargarUsuario();
    });
  }

  crearPost(){
    let form = new FormData();
    form.append('titulo', this.post.titulo);
    form.append('contenido', this.post.contenido);
    form.append('imagen', this.imagen);
    form.append('categoria_id', this.categoria);
    form.append('user_id', this.usuario.id);
    form.append('archivo', this.archivo);
/*     form.forEach((value, key) => {
      console.log(key + ' ' + value);
    }); */
    this.usuarioService.createPost(form).subscribe((res:any) => {
      //ver todo lo que lleva el form
      this.cargarPost();
    });
  }

  actualizarPost(id:any){
    let form = new FormData();

    if(this.unPost.titulo){
      form.append('titulo', this.unPost.titulo);
    }
    form.append('contenido', this.unPost.contenido);
    if(this.imagen){
      form.append('imagen', this.imagen);
    }
    form.append('categoria_id', this.cat.id);
    form.append('user_id', this.usuario.id);
    if(this.archivo){
      form.append('archivo', this.archivo);
    }
    this.usuarioService.updatePost(form, this.unPost.id).subscribe((res:any) => {
      this.cargarPost();
    });
  }

  eliminarPost(id:any){
    this.usuarioService.deletePost(id).subscribe((res:any) => {
      this.cargarPost();
    });
  }
  
  onFileChange(event:any) {
      this.usuario.foto = event.target.files[0];
  }

  onImgChange(event:any) {
    this.imagen = event.target.files[0];
}

  onArchivoChange(event:any) {
    this.archivo = event.target.files[0];
  }
  
  
}
