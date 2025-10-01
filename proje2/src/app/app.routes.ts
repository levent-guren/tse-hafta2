import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HataComponent } from './hata/hata.component';
import { PersonelListComponent } from './personel-list/personel-list.component';
import { MenuComponent } from './menu/menu.component';
import { CreatePersonComponent } from './create-person/create-person.component';
import { AnaSayfaComponent } from './search/ana-sayfa/ana-sayfa.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: 'menu', component: MenuComponent, canActivate: [authGuard],
        children: [
            { path: '', redirectTo: 'create-person', pathMatch: 'full' },
            { path: 'personel-list', component: PersonelListComponent },
            { path: 'create-person', component: CreatePersonComponent },
            { path: 'search', component: AnaSayfaComponent },
            { path: '**', component: HataComponent }
        ]
    },
    { path: '**', component: HataComponent }
];
