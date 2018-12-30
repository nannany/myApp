import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { Nl2brPipe } from "./pipe/nl2br.pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    Nl2brPipe
  ],
  declarations: [
    Nl2brPipe
  ]
})
export class SharedModule { }
