import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { TiposgastosComponent }     from './tiposgastos.component';
import { GridModule } from '@progress/kendo-angular-grid';

 

@NgModule({
  imports: [
    CommonModule,
    FormsModule
    
  ],
  declarations: [
    TiposgastosComponent
  ],
  exports: [TiposgastosComponent]  
})
export class TiposgastosModule {}