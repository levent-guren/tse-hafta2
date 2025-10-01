import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Personel } from '../models/personel';
import { CreatePerson } from '../models/create-person';
import { map, tap } from 'rxjs';
import { APP_CONFIG } from '../app.config';
import { SearchDto } from '../search/dto/search-dto';
import { Person } from '../search/dto/person';

@Injectable({
  providedIn: 'root'
})
export class PersonelService {
  private env: any = inject(APP_CONFIG);

  constructor(
    private http: HttpClient
  ) {
  }

  getPersonelList() {
    return this.http.get<Personel[]>('/users');
  }

  savePerson(person: any) {
    return this.http
      .post<CreatePerson>('/users', person)
      .pipe(
        map((result) => {
          console.log('Personel yaratmada cevap döndü(map):', result);
          return { adi: 'Levent' };
        }),
        tap((result) => {
          console.log('Personel yaratmada cevap2 döndü:', result);
        }),
      );
  }

  personelAra(dto: SearchDto) {
    return this.http.post<Person[]>('/query',
      {
        adi: dto.adi == '' ? null : dto.adi,
        soyadi: dto.soyadi == '' ? null : dto.soyadi,
      },
      { headers: { 'server': 'hoca' } }
    );
  }
}
