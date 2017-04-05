import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { toODataString } from '@progress/kendo-data-query';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/map';

const REMOVE_ACTION = 'destroy';

export abstract class AbstractService extends BehaviorSubject<any> {
    private BASE_URL: string = 'http://localhost:3000/';

    

    constructor(private http: Http, private tableName: string) {
        super(null);
    }

    public read(state: any): Observable<GridDataResult>{
          return this.fetch(this.tableName, state);
    }

    public query(state: any ): void {
        this.fetch(this.tableName, state)
            .subscribe(x => {              
                return super.next(x)});
    }

     public queryFull(state: any ): Observable<GridDataResult> {
        return this.fetch(this.tableName, state);
            
    }

    private filterToString({ filter }: { filter?: string }): string {
        return filter ? `&$filter=${filter}` : '';
    }

     public remove(data: any,state: any) {
        let url = `${this.BASE_URL}tipogasto/deleteN/${data._id}`;
        return this.http.get(url)
        .map(res => res.json() || [])
        .subscribe(
            res => 
            {
                this.query(state)
            }
            );
      

        // this.fetch(REMOVE_ACTION, data)
        //     .subscribe(() => this.read(), () => this.read());
    }

     public Add(data: any,state: any) {
        let url = `${this.BASE_URL}tipogasto/createN/`;
        return this.http.post(url,data)
        .map(res => res.json() || [])
        .subscribe(
            res => 
            {
                this.query(state)
            }
            );
      

        // this.fetch(REMOVE_ACTION, data)
        //     .subscribe(() => this.read(), () => this.read());
    }


 public Save(data: any,state: any, isNew?: boolean) {
        let url = "";
        if(isNew){
            url = `${this.BASE_URL}tipogasto/createN/`;
        }
        else{
            url = `${this.BASE_URL}tipogasto/updateN/`;
        }
        
        return this.http.post(url,data)
        .map(res => res.json() || [])
        .subscribe(
            res => 
            {
                this.query(state)
            }
            );
      

        // this.fetch(REMOVE_ACTION, data)
        //     .subscribe(() => this.read(), () => this.read());
    }


    



    private fetch(tableName: string, state: any): Observable<GridDataResult> {
        const queryStr = `${toODataString(state)}&$count=true${this.filterToString(state)}`;

        return this.http
            .get(`${this.BASE_URL}${tableName}?${queryStr}`)
            .map(response => response.json())
            .map(response => 
            {
                return (<GridDataResult>{
                    data: response.value, 
                    total: response.total
                });
            }
            );
    }


    
}