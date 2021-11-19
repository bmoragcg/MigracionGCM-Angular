import { Injectable } from '@angular/core';
import { QueryService } from './query.service';
import { Menu, RootObject } from '../interfaces/menu.interface';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private querySrvc: QueryService) {}

  getMenu(): Promise<RootObject> {
    return this.querySrvc.get<RootObject>('/menu/crearMenu').pipe().toPromise();
  }
}
