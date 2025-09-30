import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SearchDto } from '../dto/search-dto';

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.scss'
})
export class ListeComponent {

  private _kriter = new SearchDto('', '');

  @Input()
  get kriter() {
    return this._kriter;
  }
  set kriter(newKriter: SearchDto) {
    this._kriter = newKriter;
    this.aramaYap();
  }
  aramaYap() {
    console.log('Liste Component.aramaYap', this._kriter);
  }

}
