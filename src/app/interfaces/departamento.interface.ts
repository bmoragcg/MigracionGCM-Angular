import { Region } from './region.interface';

export interface Departamento {
  dep_id: string;
  dep_nombre: string;
  region: Region;
}
