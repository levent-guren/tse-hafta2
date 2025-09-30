import { Component, inject, OnInit } from '@angular/core';
import { PersonelService } from '../service/personel.service';
import { Personel } from '../models/personel';

@Component({
  selector: 'app-personel-list',
  standalone: true,
  imports: [],
  templateUrl: './personel-list.component.html',
  styleUrl: './personel-list.component.scss'
})
export class PersonelListComponent implements OnInit {
  private personelService = inject(PersonelService);
  personels: Personel[] = [];

  ngOnInit(): void {
    this.readPersonelList();
  }
  readPersonelList() {
    this.personelService.getPersonelList().subscribe({
      next: (result) => {
        setTimeout(() => {
          this.personels = result;
        }, 3000);

      }
    });
  }

}
