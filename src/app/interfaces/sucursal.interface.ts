import { Pais } from './pais.interface';
import { Departamento } from './departamento.interface';
import { Ciudad } from './ciudad.interface';
import { Empleado } from './empleado.interface';
import { Comuna } from './comuna.interface';

export interface Sucursal {
  suc_id: number;
  suc_nombre: string;
  ent_nit: string;
  suc_direccion: string;
  suc_telefono: string;
  empleados: Empleado[];
  pais: Pais;
  departamento: Departamento;
  ciudad: Ciudad;
  comuna: Comuna;
}
