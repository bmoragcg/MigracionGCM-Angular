import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { Menu } from 'src/app/interfaces/menu.interface';
import { Empleado } from 'src/app/interfaces/empleado.interface';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
})
export class TemplateComponent implements OnInit {
  menu: Menu[] = [];
  user: Empleado = {} as Empleado;
  nombre = localStorage.getItem('nombres');

  constructor(private menuSrvc: MenuService, private router: Router) {}

  ngOnInit(): void {
    this.getMenu();
    this.infoUser();
  }

  getMenu(): void {
    this.menuSrvc
      .getMenu()
      .then((val) => {
        this.menu = val.menu;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  infoUser(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }

  cerrarSesion($e: any): void {
    $e.preventDefault();

    localStorage.removeItem('token');
    localStorage.removeItem('user');

    this.router.navigateByUrl('');
  }
}
