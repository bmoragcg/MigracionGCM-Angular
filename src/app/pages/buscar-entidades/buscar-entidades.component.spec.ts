import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarEntidadesComponent } from './buscar-entidades.component';

describe('BuscarEntidadesComponent', () => {
  let component: BuscarEntidadesComponent;
  let fixture: ComponentFixture<BuscarEntidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarEntidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarEntidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
