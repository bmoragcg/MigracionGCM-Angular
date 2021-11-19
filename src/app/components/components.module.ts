import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
// import { NgSelect2Module } from 'ng-select2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { TemplateComponent } from './template/template.component';
import { HeaderComponent } from './header/header.component';
import { BuscarEntComponent } from './buscar-ent/buscar-ent.component';

@NgModule({
  declarations: [TemplateComponent, HeaderComponent, BuscarEntComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  exports: [TemplateComponent, HeaderComponent, BuscarEntComponent],
})
export class ComponentsModule {}
