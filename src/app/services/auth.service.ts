import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QueryService } from './query.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  path = 'usuario';
  constructor(private querySrvc: QueryService) {}

  logueo(cifrado: string): Promise<any> {
    return this.querySrvc
      .get<any>(`/login?u=${cifrado}&ptf=1`)
      .pipe()
      .toPromise();
  }

  decodificar(cifrado: string): Observable<any> {
    return this.querySrvc.get<any>(`/login/decodificar?cifrado=${cifrado}`);
  }
}
