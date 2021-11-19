import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, MatSelectModule],
  exports: [MatButtonModule, MatIconModule, MatSelectModule],
})
export class MaterialModule {}
