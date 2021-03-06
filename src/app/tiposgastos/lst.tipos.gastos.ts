import { Observable } from 'rxjs/Rx';
import { Component, OnInit, Inject } from '@angular/core';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

import { TipoGasto } from '../_models/tiposgastos';
import { TiposGastosNewService } from '../_service/tiposgastos.service.new';



@Component({
    selector: 'lst-tiposgastos-app',
    template: `
<div class="container">
<div class="row">
  <div class="col-md-10"></div>
  <div class="col-md-2">Accion :{{!openCargando ? "Cargando..." : " "}}</div>
</div>

    
<div class="row">    

   
     <kendo-dialog   *ngIf="openConfirm" (close)="close('cancel')">
          <kendo-dialog-titlebar>
           Borrado de elemento
          </kendo-dialog-titlebar>

            <p style="margin: 30px; text-align: center;">Se va a borrar. ¿Continuar?</p>

            <kendo-dialog-actions>

                <button class="k-button" (click)="close()">No</button>
                <button class="k-button k-primary"  (click)="BorrarItem()">Sí</button>
                
            </kendo-dialog-actions>
        </kendo-dialog>

 
   
        <kendo-grid
            [data]="view | async"
            [height]="400"
            [pageSize]="gridState.take" [skip]="gridState.skip" [sort]="gridState.sort"
            [pageable]="true" [sortable]="true"
            (dataStateChange)="onStateChange($event)"
            (edit)="editHandler($event)" (remove)="removeHandler($event)"
            (add)="addHandler($event)"
            >
            <kendo-grid-toolbar>
                <button kendoGridAddCommand>Nuevo tipo gasto</button>
            </kendo-grid-toolbar>
            <kendo-grid-column field="descripcion" title="Descripción"></kendo-grid-column>        
            <kendo-grid-command-column title="command" width="220">
                <template>
                    <button kendoGridEditCommand class="k-primary">Editar</button>
                    <button kendoGridRemoveCommand>Borrar</button>
                </template>
            </kendo-grid-command-column>
        </kendo-grid>     

      <kendo-grid-edit-form [model]="editDataItem" [isNew]="isNew"
          (save)="saveHandler($event)"
          (cancel)="cancelHandler()">
      </kendo-grid-edit-form>

</div>

<div class="row">   
aaaaaa   {{openCargando}}
</div>
</div>
  `
})




export class LstTiposGastos implements OnInit {

   

    public view: Observable<GridDataResult>;
    public gridState: State = {
        sort: [],
        skip: 0,
        take: 10
    };
    private openCargando: boolean = false;


    private openConfirm: boolean = false;
    private editDataItem: TipoGasto;
    private removeDataItem: TipoGasto;
    private isNew: boolean;

    constructor(private service: TiposGastosNewService) {

        this.view = service;
        this.service.query(this.gridState);

      

        //this.loadGrid();



    }

    loadGrid() {
        this.view = this.service.read(this.gridState);

        this.openCargando = true;

        this.view.subscribe(x => {
            this.openCargando = false;
        });
    }

    public ngOnInit(): void {
        
   


    }

    public onStateChange(state: State) {
        this.gridState = state;
        this.service.query(this.gridState);

    }

    public addHandler() {
        this.editDataItem = new TipoGasto();
        this.isNew = true;
    }

    public editHandler({ dataItem }) {
        this.editDataItem = dataItem;
        this.isNew = false;
    }

    public cancelHandler() {
        this.editDataItem = undefined;
    }

    public saveHandler(tipoGasto: TipoGasto) {
        this.service.Save(tipoGasto, this.gridState, this.isNew);
        this.editDataItem = undefined;
    }

    public removeHandler({ dataItem }) {

        this.openConfirm = true;
        this.removeDataItem = dataItem;
    }

    public BorrarItem() {
        this.service.remove(this.removeDataItem, this.gridState);
        this.openConfirm = false;
    }

    public close() {
        console.log(`Dialog result: ${status}`);
        this.openConfirm = false;
    }

}
