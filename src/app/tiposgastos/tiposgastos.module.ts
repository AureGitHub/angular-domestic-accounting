import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';

import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserModule } from '@angular/platform-browser';

import { TiposgastosComponent }     from './tiposgastos.component';
import { TipoGastoFormComponent }     from './tipogasto-form/tipogasto-form.component';

 import { TiposGastosService }      from '../_service/tiposgastos.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    GridModule
    
  ],
  declarations: [
    TiposgastosComponent,
    TipoGastoFormComponent
  ],
  exports: [TiposgastosComponent]  ,
   providers: [TiposGastosService]
})
export class TiposgastosModule {}