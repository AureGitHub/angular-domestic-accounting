import { Component } from '@angular/core';

import {
	GridDataResult,
	PageChangeEvent
} from '@progress/kendo-angular-grid';

import { Observable } from 'rxjs';
import { TiposGastosService } from '../_service/tiposgastos.service';


@Component({
	selector: 'app-tiposgastos',
	templateUrl: './tiposgastos.component.html',
	styleUrls: ['./tiposgastos.component.css']
})
export class TiposgastosComponent {


	TiposGastos: Observable<any[]>

	constructor(private tiposGastosService: TiposGastosService) {
		this.loadProducts();

	}

	private gridView: GridDataResult;
	private pageSize: number = 5;
	private skip: number = 0;
	private gridData = null;


	protected pageChange(event: PageChangeEvent): void {
		console.log(event);
		this.skip = event.skip;	
		this.loadProducts();

	}
	private loadProducts(): void {

		this.tiposGastosService.get().subscribe(result => {
			this.gridData = result;

			this.gridView = {
				data: this.gridData.slice(this.skip, this.skip + this.pageSize),
				total: this.gridData.length
			};

		});




	}





}
