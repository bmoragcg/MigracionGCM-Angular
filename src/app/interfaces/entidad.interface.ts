import { Sucursal } from './sucursal.interface';
import { Organocontrol } from './organoControl.interface';
import { TipoEntidad } from './tipoEntidad.interface';
export interface Entidad {
  ent_nit: string;
  ent_razon_social: string;
  ent_sigla: string;
  emp_username: string;
  ent_ruc: string;
  ent_cartera: string;
  ent_fecha_aniversario?: string;
  ent_num_asociados?: string;
  ent_num_empleados?: string;
  ent_activos?: string;
  ent_sitio_web?: string;
  ent_val?: string;
  ent_fecha_actualizacion?: string;
  sucursales: Sucursal[];
  sucursal_principal: Sucursal[];
  organo_control: Organocontrol;
  tipo_entidad: TipoEntidad;
}
