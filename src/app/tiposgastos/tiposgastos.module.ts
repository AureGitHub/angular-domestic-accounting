import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { TiposgastosComponent }     from './tiposgastos.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserModule } from '@angular/platform-browser';

 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    GridModule
    
  ],
  declarations: [
    TiposgastosComponent
  ],
  exports: [TiposgastosComponent]  
})
export class TiposgastosModule {}