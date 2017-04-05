import { Route } from '@angular/router';
import { AuthGuard }            from '../_guard/auth-guard.service';
import { AuthService }          from '../auth.service';
import { LstTiposGastos }       from './lst.tipos.gastos';

export const TiposGestosRoutes: Route[] = [  
	{ path: 'tiposgastos',component: LstTiposGastos }
]; 
 


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/