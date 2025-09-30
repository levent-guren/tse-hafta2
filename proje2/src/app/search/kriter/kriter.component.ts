import { Component, EventEmitter, Output } from '@angular/core';
import { SearchDto } from '../dto/search-dto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-kriter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './kriter.component.html',
  styleUrl: './kriter.component.scss'
})
export class KriterComponent {
  dto = new SearchDto('', '');
  @Output() gonder = new EventEmitter<SearchDto>();

  ara() {
    this.gonder.emit(this.dto);
  }
}
