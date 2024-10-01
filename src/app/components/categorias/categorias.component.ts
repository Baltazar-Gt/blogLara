import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, inject } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { RouterLink } from '@angular/router';
import { CategoriasService } from '../../services/categorias.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.scss'
})
export class CategoriasComponent /* implements OnInit */{
  categorias:any=[];
  http=inject(HttpClient);
  categoriaService=inject(CategoriasService);

  ngOnInit(){
    this.cargarCategorias();
      
  }
  cargarCategorias(){
    this.categoriaService.getCategorias().subscribe((res:any)=>{
      console.log(res);
      this.categorias=res;
    });
  }
}
