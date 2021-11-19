import { Injectable } from '@angular/core';
import { QueryService } from './query.service';
import { Pais } from '../interfaces/pais.interface';
import { Empleado } from '../interfaces/empleado.interface';

import { Redes } from '../interfaces/redes.interface';
import { Observable } from 'rxjs';
import { Departamento } from '../interfaces/departamento.interface';
import { Organocontrol } from '../interfaces/organoControl.interface';
import { Ciudad } from '../interfaces/ciudad.interface';
import { Comuna } from '../interfaces/comuna.interface';
import { Entidad } from '../interfaces/entidad.interface';
import { OrganoTipoEntidad } from '../interfaces/organoTipoEntidad.interface';
import { Cargo } from '../interfaces/cargo.interface';

interface InitData {
  paises: Pais[];
  comerciales: Empleado[];
  contactCenter: Empleado[];
  cargos: Cargo[];
  redes: Redes[];
}

interface DataByPai {
  deptos: Departamento[];
  organoControl: Organocontrol[];
}

interface DataByDep {
  ciudades: Ciudad[];
  departamento: Departamento[];
}

interface DataByCiu {
  comunas: Comuna[];
}

interface DataByOrg {
  tipos: OrganoTipoEntidad[];
}

interface FilterData {
  current_page: number;
  data: Entidad[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url?: any;
  to: number;
  total: number;
}

@Injectable({
  providedIn: 'root',
})
export class BuscarEntidadService {
  constructor(private query: QueryService) {}

  dataInit(): Observable<InitData> {
    return this.query.get<InitData>('/buscarEntidad');
  }

  dataByPai(pai: string): Observable<DataByPai> {
    return this.query.get<DataByPai>(`/buscarEntidad/dataByPai/${pai}`);
  }

  dataByDep(dep: string): Observable<DataByDep> {
    return this.query.get<DataByDep>(`/buscarEntidad/dataByDep/${dep}`);
  }

  dataByCiu(ciu: string): Observable<DataByCiu> {
    return this.query.get<DataByCiu>(`/buscarEntidad/dataByCiu/${ciu}`);
  }

  dataByOrg(org: string): Observable<DataByOrg> {
    return this.query.get<DataByOrg>(`/buscarEntidad/dataByOrg/${org}`);
  }

  filterData(params: any): Observable<FilterData> {
    return this.query.post<FilterData>(`/buscarEntidad/filterData`, params);
  }
}
