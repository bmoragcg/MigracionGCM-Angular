import { TipoEntidad } from './tipoEntidad.interface';
import { Organocontrol } from './organoControl.interface';

export interface OrganoTipoEntidad {
  tpe_id: number;
  org_id: number;
  impuesto: string;
  valor: number;
  organo_control: Organocontrol;
  tipo_entidad: TipoEntidad;
}
