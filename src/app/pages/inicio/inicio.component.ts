import { Component, Input, OnInit, inject } from '@angular/core';
import { AutoresComponent } from '../../components/autores/autores.component';
import { RouterLink } from '@angular/router';
import { OnePostComponent } from '../../components/one-post/one-post.component';
import { PostService } from '../../services/post.service';
import { AutoresService } from '../../services/autores.service';
import { AboutComponent } from '../../components/about/about.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [AutoresComponent,RouterLink, OnePostComponent,AutoresComponent,AboutComponent,ContactComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent implements OnInit{
  posts:any=[];
  postService = inject(PostService);
  autores:any;
  assets:string= environment.assets;
  autorService= inject(AutoresService);

  ngOnInit(): void {
      this.cargarUltimosPosts();
      this.cargarUltimosAutores();
  }

  cargarUltimosPosts(){
    this.postService.ultimosPosts().subscribe((data:any)=>{
      this.posts=data;
    });
  }

  cargarUltimosAutores(){
    this.autorService.ultimos().subscribe((data:any)=>{
      this.autores=data;
    });
  }
}
