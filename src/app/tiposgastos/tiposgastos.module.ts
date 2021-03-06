import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';

import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserModule } from '@angular/platform-browser';

// import { TiposgastosComponent }     from './tiposgastos.component';
// import { TipoGastoFormComponent }     from './tipogasto-form/tipogasto-form.component';

import { LstTiposGastos }     from './lst.tipos.gastos';
import { GridEditFormComponent }     from './edit-form.component';




import { Jsonp, JsonpModule } from '@angular/http';

 import { DialogModule } from '@progress/kendo-angular-dialog';
 import { TiposGastosNewService }      from '../_service/tiposgastos.service.new'; 

@NgModule({
  imports: [
     JsonpModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,  
    BrowserModule,
    GridModule,
    DialogModule
    
  ],
  declarations: [
    LstTiposGastos,
    GridEditFormComponent
  ],
  exports: [LstTiposGastos]  ,
   providers: [TiposGastosNewService]
})
export class TiposgastosModule {}
