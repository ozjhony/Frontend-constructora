import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LppComponent } from './lpp.component';

describe('LppComponent', () => {
  let component: LppComponent;
  let fixture: ComponentFixture<LppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
