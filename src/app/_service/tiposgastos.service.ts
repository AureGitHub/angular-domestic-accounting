import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { API_CONFIG } from '../_config/config';


const CREATE_ACTION = 'create';
const UPDATE_ACTION = 'update';
const REMOVE_ACTION = 'destroy';

@Injectable()
export class TiposGastosService {
    constructor( @Inject(API_CONFIG) private apiConfig: any, private http: Http) {}
    get() {
        let url = `${this.apiConfig.url}${this.apiConfig.pathTiposGastos}/get`;
        return this.http.get(url).map(res => res.json() || []);
    }
}
