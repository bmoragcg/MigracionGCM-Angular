import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private activateRoute: ActivatedRoute,
    private auth: AuthService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.validaRuta();
  }

  validaRuta(): void {
    this.activateRoute.queryParams.subscribe(async (res: any) => {
      if (Object.keys(res).length === 0) {
        alert('defina los parametros');
      } else {
        const val: any = await this.logueo(res.u);
        if (!val.err) {
          localStorage.setItem('token', val.access_token);
          localStorage.setItem('user', JSON.stringify(val.user));
          this.route.navigateByUrl(`nav/${val.destino}`);
        }
      }
    });
  }

  async logueo(cifrado: string): Promise<any> {
    const resp = await this.auth.logueo(cifrado);
    return resp;
  }

  decodificar(cifrado: string): void {
    this.auth.decodificar(cifrado).subscribe((res) => {
      return res.usuario;
    });
  }
}
