import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SearchDto } from '../dto/search-dto';
import { Person } from '../dto/person';
import { PersonelService } from '../../service/personel.service';
import { DatePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { UzunlukPipe } from '../../pipes/uzunluk.pipe';

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [UpperCasePipe, TitleCasePipe, DatePipe, UzunlukPipe],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.scss'
})
export class ListeComponent {
  private _kriter: SearchDto;
  private personelService = inject(PersonelService);
  kisiler: Person[] = [];
  tarih = Date.now();

  @Input()
  get kriter() {
    return this._kriter;
  }
  set kriter(newKriter: SearchDto) {
    this._kriter = newKriter;
    this.aramaYap();
  }
  aramaYap() {
    if (this._kriter) {
      this.personelService.personelAra(this._kriter).subscribe({
        next: (result) => {
          this.kisiler = result;
        }
      });
    }
  }

}
