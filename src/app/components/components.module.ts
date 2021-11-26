import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { NgSelect2Module } from 'ng-select2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { TemplateComponent } from './template/template.component';
import { HeaderComponent } from './header/header.component';
import { BuscarEntComponent } from './buscar-ent/buscar-ent.component';
import { GeoreferenciacionComponent } from './otros/georeferenciacion/georeferenciacion.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  entryComponents: [GeoreferenciacionComponent],
  declarations: [TemplateComponent, HeaderComponent, BuscarEntComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    MatDialogModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyCBA23DmjYFWAB-V8bvIPVDuWs5fVdRnW8',
    // }),
  ],
  exports: [TemplateComponent, HeaderComponent, BuscarEntComponent],
})
export class ComponentsModule {}
