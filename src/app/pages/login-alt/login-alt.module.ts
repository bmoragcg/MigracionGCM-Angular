import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginAltComponent } from './login-alt.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: LoginAltComponent,
  },
];

@NgModule({
  declarations: [LoginAltComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class LoginAltModule {}
