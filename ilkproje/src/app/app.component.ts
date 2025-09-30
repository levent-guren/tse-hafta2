import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `merhaba {{ title }}<br/>
  {{ 2+3 }} {{ url }} {{ test() }} <button (click)="basildi()">Button 1</button><br/>
  <input type="text" [(ngModel)]="title" [disabled]='aktif'/>` ,
  styles: ''
})
export class AppComponent {
  title = 'ilkproje';
  url = window.location.href;
  x = 3;
  a: number | null = null;
  aktif = true;
  test() {
    return "deneme";
  }
  basildi() {
    this.title = 'Levent';
    this.aktif = !this.aktif;
  }
}
