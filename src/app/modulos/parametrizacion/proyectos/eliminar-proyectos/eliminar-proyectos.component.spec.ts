import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarProyectosComponent } from './eliminar-proyectos.component';

describe('EliminarProyectosComponent', () => {
  let component: EliminarProyectosComponent;
  let fixture: ComponentFixture<EliminarProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarProyectosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
