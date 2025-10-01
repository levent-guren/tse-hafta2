import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitapDetayComponent } from './kitap-detay.component';

describe('KitapDetayComponent', () => {
  let component: KitapDetayComponent;
  let fixture: ComponentFixture<KitapDetayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KitapDetayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitapDetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
