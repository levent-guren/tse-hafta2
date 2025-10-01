import { Component, inject } from '@angular/core';
import { KitapService } from '../../shared/service/kitap.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kitap-listesi',
  standalone: true,
  imports: [],
  templateUrl: './kitap-listesi.component.html',
  styleUrl: './kitap-listesi.component.scss'
})
export class KitapListesiComponent {
  private kitapService = inject(KitapService);
  private router = inject(Router);

  getKitaplar() {
    return this.kitapService.getTumKitaplar();
  }
  kitapSecildi(id: number) {
    this.router.navigate(['/detay', id]);
  }
}
