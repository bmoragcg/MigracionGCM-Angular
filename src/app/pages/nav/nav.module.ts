import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { NavRoutingModule } from './nav-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    NavRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class NavModule {}
