import { Component, Input, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AutoresService } from '../../services/autores.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-autores',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule],
  templateUrl: './autores.component.html',
  styleUrl: './autores.component.scss'
})
export class AutoresComponent implements OnInit{
  autores:any=[
    {id:1, name: 'Juan', profesion: 'Perez', foto: '',acerca: 'acerca de mi'},
  ];
  assets:string= environment.assets;
  autoresService = inject(AutoresService);

  ngOnInit(): void {
    this.cargarAutores();
  }
  
  cargarAutores(){
    this.autoresService.verTodos().subscribe(data => {
      this.autores = data;
    });
  }

}
