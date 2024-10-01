import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutoresService } from '../../services/autores.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-autor',
  standalone: true,
  imports: [],
  templateUrl: './autor.component.html',
  styleUrl: './autor.component.scss'
})
export class AutorComponent implements OnInit{
  autores: any = [];
  assets:string= environment.assets;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private autorService: AutoresService
  ) { }

  ngOnInit() {
    // Obtenemos el valor del parámetro 'id' de la URL
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.verAutor(id);
    } else {
      console.error('El parámetro "id" es nulo.');
    }

  }

  verAutor(id: string) {
    this.autorService.verAutor(id).subscribe((data: any) => {
      this.autores = data;
    });
  }
  
}
