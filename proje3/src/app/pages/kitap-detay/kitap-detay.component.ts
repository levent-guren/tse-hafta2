import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { KitapService } from '../../shared/service/kitap.service';
import { Kitap } from '../../shared/model/kitap';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-kitap-detay',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './kitap-detay.component.html',
  styleUrl: './kitap-detay.component.scss'
})
export class KitapDetayComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private kitapService = inject(KitapService);
  private router = inject(Router);

  kitap: Kitap | undefined;

  /*ngOnInit(): void {
    const kitapId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.kitap = this.kitapService.getKitap(kitapId);
  }*/
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (r) => {
        const kitapId = Number(r.get('id'));
        this.kitap = this.kitapService.getKitap(kitapId);
      }
    });
  }
  geri() {
    let id = this.kitap!.id;
    if (id > 1) {
      id--;
    }
    this.router.navigate(['/detay', id]);
  }
  ileri() {
    let id = this.kitap!.id;
    if (id < this.kitapService.getTumKitaplar().length) {
      id++;
    }
    this.router.navigate(['/detay', id]);
  }
}
