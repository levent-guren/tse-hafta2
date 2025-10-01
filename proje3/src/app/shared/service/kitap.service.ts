import { Injectable } from '@angular/core';
import { Kitap } from '../model/kitap';

@Injectable({
  providedIn: 'root'
})
export class KitapService {
  private kitaplar: Kitap[] = [
    { id: 1, adi: 'Suç ve Ceza', yazar: 'Fyodor Dostoyevski', sayfaSayisi: 671, basimTarihi: new Date('1866-01-01') },
    { id: 2, adi: 'Sefiller', yazar: 'Victor Hugo', sayfaSayisi: 1232, basimTarihi: new Date('1862-01-01') },
    { id: 3, adi: 'İnce Memed', yazar: 'Yaşar Kemal', sayfaSayisi: 445, basimTarihi: new Date('1955-01-01') },
    { id: 4, adi: 'Tutunamayanlar', yazar: 'Oğuz Atay', sayfaSayisi: 724, basimTarihi: new Date('1971-01-01') },
    { id: 5, adi: 'Kürk Mantolu Madonna', yazar: 'Sabahattin Ali', sayfaSayisi: 160, basimTarihi: new Date('1943-01-01') },
    { id: 6, adi: 'Beyaz Gemi', yazar: 'Cengiz Aytmatov', sayfaSayisi: 160, basimTarihi: new Date('1970-01-01') },
    { id: 7, adi: 'Şeker Portakalı', yazar: 'José Mauro de Vasconcelos', sayfaSayisi: 182, basimTarihi: new Date('1968-01-01') }
  ];

  getTumKitaplar() {
    return this.kitaplar;
  }
  getKitap(id: number) {
    return this.kitaplar.find((k) => k.id == id);
  }
}
