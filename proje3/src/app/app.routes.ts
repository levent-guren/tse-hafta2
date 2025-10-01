import { Routes } from '@angular/router';
import { KitapListesiComponent } from './pages/kitap-listesi/kitap-listesi.component';
import { KitapDetayComponent } from './pages/kitap-detay/kitap-detay.component';

export const routes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: KitapListesiComponent },
    { path: 'detay/:id', component: KitapDetayComponent },
];
