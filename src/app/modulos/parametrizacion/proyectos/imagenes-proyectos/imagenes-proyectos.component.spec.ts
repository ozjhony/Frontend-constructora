import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenesProyectosComponent } from './imagenes-proyectos.component';

describe('ImagenesProyectosComponent', () => {
  let component: ImagenesProyectosComponent;
  let fixture: ComponentFixture<ImagenesProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenesProyectosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenesProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
