import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProyectosPublicosComponent } from './lista-proyectos-publicos.component';

describe('ListaProyectosPublicosComponent', () => {
  let component: ListaProyectosPublicosComponent;
  let fixture: ComponentFixture<ListaProyectosPublicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaProyectosPublicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProyectosPublicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
