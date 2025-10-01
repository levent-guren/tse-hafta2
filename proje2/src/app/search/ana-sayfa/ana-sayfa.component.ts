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
  kriter: SearchDto;

  aramaYapildi(dto: SearchDto) {
    this.kriter = { ...dto };
  }

}
