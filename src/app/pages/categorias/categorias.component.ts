import { Component, OnInit, inject } from '@angular/core';
import { CategoriasComponent as cat } from '../../components/categorias/categorias.component';
import { HttpClient } from '@angular/common/http';
import { CategoriasService } from '../../services/categorias.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.scss'
})
export class CategoriasComponent implements OnInit{
  categorias:any=[];
  http=inject(HttpClient);
  postService=inject(CategoriasService);

  constructor() { }

  ngOnInit(): void {
    this.cargarCategorias();
  }

  cargarCategorias(){
    this.postService.getCategorias().subscribe((res:any)=>{
      this.categorias=res;
    });
  }
}
