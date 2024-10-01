import { Component, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AutoresService } from '../../services/autores.service';
import { RouterLink } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink,ContactComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  autor1: any= {};
  autor2: any= {};
  assets: string = environment.assets;
  autorService = inject(AutoresService);

  ngOnInit(): void {
    this.primerAutor();
    this.segundoAutor();
  }

  primerAutor() {
    this.autorService.verAutor('1').subscribe((data: any) => {
      this.autor1 = data;
    });
  }

  segundoAutor() {
    this.autorService.verAutor('2').subscribe((data: any) => {
      this.autor2 = data;
    });
  }

}
