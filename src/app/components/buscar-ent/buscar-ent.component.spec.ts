import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarEntComponent } from './buscar-ent.component';

describe('BuscarEntComponent', () => {
  let component: BuscarEntComponent;
  let fixture: ComponentFixture<BuscarEntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarEntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarEntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
