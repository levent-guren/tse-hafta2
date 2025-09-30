import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KriterComponent } from './kriter.component';

describe('KriterComponent', () => {
  let component: KriterComponent;
  let fixture: ComponentFixture<KriterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KriterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
