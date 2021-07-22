import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallespComponent } from './detallesp.component';

describe('DetallespComponent', () => {
  let component: DetallespComponent;
  let fixture: ComponentFixture<DetallespComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallespComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
