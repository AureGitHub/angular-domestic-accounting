import { Component } from '@angular/core';

import {
	GridDataResult,
	PageChangeEvent,
	DataStateChangeEvent
} from '@progress/kendo-angular-grid';

import { Observable } from 'rxjs';
import { TiposGastosNewService } from '../_service/tiposgastos.service.new';
import { State } from '@progress/kendo-data-query';

@Component({
	selector: 'app-tiposgastos',
	templateUrl: './tiposgastos.component.html',
	styleUrls: ['./tiposgastos.component.css']
})
export class TiposgastosComponent {


	public opened: boolean = false;
	public verFormTipoGasto: boolean = false;
	public strBotonAnadir: string = 'Añadir tipo gastos';


	public ItemBorrar: any;



	public view: Observable<GridDataResult>;
	public state: State = {
		skip: 0,
		take: 10
	};


	constructor(private service: TiposGastosNewService) {
		this.view = service;
		this.service.query(this.state);

	}




	public dataStateChange(state: DataStateChangeEvent): void {
		this.state = state;
		this.service.query(state);
	}

	protected removeHandler({ dataItem }) {

		this.opened = true;
		this.ItemBorrar = dataItem;
	}


	public BorrarItem() {
		this.service.remove(this.ItemBorrar, this.state);
		this.opened = false;
	}

	public close() {
		console.log(`Dialog result: ${status}`);
		this.opened = false;
	}

	public AnadirTipoGasto() {

		this.verFormTipoGasto = !this.verFormTipoGasto;
		if (this.verFormTipoGasto)
			this.strBotonAnadir = 'Cerrar formulario';
		else
			this.strBotonAnadir = 'Añadir tipo gastos';
	}

	onSubmit(event): void {
		this.verFormTipoGasto = false;

	this.service.Add(event, this.state);

		if (this.verFormTipoGasto)
			this.strBotonAnadir = 'Cerrar formulario';
		else
			this.strBotonAnadir = 'Añadir tipo gastos';
		alert(event.descripcion);
	}








	// protected pageChange(event: PageChangeEvent): void {
	// 	console.log(event);
	// 	this.skip = event.skip;
	// 	this.loadProducts();

	// }
	// private loadProducts(): void {

	// 	this.tiposGastosService.get().subscribe(result => {
	// 		this.gridData = result;

	// 		this.gridView = {
	// 			data: this.gridData.slice(this.skip, this.skip + this.pageSize),
	// 			total: this.gridData.length
	// 		};

	// 	});




	// }





}