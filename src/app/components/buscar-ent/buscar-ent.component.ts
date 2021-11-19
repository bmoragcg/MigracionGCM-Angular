import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Sucursal } from '../../interfaces/sucursal.interface';
import { Pais } from '../../interfaces/pais.interface';
import { Departamento } from '../../interfaces/departamento.interface';
import { Ciudad } from '../../interfaces/ciudad.interface';
import { Comuna } from '../../interfaces/comuna.interface';
import { Region } from '../../interfaces/region.interface';
import { Empleado } from '../../interfaces/empleado.interface';
import { Entidad } from '../../interfaces/entidad.interface';
import { Organocontrol } from '../../interfaces/organoControl.interface';
import { Redes } from '../../interfaces/redes.interface';
import { BuscarEntidadService } from '../../services/buscar-entidad.service';
import { OrganoTipoEntidad } from '../../interfaces/organoTipoEntidad.interface';
import { Options } from 'select2';
import { Cargo } from '../../interfaces/cargo.interface';

interface ArrayParams {
  sucursal: any | Object;
  entidad: any | Object;
  empleado: any | Object;
}

@Component({
  selector: 'app-buscar-ent',
  templateUrl: './buscar-ent.component.html',
  styleUrls: ['./buscar-ent.component.scss'],
})
export class BuscarEntComponent implements OnInit {
  public options: Options;

  @Input() tipo: string;

  listaCargos: Cargo[] = [];
  listaComerciales: Empleado[] = [];
  listaContactCenter: Empleado[] = [];
  listaPaises: Pais[] = [];
  listaDepartamentos: Departamento[] = [];
  listaCiudades: Ciudad[] = [];
  listaComuna: Comuna[] = [];
  listaRedes: Redes[] = [];
  listaOrganoControl: Organocontrol[] = [];
  // listaOrganoTipoEntidad: OrganoTipoEntidad[] = [];
  listaEntidades: Entidad[] = [];
  listaTipo: OrganoTipoEntidad[] = [];
  listaMeses: any[];
  listaDias: any[];

  spinner = {
    init: false,
    byPais: false,
    byDep: false,
    byCiu: false,
    byOrg: false,
  };

  // disabledInputs = {
  //   isDisabled: true,
  //   cotizacion: true,
  //   negocioCerrado: true,
  //   comercial: true,
  // };

  getMes(): any[] {
    return [
      { id: 1, label: 'Enero' },
      { id: 2, label: 'Febrero' },
      { id: 3, label: 'Marzo' },
      { id: 4, label: 'Abril' },
      { id: 5, label: 'Mayo' },
      { id: 6, label: 'Junio' },
      { id: 7, label: 'Julio' },
      { id: 8, label: 'Agosto' },
      { id: 9, label: 'Septiembre' },
      { id: 10, label: 'Octubre' },
      { id: 11, label: 'Noviembre' },
      { id: 12, label: 'Diciembre' },
    ];
  }

  getDias(): any[] {
    return [
      { id: 1, label: 1 },
      { id: 2, label: 2 },
      { id: 3, label: 3 },
      { id: 4, label: 4 },
      { id: 5, label: 5 },
      { id: 6, label: 6 },
      { id: 7, label: 7 },
      { id: 8, label: 8 },
      { id: 9, label: 9 },
      { id: 10, label: 10 },
      { id: 11, label: 11 },
      { id: 12, label: 12 },
      { id: 13, label: 13 },
      { id: 14, label: 14 },
      { id: 15, label: 15 },
      { id: 16, label: 16 },
      { id: 17, label: 17 },
      { id: 18, label: 18 },
      { id: 19, label: 19 },
      { id: 20, label: 20 },
      { id: 21, label: 21 },
      { id: 22, label: 22 },
      { id: 23, label: 23 },
      { id: 24, label: 24 },
      { id: 25, label: 25 },
      { id: 26, label: 26 },
      { id: 27, label: 27 },
      { id: 28, label: 28 },
      { id: 29, label: 29 },
      { id: 30, label: 30 },
      { id: 31, label: 31 },
    ];
  }

  region: Region = {} as Region;
  frmBuscar: FormGroup;
  pais: any;
  arrayParams: any = {} as any;

