import { Component } from '@angular/core';
import { products } from '../_models/products';
import {
	GridDataResult,
	PageChangeEvent
} from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-tiposgastos',
  templateUrl: './tiposgastos.component.html',
  styleUrls: ['./tiposgastos.component.css']
})
export class TiposgastosComponent  {

  private gridView: GridDataResult;
	private pageSize: number = 10;
	private skip: number = 0;
	private gridData: any[] = products;


protected pageChange(event: PageChangeEvent): void {
		this.skip = event.skip;
		this.loadProducts();

	}
	private loadProducts(): void {
		this.gridView = {
			data: this.gridData.slice(this.skip, this.skip + this.pageSize),
			total: this.gridData.length
		};
	}

  constructor() { 
		this.loadProducts();

	}

 

}
