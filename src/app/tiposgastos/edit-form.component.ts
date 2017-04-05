import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import {TipoGasto } from '../_models/tiposgastos';

@Component({
    selector: 'kendo-grid-edit-form',
    styles: [
      "input[type=text] { width: 100%; }"
    ],
    template: `
        <kendo-dialog *ngIf="active" (close)="closeForm()">
          <kendo-dialog-titlebar>
            {{ isNew ? 'Añadir tipo de gasto' : 'Editar  tipo de gasto' }}
          </kendo-dialog-titlebar>

            <form novalidate [formGroup]="editForm">
                <div class="form-group">
                    <label for="descripcion" class="control-label">Descripción</label>
                    <input type="text" class="k-textbox" formControlName="descripcion" />
                    <div class="k-tooltip k-tooltip-validation" [hidden]="editForm.controls.descripcion.valid || editForm.controls.descripcion.pristine">
                        La descripcion es obligatoria
                    </div>
                </div>  
            </form>

            <kendo-dialog-actions>
                <button class="k-button" (click)="onCancel($event)">Cancelar</button>
                <button class="k-button k-primary" [disabled]="!editForm.valid" (click)="onSave($event)">Guardar</button>
            </kendo-dialog-actions>
        </kendo-dialog>
    `
})
export class GridEditFormComponent {
    private editForm = new FormGroup({
        '_id': new FormControl(),
        'descripcion': new FormControl("", Validators.required)
    });

    private active: boolean = false;
    @Input() public isNew: boolean = false;

    @Input() public set model(product: TipoGasto) {
        this.editForm.reset(product);

        this.active = product !== undefined;
    }

    @Output() cancel: EventEmitter<any> = new EventEmitter();
    @Output() save: EventEmitter<TipoGasto> = new EventEmitter();

    public onSave(e): void {
        e.preventDefault();        
        this.save.emit(this.editForm.value);
        this.active = false;
    }

    public onCancel(e): void {
        e.preventDefault();
        this.closeForm();
    }

    private closeForm(): void {
        this.active = false;
        this.cancel.emit();
    }
}
