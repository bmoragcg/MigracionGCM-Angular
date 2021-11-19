import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BuscarEntidadesComponent } from './buscar-entidades.component';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: BuscarEntidadesComponent,
  },
];

@NgModule({
  declarations: [BuscarEntidadesComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ComponentsModule],
})
export class BuscarEntidadesModule {}
