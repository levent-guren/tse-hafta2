import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitapListesiComponent } from './kitap-listesi.component';

describe('KitapListesiComponent', () => {
  let component: KitapListesiComponent;
  let fixture: ComponentFixture<KitapListesiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KitapListesiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitapListesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
