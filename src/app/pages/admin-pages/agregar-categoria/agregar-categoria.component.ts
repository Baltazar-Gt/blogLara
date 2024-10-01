import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { CategoriasService } from '../../../services/categorias.service';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-categoria',
  standalone: true,
  imports: [EditorModule,FormsModule],
  templateUrl: './agregar-categoria.component.html',
  styleUrl: './agregar-categoria.component.scss'
})
export class AgregarCategoriaComponent {
  id:any;
  nombre:any;
  nCat:any;
  categorias:any=[];
  http=inject(HttpClient);
  categoriaService=inject(CategoriasService);
  mensajeCre:any;
  MensajeElim:any;
  categoriaSeleccionada:any=[];


  ngOnInit(){
    this.cargarTodos();
  }

  cargarTodos(){
    this.categoriaService.getCategoriasAdmin().subscribe((res:any) => {
      this.categorias = res;
    });
  }

  crearCategoria(){
    let form = new FormData();
    form.append('nombre', this.nombre);
    this.categoriaService.create(form).subscribe((res:any) => {
      this.mensajeCre = res.message;
    });
    this.cargarTodos();
  
  }

  obtenerCategoria(id:any){
    this.categoriaService.getCategoria(id).subscribe((res:any) => {
      this.categoriaSeleccionada = res;
    });
  }

  actualizarCategoria(id:any){
    let form = new FormData();
    if(this.nCat != null){
      form.append('nombre', this.nCat);
    }
    else{
      form.append('nombre', this.categoriaSeleccionada.nombre);
    }

/*       form.forEach((value, key) => {
      console.log(key + ' ' + value);
  });
  return */
    this.categoriaService.update(form,id).subscribe((res:any) => {
      this.categoriaSeleccionada = this.categorias;
    });
    this.cargarTodos();
  }

  eliminarCategoria(id:any){
    let form = new FormData();
    form.append('id', id);
    this.categoriaService.delete(id).subscribe((res:any) => {
      this.MensajeElim = res.message;
    });
    this.cargarTodos();
  }
    



}
