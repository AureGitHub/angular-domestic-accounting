import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { toODataString } from '@progress/kendo-data-query';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/map';


export abstract class AbstractService extends BehaviorSubject<GridDataResult> {
    private BASE_URL: string = 'http://localhost:3000/';

    constructor(private http: Http, private tableName: string) {
        super(null);
    }

    public query(state: any): void {
        this.fetch(this.tableName, state)
            .subscribe(x => super.next(x));
    }

    private filterToString({ filter }: { filter?: string }): string {
        return filter ? `&$filter=${filter}` : '';
    }

    private fetch(tableName: string, state: any): Observable<GridDataResult> {
        const queryStr = `${toODataString(state)}&$count=true${this.filterToString(state)}`;

        return this.http
            .get(`${this.BASE_URL}${tableName}?${queryStr}`)
            .map(response => response.json())
            .map(response => (<GridDataResult>{
                data: response.value, 
                total: 10//parseInt(response["@odata.count"], 10)
            }));
    }
}