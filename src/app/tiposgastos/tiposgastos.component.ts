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

	 protected removeHandler({dataItem}) {
        this.service.remove(dataItem);		 
        this.service.query( this.state);
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