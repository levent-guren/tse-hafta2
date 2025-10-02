import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class PersonelService {
  private http = inject(HttpClient);

  private personeller = toSignal(
    this.http.get('http://localhost:8080/personeller'),
    { initialValue: [] }
  );

  getPersoneller() {
    return this.personeller();
  }
}
