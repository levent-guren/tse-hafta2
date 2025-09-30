import { Component } from '@angular/core';
import { KriterComponent } from "../kriter/kriter.component";
import { ListeComponent } from "../liste/liste.component";
import { SearchDto } from '../dto/search-dto';

@Component({
  selector: 'app-ana-sayfa',
  standalone: true,
  imports: [KriterComponent, ListeComponent],
  templateUrl: './ana-sayfa.component.html',
  styleUrl: './ana-sayfa.component.scss'
})
export class AnaSayfaComponent {
  kriterr = new SearchDto('', '');

  aramaYapildi(dto: SearchDto) {
    console.log('AnaSayfa', dto);
    this.kriterr = new SearchDto('', '');
    this.kriterr = dto;
  }

}
