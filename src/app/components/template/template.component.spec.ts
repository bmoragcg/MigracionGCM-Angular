import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { TemplateComponent } from './template.component';

describe('TemplateComponent', () => {
  let component: TemplateComponent;
  let fixture: ComponentFixture<TemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [TemplateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('la variable menú debe de estar definida', () => {
    expect(component.menu).toBeDefined();
  });

  // it('Devuelve el menu', () => {
  //   expect(component.getMenu()).toContain(2);
  // });

  // it('Retorna el menu del usuario', () => {
  //   const prueba = component.ngOnInit();
  //   expect(prueba).toEqual([1, 2]);
  // });
});