  constructor(
    private buscarEntidadSrvc: BuscarEntidadService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.frmBuscar = this.formBuilder.group({
      sucursal: this.formBuilder.group({
        pai_id: [''],
        dep_id: [{ value: '', disabled: true }],
        ciu_id: [{ value: '', disabled: true }],
        com_id: [{ value: '', disabled: true }],
      }),
      entidad: this.formBuilder.group({
        ent_razon_social: [{ value: '', disabled: true }],
        ent_sigla: [{ value: '', disabled: true }],
        ent_nit: [{ value: '', disabled: true }],
        ent_ruc: [{ value: '', disabled: true }],
        ent_cartera: [{ value: '', disabled: true }],
        org_id: [{ value: '', disabled: true }],
        tpe_id: [{ value: '', disabled: true }],
        nivel_supervision: [{ value: '', disabled: true }],
        emp_username: [{ value: '', disabled: true }],
      }),
      empleado: this.formBuilder.group({
        emp_pnombre: [{ value: '', disabled: true }],
        emp_snombre: [{ value: '', disabled: true }],
        emp_papellido: [{ value: '', disabled: true }],
        emp_sapellido: [{ value: '', disabled: true }],
        emp_cargo: [{ value: '', disabled: true }],
        emp_sexo: [{ value: '', disabled: true }],
        emp_identificacion: [{ value: '', disabled: true }],
        emp_mes_cumpleanios: [{ value: '', disabled: true }],
        emp_dia_cumpleanios: [{ value: '', disabled: true }],
        red_id: [{ value: '', disabled: true }],
      }),
    });
    // this.filterData();
    this.initData();
  }

  initData(): void {
    this.spinner.init = true;

    this.buscarEntidadSrvc.dataInit().subscribe((r) => {
      this.spinner.init = false;
      this.listaCargos = r.cargos;
      this.listaComerciales = r.comerciales;
      this.listaContactCenter = r.contactCenter;
      this.listaPaises = r.paises;
      this.listaRedes = r.redes;
      this.listaMeses = this.getMes();
      this.listaDias = this.getDias();
    });
  }

  dataByPais($event: any): void {
    this.spinner.byPais = true;
    this.buscarEntidadSrvc.dataByPai($event.value.join()).subscribe((r) => {
      this.spinner.byPais = false;
      this.frmBuscar.get('entidad')?.enable();
      this.frmBuscar.get('empleado')?.enable();
      this.frmBuscar.get('sucursal')?.enable();
      this.listaDepartamentos = r.deptos;
      this.listaOrganoControl = r.organoControl;
    });
  }

  dataByDep($event: any): void {
    this.spinner.byDep = true;
    this.buscarEntidadSrvc.dataByDep($event.value.join()).subscribe((r) => {
      this.spinner.byDep = false;
      this.listaCiudades = r.ciudades;
    });
  }

  dataByCiu($event: any): void {
    this.spinner.byCiu = true;
    this.buscarEntidadSrvc.dataByCiu($event.value.join()).subscribe((r) => {
      this.spinner.byCiu = false;
      this.listaComuna = r.comunas;
    });
  }

  dataByOrg($event: any): void {
    this.spinner.byOrg = true;
    this.buscarEntidadSrvc.dataByOrg($event.join(',')).subscribe((r) => {
      this.spinner.byOrg = false;

      this.listaTipo = r.tipos;
    });
  }

  filterData(): void {
    Object.keys(this.frmBuscar.value).forEach((elm: string) =>
      Object.entries(this.frmBuscar.get(elm)?.value).forEach((value: any[]) => {
        if (value[1] !== '') {
          this.arrayParams[value[0]] = { [value[0]]: value[1] };
        }
      })
    );

    // Object.keys(this.frmBuscar.value).forEach((e: string, i) => {
    //   Object.keys(this.frmBuscar.value[e]).forEach((a, b) => {
    //     if (this.frmBuscar.value[e][a] !== '') {
    //       this.arrayParams[e] = { [a]: this.frmBuscar.value[e][a] };
    //     }
    //   });
    // });

    // this.buscarEntidadSrvc.filterData(this.arrayParams).subscribe((r) => {
    //   this.listaEntidades = r.data;
    // });
  }
}
