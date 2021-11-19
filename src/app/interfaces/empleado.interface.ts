import { Sucursal } from './sucursal.interface';

export interface RootObject {
  current_page: number;
  data: Empleado[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url?: any;
  path: string;
  per_page: number;
  prev_page_url?: any;
  to: number;
  total: number;
}

export interface Empleado {
  emp_username: string;
  emp_pnombre: string;
  emp_papellido: string;
  emp_snombre: string;
  emp_sapellido: string;
  emp_pagina_ini: number;
  emp_estado: boolean;
  emp_acceso_api?: boolean;
  sucursal: Sucursal;
}
