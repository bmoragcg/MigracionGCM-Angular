export interface RootObject {
  menu: Menu[];
}

export interface Menu {
  mod_id: number;
  mod_nombre: string;
  mod_icono: string;
  mod_link: string;
  mod_parent: number;
  mod_orden: number;
  mod_show: number;
  parent: Parent2[];
}

interface Parent2 {
  mod_id: number;
  mod_nombre: string;
  mod_icono: string;
  mod_link: string;
  mod_show: number;
  mod_parent: number;
  parent?: Parent[];
}

interface Parent {
  mod_id: number;
  mod_nombre: string;
  mod_icono: string;
  mod_link: string;
  mod_show: number;
  mod_parent: number;
}
