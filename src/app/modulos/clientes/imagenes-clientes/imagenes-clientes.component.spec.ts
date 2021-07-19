import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenesClientesComponent } from './imagenes-clientes.component';

describe('ImagenesClientesComponent', () => {
  let component: ImagenesClientesComponent;
  let fixture: ComponentFixture<ImagenesClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenesClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenesClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
