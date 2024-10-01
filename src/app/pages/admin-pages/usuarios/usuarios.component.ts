import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { AutoresService } from '../../../services/autores.service';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [EditorModule,FormsModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent {

  id:any=[];
  name:any;
  email:any;
  password:any;
  contra:any;
  usuarios:any=[];
  usuarioSeleccionado:any={
    name:'',
    email:'',
    password:''
  };
  http=inject(HttpClient);
  usuariosService=inject(AutoresService);
  mensajeCre:any;
  MensajeElim:any;
  usuario:any;

  ngOnInit(){
    this.cargarTodos();
  }

  cargarTodos(){
    this.usuariosService.getUsuariosAdmin().subscribe((res:any) => {
      this.usuarios = res;
    });
  }

  crearUsuario(){
    let form = new FormData();
    form.append('name', this.name);
    form.append('email', this.email);
    form.append('password', this.password);
    this.usuariosService.create(form).subscribe((res:any) => {
      this.mensajeCre = res.message;
    });
    this.cargarTodos();
  }

  obtenerUsuario(id:any){
    this.usuariosService.getUsuario(id).subscribe((res:any) => {
      this.usuarioSeleccionado = res.data;
    });
  }

  actualizarUsuario(id:any){
    let form = new FormData();
    form.append('id', this.usuarioSeleccionado.id);
    form.append('email', this.usuarioSeleccionado.email);
    if (this.usuarioSeleccionado.password) {
      form.append('password', this.usuarioSeleccionado.password);
    }
/* cucurrentPage = 1;
totalPage = 1; */
    this.usuariosService.update(form,id).subscribe((res:any) => {
      this.usuarioSeleccionado = this.usuarios;
    });
    this.cargarTodos();
  }

  eliminarUsuario(id:any){
    this.usuariosService.delete(id).subscribe((res:any) => {
      this.MensajeElim = res.message;
    });
    this.cargarTodos();
  }


}
