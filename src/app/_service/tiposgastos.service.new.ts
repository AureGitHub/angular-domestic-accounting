import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {AbstractService} from './abstract.service'
@Injectable()
export class TiposGastosNewService extends AbstractService {
    constructor(http: Http) { super(http, "tipogasto/get"); }

    // public queryForCategory({ CategoryID }: { CategoryID: number }, state?: any): void {
    //     this.query(Object.assign({}, state, { "filter": `CategoryID eq ${CategoryID}` }));
    // }

    // public queryForProductName(ProductName: string, state?: any): void {
    //     this.query(Object.assign({}, state, { "filter": `contains(ProductName, '${ProductName}')` }));
    // }

}